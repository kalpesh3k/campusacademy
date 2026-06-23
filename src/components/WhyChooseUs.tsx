"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    { title: "5+ Years Experience", desc: "Expert guidance based on half a decade of tracking CET Cell rounds." },
    { title: "Personalized Guidance", desc: "Custom-built preference lists based strictly on your individual profile." },
    { title: "Maharashtra DSE Expertise", desc: "Deep understanding of regional engineering cutoffs and seat distribution norms." },
    { title: "Updated Admission Information", desc: "Real-time updates regarding CET registration dates and merit modifications." },
    { title: "Student-Friendly Counselling", desc: "Easy to understand, language-friendly discussions resolving all parent/student stress." },
    { title: "Affordable Plans", desc: "Counselling packages priced transparently at fraction of standard consultancy fees." },
    { title: "Live Sessions", desc: "Demonstrative interactive video sessions demonstrating document filings." },
    { title: "Quick Support", desc: "Fast WhatsApp check-backs ensuring zero stress during priority locking." },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Why Campus Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            Why Hundreds of Diploma Students Trust Us
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Dedicated engineering consulting helping students secure allocations in their dream institutes.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-card-bg border border-card-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="bg-secondary/15 w-fit p-2 rounded-xl text-secondary">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-foreground">{pt.title}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed">{pt.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
