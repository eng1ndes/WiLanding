import React, { useState, useRef } from "react";
import { trackContactFormSubmit, trackFreeSignupClick } from "../utils/conversions";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooterSection";
import { Turnstile } from "@marsidev/react-turnstile";
import { Mail, MapPin, Twitter, Send, CheckCircle2, ArrowRight, MessageSquare, Building2 } from "lucide-react";

export default function ContactPage() {
  const { t } = useTranslation("contact");
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileRef = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // Build API payload
    const apiPayload = {
      "cf-turnstile-response": turnstileToken,
      email: payload.email,
      name: `${payload.firstName} ${payload.lastName}`,
      company: payload.company,
      message: payload.message || "",
    };

    try {
      const res = await fetch("https://whiteintel.io/api/regular/pub/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.success) {
        const errText = (json.error || "").toLowerCase();
        if (errText.includes("captcha") || errText.includes("bot")) {
          setStatus("captcha-failed");
          setTurnstileToken("");
          setTimeout(() => { turnstileRef.current?.reset(); }, 150);
        } else {
          setStatus("error");
        }
        return;
      }

      setStatus("success");
      setTurnstileToken("");
      turnstileRef.current?.reset();
      trackContactFormSubmit();

    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Whiteintel</title>
        <meta name="description" content="Get in touch with the Whiteintel team. Contact us for enterprise inquiries, partnerships, or to schedule a demo of our threat intelligence platform." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Whiteintel" />
        <meta property="og:description" content="Reach the Whiteintel team for enterprise inquiries, partnerships, or a platform demo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whiteintel.io/contact" />
        <meta property="og:site_name" content="Whiteintel" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@whiteintel_io" />
        <link rel="canonical" href="https://whiteintel.io/contact" />
      </Helmet>
      <Navbar variant="light" />
      
      <main className="relative min-h-screen bg-white text-slate-900 pt-36 pb-12 overflow-hidden">
        
        {/* --- BACKGROUND LAYERS (LIGHT THEME) --- */}
        {/* 1. Dotted Pattern */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.4]" 
          style={{ 
              backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
          }}
        />
        {/* 2. Soft Radial Fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_90%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                {/* LEFT COLUMN: Info & Context (LIGHT THEME) */}
                <div className="flex flex-col pt-8">


                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        {t("heading")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            {t("headingHighlight")}
                        </span>
                    </h1>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
                        <p>{t("description1")}</p>
                        <p>{t("description2")}</p>
                    </div>

                    {/* Contact Details List (Light styling) */}
                    <div className="space-y-6 border-t border-slate-200 pt-8">
                        
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-slate-900 font-bold">{t("emailUs")}</h3>
                                <p className="text-slate-500 text-sm mt-1 mb-1">{t("emailUsDesc")}</p>
                                <a href="mailto:info@whiteintel.io" className="text-blue-600 hover:text-blue-800 font-mono text-sm font-medium transition-colors">
                                    info@whiteintel.io
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-slate-900 font-bold">{t("followUpdates")}</h3>
                                <p className="text-slate-500 text-sm mt-1 mb-1">{t("followUpdatesDesc")}</p>
                                <a href="https://x.com/whiteintel_io" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 font-mono text-sm font-medium transition-colors">
                                    @whiteintel_io
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-slate-900 font-bold">{t("headquarters")}</h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    {t("registeredEntity")} <br />
                                    {t("locationCity")}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT COLUMN: The Form (DARK THEME - The Contradiction) */}
                <div className="relative">
                    {/* Shadow/Glow behind form to lift it off the white page */}
                    <div className="absolute -inset-1 bg-slate-900 rounded-2xl blur-md opacity-20 transform translate-y-4"></div>
                    
                    <div className="relative bg-[#0b1229] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <Building2 className="w-5 h-5"/>
                             </div>
                             <h2 className="text-xl font-bold text-white">{t("form.getInTouch")}</h2>
                        </div>

                        <p className="text-slate-400 text-sm mb-6 ml-1">{t("form.formSubtitle")}</p>

                        {status === "error" && (
                            <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 flex gap-3 items-start">
                                <div className="text-red-400 mt-0.5"><CheckCircle2 className="w-4 h-4 rotate-45" /></div>
                                <div className="text-sm text-red-300">{t("form.errorGeneric")}</div>
                            </div>
                        )}

                        {status === "captcha-failed" && (
                            <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/20 p-4 flex gap-3 items-start">
                                <div className="text-red-400 mt-0.5"><CheckCircle2 className="w-4 h-4 rotate-45" /></div>
                                <div className="text-sm text-red-300">{t("form.captchaFailed")}</div>
                            </div>
                        )}

                        <form onSubmit={onSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <Field id="firstName" label={t("form.firstName")}>
                                    <input id="firstName" name="firstName" required type="text" className={darkInputClasses} placeholder="Jane" />
                                </Field>
                                <Field id="lastName" label={t("form.lastName")}>
                                    <input id="lastName" name="lastName" required type="text" className={darkInputClasses} placeholder="Doe" />
                                </Field>
                            </div>

                            <Field id="company" label={t("form.company")}>
                                <input id="company" name="company" type="text" className={darkInputClasses} placeholder="Acme Corp" />
                            </Field>

                            <Field id="email" label={t("form.email")}>
                                <input id="email" name="email" type="email" required className={darkInputClasses} placeholder="jane@acme.com" />
                            </Field>

                            <Field id="message" label={t("form.message")}>
                                <textarea id="message" name="message" rows={4} className={darkInputClasses} placeholder={t("form.messagePlaceholder")} />
                            </Field>

                            <div className="pt-2">
                                <div className={status === "captcha-failed" ? "mb-4" : "invisible h-0 overflow-hidden"}>
                                    <Turnstile
                                        siteKey="0x4AAAAAABHcWCVoBFGccBYv"
                                        onSuccess={(token) => setTurnstileToken(token)}
                                        options={{ theme: "dark", appearance: "interaction-only" }}
                                        ref={turnstileRef}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0b1229]"
                                >
                                    {t("form.sendMessage")}
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
      </main>
        
      <ContactFooter variant="light" />

      {/* SUCCESS MODAL (Light Theme to match page) */}
      <AnimatePresence>
        {status === "success" && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus(null)}
            />

            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
            >
              <div className="relative w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-100">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Received</h2>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                        Thank you for contacting Whiteintel. We will get back to you at <span className="text-slate-900 font-medium">info@whiteintel.io</span> shortly.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="https://platform.whiteintel.io/signup"
                            target="_blank"
                            rel="noreferrer"
                            onClick={trackFreeSignupClick}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-all"
                        >
                            Create Free Account
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <button
                            onClick={() => setStatus(null)}
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-gray-100 hover:text-slate-900 transition-all"
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

// --- SUB COMPONENTS ---

function Field({ id, label, children, required = false }) {
  const child = React.Children.only(children);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-bold text-slate-400 uppercase tracking-wide ml-1">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      {/* Automatically passes the required prop down to the input */}
      {React.cloneElement(child, { id, name: id, required })}
    </div>
  );
}

// Dark Input Styles for the Contact Form Card
const darkInputClasses = "w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500 transition-all text-sm shadow-inner";