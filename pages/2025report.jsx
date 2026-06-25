import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooterSection";
import TrustedBySection from "../components/TrustedBySection";
import { Turnstile } from "@marsidev/react-turnstile";
import { Helmet } from "react-helmet-async";
import { trackFreeSignupClick } from "../utils/conversions";

export default function ReportPage() {
  const [status, setStatus] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef(null);

async function onSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const payload = Object.fromEntries(form.entries());

  const apiPayload = {
    "cf-turnstile-response": turnstileToken,
    email: payload.email,
    first_name: payload.firstName,
    last_name: payload.lastName,
    company: payload.company || "",
  };

  try {
    const res = await fetch("https://whiteintel.io/api/public/download_report.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(apiPayload),
    });

    const json = await res.json();
    if (!json.success) {
  const errText = (json.error || "").toLowerCase();

  if (errText.includes("rate limit")) {
    setStatus("rate-limit");
  } else if (errText.includes("captcha")) {
    setStatus("captcha-failed");

    // Reset captcha again on backend-reported failure
    setTurnstileToken("");
    setTimeout(() => {
      turnstileRef.current?.reset();
    }, 150);
  } else {
    setStatus("error");
  }

  return; // stop execution
}


    // Fetch the actual PDF as a Blob
    const fileRes = await fetch("https://whiteintel.io" + json.download_url, {
      method: "GET",
    });

    if (!fileRes.ok) throw new Error("Failed to fetch PDF");

    const blob = await fileRes.blob();
    const url = window.URL.createObjectURL(blob);

    // Create invisible link to trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "2025-Information-Stealer-Report.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();

    // Clean up
    window.URL.revokeObjectURL(url);

    setStatus("success");
    setTurnstileToken("");
    turnstileRef.current?.reset();

  }  catch (err) {
  console.error("Report download error:", err);

  const msg = err.message.toLowerCase();

  if (msg.includes("rate limit")) {
    setStatus("rate-limit");
  } else if (msg.includes("captcha")) {
    setStatus("captcha-failed");

    // Reset the captcha for user
    setTurnstileToken("");
    setTimeout(() => {
      turnstileRef.current?.reset();
    }, 150);
  } else {
    setStatus("error");
  }
}

}






  return (
    <>
          <Helmet>
        <title>2025 Infostealer Landscape Report | 1 Billion Exposed Credentials – Whiteintel</title>
        <meta name="description" content="Download Whiteintel's 2025 Information Stealer Landscape Report — analysis of 20M+ stealer infections, 5.5M compromised devices, and nearly 1 billion exposed credentials across 5 critical sectors." />
        <meta name="keywords" content="infostealer report 2025, stealer malware landscape, credential exposure report, infostealer statistics, stealer log analysis, malware infection report, cybersecurity annual report 2025" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="2025 Infostealer Landscape Report | 1 Billion Exposed Credentials – Whiteintel" />
        <meta property="og:description" content="20M+ stealer infections, 5.5M compromised devices, nearly 1 billion exposed credentials. Download the full 2025 report from Whiteintel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/2025-information-stealer-landscape-report" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <meta name="twitter:title" content="2025 Infostealer Landscape Report | 1 Billion Exposed Credentials – Whiteintel" />
        <meta name="twitter:description" content="20M+ stealer infections, 5.5M compromised devices, nearly 1 billion exposed credentials. Download the full 2025 report." />
        <link rel="canonical" href="https://whiteintel.io/2025-information-stealer-landscape-report" />
      </Helmet>
      <Navbar variant="dark" />
      <main className="relative isolate bg-white text-black mt-20">

        {/* dotted background */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:18px_18px] opacity-50" />

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 lg:py-16">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-black">
              Download the 2025 Information Stealer Landscape Report
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-700">
              Get access to Whiteintel’s in-depth analysis of more than{" "}
              <span className="font-semibold">20 million stealer infections</span>,{" "}  
              <span className="font-semibold">5.5 million unique compromised devices</span>,  
              and nearly <span className="font-semibold">1 billion exposed credentials</span> collected across 2025.
            </p>

            <p className="mt-6 max-w-xl text-lg text-gray-700">
              This report covers five critical sectors, industry comparison metrics, and exposure data 
              collected from stealer-infected systems worldwide.
            </p>

            <p className="mt-6 text-sm text-gray-700">
              Follow us on{" "}
              <a
                href="https://x.com/whiteintel_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
              >
                X
              </a>{" "}
              for ongoing breach intelligence insights.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="md:pl-6 relative">
            <div className="rounded-2xl bg-gray-900 p-6 shadow-2xl ring-1 ring-black/10 md:p-8 text-white">
              <h2 className="text-lg font-semibold">Access Report</h2>

              {status === "error" && (
                <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-300 ring-1 ring-red-500/30">
                  Something went wrong. Please try again.
                </div>
              )}
              {status === "rate-limit" && (
  <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-300 ring-1 ring-red-500/30">
    You’ve reached the download limit.  
    Please try again in a few minutes.
  </div>
)}

{status === "captcha-failed" && (
  <div className="mt-4 rounded-lg bg-red-500/10 p-3 text-sm text-red-300 ring-1 ring-red-500/30">
    Captcha verification failed. Please try again.
  </div>
)}

              <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field id="firstName" label="First name*">
                    <input id="firstName" name="firstName" required className={inputCls} />
                  </Field>
                  <Field id="lastName" label="Last name*">
                    <input id="lastName" name="lastName" required className={inputCls} />
                  </Field>
                </div>

 

                <Field id="email" label="Email*">
                  <input id="email" name="email" type="email" required inputMode="email" className={inputCls} />
                </Field>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold hover:from-blue-700 hover:to-indigo-700"
                >
                  Download Report
                </button>

<div className={status === "captcha-failed" ? "mt-3" : "invisible h-0 overflow-hidden"}>
  <Turnstile
    siteKey="0x4AAAAAABHcWCVoBFGccBYv"
    onSuccess={(token) => setTurnstileToken(token)}
    options={{
      theme: "dark",
      appearance: "interaction-only",
      "refresh-expired": "manual",
    }}
    ref={turnstileRef}
  />
</div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <ContactFooter variant="light" />

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {status === "success" && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus(null)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-white">
                
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 flex justify-center items-center py-10">
                  <div className="bg-white rounded-full p-5 shadow-lg">
                    <svg
                      className="h-12 w-12 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>

                <div className="px-8 py-10 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank you for your Download
                  </h2>



                  <p className="text-gray-600 mb-10">
                    You can also create a free account to explore live breach data directly on the platform.
                  </p>

                  <div className="flex gap-4 justify-center">
                    <a
                      href="https://platform.whiteintel.io/register"
                      target="_blank"
                      rel="noreferrer"
                      onClick={trackFreeSignupClick}
                      className="flex-1 rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 shadow-md text-center inline-flex items-center justify-center"
                    >
                      Create Free Account
                    </a>
                    <button
                      onClick={() => setStatus(null)}
                      className="flex-1 rounded-lg bg-gray-200 text-black py-3 font-semibold hover:bg-gray-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Field({ id, label, children, required = true }) {
  const childWithRequired = React.cloneElement(children, { required });
  return (
    <label htmlFor={id} className="block text-sm font-medium">
      <span className="mb-2 block text-gray-200">
        {label}
        {required && !label.includes("*") ? "*" : ""}
      </span>
      {childWithRequired}
    </label>
  );
}

const inputCls =
  "mt-1 w-full rounded-lg bg-white/10 ring-1 ring-inset ring-white/10 px-3 py-2 text-[15px] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/60";
