/* Reproduce mobile menu bug via CDP. Serves ./build as SPA, drives headless Chrome. */
const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { spawn } = require("child_process");
const WebSocket = require("ws");

const BUILD = path.join(__dirname, "build");
const PORT = 5050;
const CDP_PORT = 9223;
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".png": "image/png", ".jpg": "image/jpeg", ".json": "application/json",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".webp": "image/webp",
  ".woff2": "font/woff2", ".woff": "font/woff", ".map": "application/json",
};

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let file = path.join(BUILD, p);
  try {
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(BUILD, "index.html");
  } catch { file = path.join(BUILD, "index.html"); }
  res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

function httpGetJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (r) => {
      let d = "";
      r.on("data", (c) => (d += c));
      r.on("end", () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on("error", reject);
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  await new Promise((r) => server.listen(PORT, r));
  const tmpProfile = fs.mkdtempSync(path.join(os.tmpdir(), "cdp-prof-"));
  const chrome = spawn(CHROME, [
    "--headless=new", "--disable-gpu", `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${tmpProfile}`, "--no-first-run", "--no-default-browser-check", "about:blank",
  ], { stdio: "ignore" });

  let version = null;
  for (let i = 0; i < 30 && !version; i++) {
    await sleep(500);
    version = await httpGetJson(`http://127.0.0.1:${CDP_PORT}/json/version`).catch(() => null);
  }
  if (!version) throw new Error("Chrome CDP not reachable");

  const ws = new WebSocket(version.webSocketDebuggerUrl, { maxPayload: 64 * 1024 * 1024 });
  await new Promise((r, j) => { ws.on("open", r); ws.on("error", j); });

  let msgId = 0;
  const pending = new Map();
  const events = [];
  ws.on("message", (data) => {
    const m = JSON.parse(data);
    if (m.id && pending.has(m.id)) {
      const { resolve, reject } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? reject(new Error(JSON.stringify(m.error))) : resolve(m.result);
    } else if (m.method) {
      events.push(m);
    }
  });
  const send = (method, params = {}, sessionId) =>
    new Promise((resolve, reject) => {
      const id = ++msgId;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    });

  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const S = (m, p) => send(m, p, sessionId);

  await S("Page.enable");
  await S("Runtime.enable");
  await S("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await S("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 5 });

  const evalJson = async (expr) => {
    const r = await S("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) return { evalError: r.exceptionDetails.text + " " + (r.exceptionDetails.exception ? r.exceptionDetails.exception.description : "") };
    return r.result.value;
  };

  const DIAG = `(() => {
    const btn = document.querySelector('#nav-root button[class*="lg:hidden"]');
    if (!btn) return { btn: null };
    const r = btn.getBoundingClientRect();
    const cx = Math.round(r.left + r.width / 2), cy = Math.round(r.top + r.height / 2);
    const hit = document.elementFromPoint(cx, cy);
    const desc = (el) => el ? el.tagName + "." + String(el.className).slice(0, 90) : "none";
    const overlay = document.querySelector('div[class*="fixed inset-0 z-40"]');
    const ov = overlay ? {
      cls: overlay.className.slice(0, 140),
      rect: overlay.getBoundingClientRect().toJSON(),
      transform: getComputedStyle(overlay).transform,
    } : null;
    return {
      btn: { cx, cy, rect: r.toJSON() },
      hitIsButton: hit === btn || (hit && btn.contains(hit)),
      hitDesc: desc(hit),
      headerCount: document.querySelectorAll("#nav-root").length,
      bodyOverflow: document.body.style.overflow,
      scrollY: window.scrollY,
      overlay: ov,
    };
  })()`;

  const scenarios = [
    { name: "home top", url: "/", scroll: 0 },
    { name: "home scrolled", url: "/", scroll: 1200 },
    { name: "pricing top", url: "/pricing", scroll: 0 },
    { name: "pricing scrolled", url: "/pricing", scroll: 1200 },
    { name: "ato top", url: "/ato-prevention", scroll: 0 },
    { name: "ato scrolled", url: "/ato-prevention", scroll: 1200 },
    { name: "contact top", url: "/contact", scroll: 0 },
    { name: "reports top", url: "/reports", scroll: 0 },
  ];

  for (const sc of scenarios) {
    await S("Page.navigate", { url: `http://127.0.0.1:${PORT}${sc.url}` });
    await sleep(4000); // load + lazy chunk + suspense + i18n
    if (sc.scroll) {
      await evalJson(`window.scrollTo(0, ${sc.scroll}); 'ok'`);
      await sleep(600);
    }
    const before = await evalJson(DIAG);
    if (!before || !before.btn) {
      console.log(`\n=== ${sc.name} ===\nNO TOGGLE BUTTON FOUND`, JSON.stringify(before));
      continue;
    }
    const { cx, cy } = before.btn;
    await S("Input.dispatchMouseEvent", { type: "mousePressed", x: cx, y: cy, button: "left", clickCount: 1 });
    await S("Input.dispatchMouseEvent", { type: "mouseReleased", x: cx, y: cy, button: "left", clickCount: 1 });
    await sleep(700); // transition 300ms
    const after = await evalJson(DIAG);
    const opened = after && after.overlay && after.overlay.cls.includes("translate-x-0");
    const visible = after && after.overlay && after.overlay.rect && after.overlay.rect.x < 10 && after.overlay.rect.height > 300;
    console.log(`\n=== ${sc.name} ===`);
    console.log("hitIsButton:", before.hitIsButton, "| hit:", before.hitDesc);
    console.log("scrollY:", before.scrollY, "| headerCount:", before.headerCount);
    console.log("OPENED(class):", opened, "| VISIBLE(geometry):", visible);
    console.log("overlay after:", after && after.overlay ? JSON.stringify({ x: after.overlay.rect.x, y: after.overlay.rect.y, w: after.overlay.rect.width, h: after.overlay.rect.height, tf: after.overlay.transform, cls: after.overlay.cls.slice(0, 80) }) : "none");
    console.log("bodyOverflow after click:", after && after.bodyOverflow);
  }

  chrome.kill();
  server.close();
  process.exit(0);
}

main().catch((e) => { console.error("FATAL", e); process.exit(1); });
