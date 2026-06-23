"use client";

import { useState } from "react";
import { Phone, MessageSquare, Send, Info } from "lucide-react";

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    percentage: "",
    category: "Open",
    branch: "Computer Engineering",
    city: "Pune",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ["Open", "OBC", "SC", "ST", "VJNT / NT-A", "NT-B", "NT-C", "NT-D", "SBC", "EWS", "TFWS"];
  const branches = ["Computer Engineering", "Information Technology", "Artificial Intelligence & Data Science", "Electronics & Telecommunication", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Chemical Engineering", "Other"];
  const cities = ["Pune", "Mumbai", "Nagpur", "Nashik", "Aurangabad", "Kolhapur", "Amravati", "Other"];

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
      if (isNaN(pct) || pct < 35 || pct > 100) {
        newErrors.percentage = "Enter a valid percentage between 35 and 100";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

    // Save lead details locally as secondary backup
    try {
      const existingLeads = localStorage.getItem("dse_leads");
      const leadsList = existingLeads ? JSON.parse(existingLeads) : [];
      leadsList.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem("dse_leads", JSON.stringify(leadsList));
    } catch (e) {
      console.error("Failed to save lead", e);
    }

    // Format WhatsApp text API link
    const textMsg = `Hello Campus Academy, DSE Counselling Enquiry:
- Name: ${formData.name}
- Mobile: ${formData.mobile}
- Diploma Percentage: ${formData.percentage}%
- Category: ${formData.category}
- Preferred Branch: ${formData.branch}
- Preferred City: ${formData.city}
- Message: ${formData.message || "None"}`;

    const encodedText = encodeURIComponent(textMsg);
    
    // Redirecting directly to wa.link if no message, or wa.me for pre-filled query
    const whatsappApiUrl = `https://wa.me/9175956461?text=${encodedText}`;

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappApiUrl, "_blank");
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 no-print">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            Connect With Campus Academy
          </h2>
          <p className="text-sm text-foreground/75 mt-3">
            Fill out the form below to share your requirements, or reach out directly on our social and call channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Social channels and details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm">
            <div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">Direct Contact & Channels</h3>
              <p className="text-xs text-foreground/70 mb-8">
                Got quick questions? Get in touch with Founder Kalpesh Kulkarni or check our educational tutorials.
              </p>

              {/* Action grid */}
              <div className="space-y-4">
                
                {/* Phone Numbers */}
                <div className="flex items-center gap-4 bg-primary/5 dark:bg-primary-glow/20 p-4 rounded-2xl border border-card-border">
                  <div className="bg-primary text-white p-2.5 rounded-xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">Call Team</div>
                    <div className="flex flex-col text-sm font-extrabold text-foreground">
                      <a href="tel:9175956461" className="hover:text-primary transition-colors">9175956461</a>
                      <a href="tel:8830687180" className="hover:text-primary transition-colors mt-0.5">8830687180</a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 bg-primary/5 dark:bg-primary-glow/20 p-4 rounded-2xl border border-card-border">
                  <div className="bg-green-600 text-white p-2.5 rounded-xl">
                    <MessageSquare className="w-5 h-5 fill-white stroke-none" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 font-bold uppercase">WhatsApp Link</div>
                    <a
                      href="https://wa.link/j5skkr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-extrabold text-foreground hover:text-green-600 transition-colors"
                    >
                      Book Counseling Plan
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Channels buttons */}
            <div className="pt-8 border-t border-card-border/50">
              <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Social Media</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://www.youtube.com/results?search_query=MSBTE+Campus+Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-950/20 dark:hover:bg-red-900/30 border border-red-200/20 py-3 rounded-2xl text-xs font-extrabold shadow-sm transition-all"
                >
                  <YoutubeIcon className="w-4.5 h-4.5 fill-red-600 stroke-none" />
                  <span>Subscribe YouTube</span>
                </a>
                <a
                  href="https://instagram.com/campus_academy._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-pink-50 hover:bg-pink-100 text-pink-600 dark:bg-pink-950/20 dark:hover:bg-pink-900/30 border border-pink-200/20 py-3 rounded-2xl text-xs font-extrabold shadow-sm transition-all"
                >
                  <InstagramIcon className="w-4.5 h-4.5" />
                  <span>Follow Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-lg">
            <h3 className="text-xl font-bold font-heading text-foreground mb-1">Request Counselling Guidance</h3>
            <p className="text-xs text-foreground/60 mb-6">
              Enter your diploma academic parameters below to build your query form.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white dark:bg-black/20 border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none transition-colors ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-card-border focus:border-primary"
                    }`}
                    placeholder="Enter full name"
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.name}</span>}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full bg-white dark:bg-black/20 border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none transition-colors ${
                      errors.mobile ? "border-red-500 focus:border-red-500" : "border-card-border focus:border-primary"
                    }`}
                    placeholder="10 digit mobile number"
                  />
                  {errors.mobile && <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.mobile}</span>}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* DSE percentage */}
                <div>
                  <label htmlFor="percentage" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                    Diploma Percentage *
                  </label>
                  <input
                    type="number"
                    id="percentage"
                    name="percentage"
                    step="0.01"
                    value={formData.percentage}
                    onChange={handleChange}
                    className={`w-full bg-white dark:bg-black/20 border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none transition-colors ${
                      errors.percentage ? "border-red-500 focus:border-red-500" : "border-card-border focus:border-primary"
                    }`}
                    placeholder="e.g. 88.50"
                  />
                  {errors.percentage && (
                    <span className="text-[10px] text-red-500 font-bold mt-1 block">{errors.percentage}</span>
                  )}
                </div>

                {/* Category Selection */}
                <div>
                  <label htmlFor="category" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                    Caste Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-black/20 border border-card-border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary transition-colors text-foreground"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-background text-foreground font-semibold">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Branch Selection */}
                <div>
                  <label htmlFor="branch" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                    Preferred Engineering Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-black/20 border border-card-border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary transition-colors text-foreground"
                  >
                    {branches.map((b) => (
                      <option key={b} value={b} className="bg-background text-foreground font-semibold">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City Selection */}
                <div>
                  <label htmlFor="city" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                    Preferred Location / City
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-black/20 border border-card-border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary transition-colors text-foreground"
                  >
                    {cities.map((c) => (
                      <option key={c} value={c} className="bg-background text-foreground font-semibold">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-foreground/80 mb-1.5 uppercase">
                  Additional Details / Question
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-black/20 border border-card-border py-2.5 px-3.5 rounded-xl text-sm font-semibold focus:outline-none focus:border-primary transition-colors text-foreground"
                  placeholder="Tell us about specific college queries or doubts..."
                ></textarea>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2.5 bg-primary/5 dark:bg-primary-glow/20 p-3 rounded-xl border border-card-border text-[11px] text-gray-500 font-bold leading-normal">
                <Info className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                <span>
                  Submitting this form redirects to WhatsApp with a prefilled query outlining your percentage and branch selections.
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-light disabled:bg-primary/50 text-white font-bold py-3.5 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Formatting WhatsApp Message..." : "Request Counselling"}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
