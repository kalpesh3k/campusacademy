"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The consultancy meetings from Academy were very helpful. The guidance was clear and easy to understand. It really helped me in making better decisions for admission.",
    rating: 5,
  },
  {
    text: "It was too good! The meetings and guidance by sir was amazing. It really helped us to choose good college for admission. We are really very grateful sir. Thank you so much!",
    rating: 5,
  },
  {
    text: "Campus Academy helped bring clarity during a very confusing phase. Their step-by-step guidance and timely updates really built my confidence throughout the admission process.",
    rating: 5,
  },
  {
    text: "Thank you sir, your guidance was very good and I liked it very much. You were guiding everyone for free. You have a very big heart. Thank you again.",
    rating: 5,
  },
  {
    text: "Your guidance made the entire admission process smooth and stress-free. You were always patient, supportive, and ready to clarify my doubts. I'm truly grateful.",
    rating: 5,
  },
  {
    text: "Sir, your counseling is very good. You explained everything properly. You listened to all the questions and doubts and solved them without any kind of boredom. Thank you sir for your guidance.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-badge-bg text-badge-text text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Student Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3">
            What Students Say
          </h2>
        </div>

        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card-bg border border-card-border rounded-2xl p-8 sm:p-10 text-center"
          >
            <Quote className="w-8 h-8 text-primary/20 mx-auto mb-4" />
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-foreground/50 mt-2">
              — Campus Academy Student
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-card-bg border border-card-border text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-foreground/50">
              {current + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="p-2 rounded-full bg-card-bg border border-card-border text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
