"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, School, GraduationCap, Image as ImageIcon, MessageSquare, ZoomIn } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  college: string;
  branch: string;
  feedback: string;
  rating: number;
}

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"written" | "screenshots">("written");
  const [isZoomed, setIsZoomed] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Swapnil Patil",
      college: "COEP Technological University, Pune",
      branch: "Computer Engineering",
      feedback: "Campus Academy helped me secure COEP in CAP Round 1! Kalpesh Sir's college list prediction and priority placement was 100% accurate. The ₹999 plan is worth every rupee.",
      rating: 5,
    },
    {
      id: 2,
      name: "Pooja Deshmukh",
      college: "VJTI, Mumbai",
      branch: "Information Technology",
      feedback: "With 92.4% in my Diploma, I was extremely confused between IT at VJTI or Computer at SPIT. The 1-to-1 personal counselling resolved my branch confusion and gave me clear clarity.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rohan Joshi",
      college: "PICT, Pune",
      branch: "Electronics & Telecommunication",
      feedback: "My Document Verification was rejected initially at the FC center due to a spelling error in my Caste Certificate. Kalpesh Sir guided me to draft an affidavit that resolved the issue immediately.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            What Our Students Say
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Real feedback from engineering aspirants who secured admissions in Maharashtra's finest colleges.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center mb-16 no-print">
          <div className="bg-primary-glow/20 border border-card-border p-1 rounded-full flex gap-2">
            <button
              onClick={() => setActiveTab("written")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "written"
                  ? "bg-primary text-white shadow-md"
                  : "text-foreground hover:bg-primary/5"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Student Stories</span>
            </button>
            <button
              onClick={() => setActiveTab("screenshots")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "screenshots"
                  ? "bg-primary text-white shadow-md"
                  : "text-foreground hover:bg-primary/5"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Verified Proofs</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "written" ? (
            <motion.div
              key="written"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Feedback */}
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      &ldquo;{test.feedback}&rdquo;
                    </p>
                  </div>

                  {/* Student Detail */}
                  <div className="pt-6 mt-6 border-t border-card-border/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {test.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{test.name}</h4>
                      <div className="flex flex-col text-[10px] text-gray-500 font-semibold mt-0.5">
                        <span className="flex items-center gap-1">
                          <School className="w-3 h-3 text-secondary" />
                          {test.college}
                        </span>
                        <span className="flex items-center gap-1 mt-0.5">
                          <GraduationCap className="w-3 h-3 text-secondary" />
                          {test.branch}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="screenshots"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center max-w-lg mx-auto"
            >
              {/* Display feedback screenshot copied from CA data */}
              <div
                onClick={() => setIsZoomed(true)}
                className="relative border-4 border-primary/20 dark:border-primary-dark/80 rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[9/16] w-full max-w-[280px] cursor-zoom-in group"
              >
                <Image
                  src="/assets/feedback.jpg"
                  alt="Verified WhatsApp Student Feedback"
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1600' fill='%233D1054'><rect width='900' height='1600' fill='%23EFEBFC'/><text x='450' y='800' font-size='50' font-family='Arial' font-weight='bold' text-anchor='middle' fill='%233D1054'>Verified Feedback Image</text></svg>";
                  }}
                />
                
                {/* Zoom overlay badge */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <div className="bg-white/90 p-2.5 rounded-full shadow-md text-primary flex items-center gap-1.5 text-xs font-bold">
                    <ZoomIn className="w-4.5 h-4.5" />
                    <span>Zoom Proof</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-gray-500 font-bold mt-4 uppercase tracking-wider">
                Click image to zoom/view verified proof
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Zoomed Modal View */}
        <AnimatePresence>
          {isZoomed && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsZoomed(false)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              ></motion.div>

              {/* Zoom Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-md w-full aspect-[9/16] z-10 rounded-2xl overflow-hidden shadow-2xl bg-white"
              >
                <button
                  onClick={() => setIsZoomed(false)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 z-20 shadow-md transition-colors"
                  aria-label="Close Zoom"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Image
                  src="/assets/feedback.jpg"
                  alt="Verified WhatsApp Feedback Zoom"
                  fill
                  sizes="400px"
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 1600' fill='%233D1054'><rect width='900' height='1600' fill='%23EFEBFC'/><text x='450' y='800' font-size='50' font-family='Arial' font-weight='bold' text-anchor='middle' fill='%233D1054'>Verified Feedback Image</text></svg>";
                  }}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
