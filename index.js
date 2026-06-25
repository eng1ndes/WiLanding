import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import { initPromise } from './i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from './components/ScrollToTop';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);

// Resolve once every <link rel="stylesheet"> has finished loading (or after 3s
// fallback so a slow/broken stylesheet never leaves the page invisible).
function stylesheetsLoaded() {
  const links = [...document.querySelectorAll('link[rel="stylesheet"]')];
  const all = Promise.all(
    links.map((l) =>
      l.sheet
        ? Promise.resolve()
        : new Promise((resolve) => {
            l.addEventListener('load', resolve, { once: true });
            l.addEventListener('error', resolve, { once: true });
          })
    )
  );
  return Promise.race([all, new Promise((r) => setTimeout(r, 3000))]);
}

// Render the app — wait for i18n but always render even if it fails
function renderApp() {
  root.render(
    <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  );
  stylesheetsLoaded().then(() =>
    requestAnimationFrame(() => rootEl.classList.add('ready'))
  );
}

initPromise.then(renderApp).catch(renderApp);

// Safety net: if nothing has rendered after 3 seconds, force render
setTimeout(() => {
  if (!rootEl.classList.contains('ready')) renderApp();
}, 3000);

reportWebVitals();
