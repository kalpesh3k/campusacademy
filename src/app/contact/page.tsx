"use client";

import { useState } from "react";
import {
  Phone,
  MessageSquare,
  Users,
  Send,
  Info,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    percentage: "",
    category: "Open",
    city: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Open", "OBC", "SC", "ST", "VJ/DT-NT", "EWS"];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.percentage.trim()) {
      newErrors.percentage = "Percentage is required";
    } else {
      const pct = parseFloat(formData.percentage);
      if (isNaN(pct) || pct < 0 || pct > 100) {
        newErrors.percentage = "Enter a valid percentage (0–100)";
      }
    }

    if (!formData.city.trim()) newErrors.city = "Preferred city is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const textMsg = `Hello Campus Academy, I need DSE Counselling Guidance:
- Name: ${formData.name}
- Mobile: ${formData.mobile}
- Diploma Percentage: ${formData.percentage}%
- Category: ${formData.category}
- Preferred City: ${formData.city}`;

    const encodedText = encodeURIComponent(textMsg);
    const whatsappUrl = `https://wa.me/919175956461?text=${encodedText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const inputBaseClass =
    "w-full bg-white dark:bg-black/20 border py-3 px-4 rounded-xl text-sm font-semibold focus:outline-none transition-colors text-foreground";

  return (
    <>

      <main className="flex-1 w-full">
        {/* Page Header */}
        <section className="pt-32 pb-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground mt-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-base text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Have questions about DSE admissions? Reach out directly or fill the
              form below – we&apos;ll connect on WhatsApp.
            </p>
          </div>
        </section>

        {/* Two-Column Contact Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
              {/* ── Left Column: Contact Info ── */}
              <div className="lg:col-span-2 bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-heading text-foreground">
                    Direct Contact
                  </h2>
                  <p className="text-xs text-foreground/60">
                    Reach Campus Academy instantly through any of these channels.
                  </p>

                  {/* Phone */}
                  <a
                    href="tel:9175956461"
                    className="flex items-center gap-4 bg-primary/5 dark:bg-primary-glow/20 p-4 rounded-2xl border border-card-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="bg-primary text-white p-3 rounded-xl">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase">
                        Call Us
                      </div>
                      <div className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                        9175956461
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.link/j5skkr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-green-50 dark:bg-green-950/20 p-4 rounded-2xl border border-green-200/30 dark:border-green-800/30 hover:border-green-400/50 transition-colors group"
                  >
                    <div className="bg-green-600 text-white p-3 rounded-xl">
                      <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase">
                        WhatsApp
                      </div>
                      <div className="text-base font-extrabold text-foreground group-hover:text-green-600 transition-colors">
                        Chat With Us
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp Group */}
                  <a
                    href="https://chat.whatsapp.com/HkUZ5xB4Ij11UAjYy752iV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-primary/5 dark:bg-primary-glow/20 p-4 rounded-2xl border border-card-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="bg-primary text-white p-3 rounded-xl">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 font-bold uppercase">
                        WhatsApp Group
                      </div>
                      <div className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors">
                        Join Our Community
                      </div>
                    </div>
                  </a>
                </div>

                {/* Tagline */}
                <div className="mt-8 pt-6 border-t border-card-border/50">
                  <p className="text-xs text-foreground/50 font-bold">
                    Campus Academy – Your Career, Our Commitment
                  </p>
                </div>
              </div>

              {/* ── Right Column: Contact Form ── */}
              <div className="lg:col-span-3 bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-lg">
                <h2 className="text-xl font-bold font-heading text-foreground mb-1">
                  Send Your Details
                </h2>
                <p className="text-xs text-foreground/60 mb-6">
                  Fill in your academic details and we&apos;ll connect with you on
                  WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`${inputBaseClass} ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-card-border focus:border-primary"
                      }`}
                      placeholder="Enter full name"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 font-bold mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Mobile & Percentage Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase"
                      >
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${
                          errors.mobile
                            ? "border-red-500 focus:border-red-500"
                            : "border-card-border focus:border-primary"
                        }`}
                        placeholder="10 digit mobile number"
                      />
                      {errors.mobile && (
                        <span className="text-[11px] text-red-500 font-bold mt-1 block">
                          {errors.mobile}
                        </span>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="percentage"
                        className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase"
                      >
                        Diploma Percentage *
                      </label>
                      <input
                        type="number"
                        id="percentage"
                        name="percentage"
                        step="0.01"
                        value={formData.percentage}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${
                          errors.percentage
                            ? "border-red-500 focus:border-red-500"
                            : "border-card-border focus:border-primary"
                        }`}
                        placeholder="e.g. 78.50"
                      />
                      {errors.percentage && (
                        <span className="text-[11px] text-red-500 font-bold mt-1 block">
                          {errors.percentage}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category & City Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="category"
                        className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase"
                      >
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className={`${inputBaseClass} border-card-border focus:border-primary`}
                      >
                        {categories.map((cat) => (
                          <option
                            key={cat}
                            value={cat}
                            className="bg-background text-foreground font-semibold"
                          >
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase"
                      >
                        Preferred City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`${inputBaseClass} ${
                          errors.city
                            ? "border-red-500 focus:border-red-500"
                            : "border-card-border focus:border-primary"
                        }`}
                        placeholder="e.g. Pune, Mumbai"
                      />
                      {errors.city && (
                        <span className="text-[11px] text-red-500 font-bold mt-1 block">
                          {errors.city}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info Disclaimer */}
                  <div className="flex items-start gap-2.5 bg-primary/5 dark:bg-primary-glow/20 p-3 rounded-xl border border-card-border text-[11px] text-gray-500 font-bold leading-normal">
                    <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Submitting this form opens WhatsApp with a pre-filled
                      message containing your details. No data is stored on our
                      servers.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-600/50 text-white font-bold py-4 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? "Opening WhatsApp..."
                        : "Send on WhatsApp"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full glow-blur" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Join Our WhatsApp Community
            </h2>
            <p className="text-white/70 mt-3 text-base max-w-xl mx-auto">
              Get daily DSE admission updates, cutoff discussions, and peer
              support from students across Maharashtra.
            </p>
            <a
              href="https://chat.whatsapp.com/HkUZ5xB4Ij11UAjYy752iV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-green-600 hover:bg-green-700 text-white font-extrabold py-4 px-10 rounded-full text-base shadow-xl transition-all duration-200 hover:scale-105"
            >
              <Users className="w-5 h-5" />
              Join WhatsApp Group
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

    </>
  );
}
