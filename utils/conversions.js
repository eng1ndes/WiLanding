// src/utils/conversions.js

/**
 * Google Ads conversion tracking helpers.
 * Each function fires a single conversion event via gtag.
 * Safe to call even if gtag failed to load (ad blockers etc) — silently no-ops.
 */

const GOOGLE_ADS_ID = "AW-16530173845";

function fire(label, value, currency = "USD") {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
    value,
    currency,
  });
}

// Contact form submitted (existing)
export function trackContactFormSubmit() {
  fire("cvuRCJmAg6QcEJXfmco9", 250.0);
}


// Free signup button clicked (any "Create Free Account" / "Sign Up" CTA)
export function trackFreeSignupClick() {
  fire("ItzICL3nx6QcEJXfmco9", 50.0);
}

// Calendly "Book a Demo" link clicked
export function trackDemoBookedClick() {
  fire("REPLACE_WITH_DEMO_LABEL", 400.0);
}