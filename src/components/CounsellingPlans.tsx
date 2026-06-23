"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Star, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹499",
    highlighted: false,
    features: [
      "Personalized College List",
      "College Suggestions Based On Profile",
    ],
  },
  {
    name: "Advance Plan",
    price: "₹999",
    highlighted: true,
    badge: "Recommended",
    features: [
      "College List (as per % + category + city)",
      "Previous Year Cutoff Analysis",
      "CAP Round Strategy",
      "Live 1:1 Personal Counselling Meeting",
    ],
  },
];

export default function CounsellingPlans() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-badge-bg text-badge-text text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Counselling Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3">
            Choose Your Plan
          </h2>
          <p className="text-base text-foreground/60 mt-3 max-w-xl mx-auto">
            Affordable counselling to help you get into the right engineering college.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-shadow ${
                plan.highlighted
                  ? "bg-primary text-white border-primary shadow-lg scale-[1.02]"
                  : "bg-card-bg border-card-border"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-4 bg-accent text-primary-dark text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </span>
              )}

              <h3 className={`font-heading font-bold text-lg ${plan.highlighted ? "text-white/90" : "text-foreground"}`}>
                {plan.name}
              </h3>

              <div className={`text-3xl font-extrabold font-heading mt-2 mb-6 ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                {plan.price}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlighted ? "text-accent" : "text-green-600"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white/85" : "text-foreground/70"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.link/ee2fyk"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-light"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Get {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
