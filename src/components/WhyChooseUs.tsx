"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const points = [
  "Personalized College List",
  "CAP Round Guidance",
  "DSE Admission Support",
  "Affordable Counselling",
  "1:1 Personal Guidance",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-primary-glow/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-foreground">
            Why Campus Academy?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 bg-card-bg border border-card-border rounded-xl px-5 py-4"
            >
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
              <span className="text-sm font-medium text-foreground">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
