"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function StudentsFeedback() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  const images = [
    "feedback.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.41.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.43.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.46.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.47 (1).jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.48 (1).jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.48.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.49 (1).jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.49.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.50 (1).jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.50.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.51.jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.52 (1).jpeg",
    "WhatsApp Image 2026-06-19 at 15.20.53.jpeg"
  ];

  return (
    <section id="feedback" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Real WhatsApp Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            Detailed Students Feedback
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Read what our students and parents have to say about Campus Academy&apos;s guidance on our WhatsApp community. (Student names and numbers have been redacted for privacy).
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((imgName, idx) => {
            const imgSrc = `/feedback/${encodeURIComponent(imgName)}`;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                className="break-inside-avoid relative"
              >
                <div
                  onClick={() => setZoomedImg(imgSrc)}
                  className="relative group rounded-2xl overflow-hidden shadow-md border border-card-border cursor-zoom-in bg-card-bg"
                >
                  <img
                    src={imgSrc}
                    alt={`Student Feedback ${idx + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full shadow-lg text-primary flex items-center gap-2 text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ZoomIn className="w-5 h-5" />
                      <span>View Proof</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox for zooming */}
        <AnimatePresence>
          {zoomedImg && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomedImg(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-zoom-out"
              ></motion.div>

              {/* Zoom Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative max-w-2xl w-full max-h-[90vh] z-10 rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center"
              >
                <button
                  onClick={() => setZoomedImg(null)}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 z-20 transition-colors backdrop-blur-md"
                  aria-label="Close Zoom"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={zoomedImg}
                  alt="Zoomed Feedback"
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
