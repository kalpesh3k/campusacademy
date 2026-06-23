"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Send, FileText } from "lucide-react";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", percentage: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if user already closed or submitted lead popup
    const popupClosed = sessionStorage.getItem("dse_popup_closed");
    if (popupClosed === "true") return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 6000); // 6 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    sessionStorage.setItem("dse_popup_closed", "true");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.mobile.trim() || !formData.percentage.trim()) {
      setError("Please fill all required fields");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile.trim())) {
      setError("Enter a valid 10-digit mobile number");
      return;
    }

    const pct = parseFloat(formData.percentage);
    if (isNaN(pct) || pct < 35 || pct > 100) {
      setError("Enter a valid percentage between 35 and 100");
      return;
    }

    // Save lead details
    try {
      const existingLeads = localStorage.getItem("dse_leads");
      const leadsList = existingLeads ? JSON.parse(existingLeads) : [];
      leadsList.push({ ...formData, source: "lead_popup", date: new Date().toISOString() });
      localStorage.setItem("dse_leads", JSON.stringify(leadsList));
    } catch (err) {
      console.error("Failed to save popup lead", err);
    }

    // Trigger WhatsApp message for free guide
    const msg = `Hello Campus Academy, I filled out the lead popup. Please send me the DSE Documents Checklist PDF:
- Name: ${formData.name}
- Mobile: ${formData.mobile}
- Diploma: ${formData.percentage}%`;

    closePopup();
    window.open(`https://wa.me/9175956461?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          ></motion.div>

          {/* Popup Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative bg-background border border-card-border p-6 sm:p-8 rounded-3xl shadow-2xl z-10 max-w-sm w-full"
          >
            {/* Close trigger */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-primary-glow text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="text-center mb-6">
              <span className="bg-secondary/15 text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Special Offer</span>
              </span>
              <h3 className="text-lg font-black font-heading text-foreground mt-3 leading-snug">
                DSE Admissions 2026
              </h3>
              <p className="text-xs text-foreground/75 mt-1">
                Enter your details to download our free <strong>Document Checklist PDF</strong> and book a callback.
              </p>
            </div>

            {/* Lead Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full bg-white dark:bg-black/25 border border-card-border py-2.5 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary text-foreground"
                />
              </div>

              {/* Mobile */}
              <div>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-Digit Mobile Number"
                  className="w-full bg-white dark:bg-black/25 border border-card-border py-2.5 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary text-foreground"
                />
              </div>

              {/* Percentage */}
              <div>
                <input
                  type="number"
                  name="percentage"
                  step="0.01"
                  value={formData.percentage}
                  onChange={handleChange}
                  placeholder="Diploma Aggregate %"
                  className="w-full bg-white dark:bg-black/25 border border-card-border py-2.5 px-3 rounded-xl text-xs font-semibold focus:outline-none focus:border-primary text-foreground"
                />
              </div>

              {/* Error messages */}
              {error && <div className="text-[10px] text-red-500 font-bold text-center">{error}</div>}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-light text-white text-xs font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Get Checklist & Callback</span>
              </button>

              <button
                type="button"
                onClick={closePopup}
                className="w-full text-center text-[10px] font-bold text-gray-400 hover:text-gray-500 transition-colors pt-1"
              >
                No thanks, I will check manually
              </button>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
