"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PaidCounsellingPage() {
  return (
    <>

      <main className="flex-1 w-full">
        {/* ── Attention Banner ── */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-600">
          <motion.div
            animate={{ opacity: [1, 0.85, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="py-3 px-4 text-center"
          >
            <p className="text-white font-extrabold text-sm sm:text-base tracking-wide">
              🚨 DSE 2026 Students – Last Chance to Enroll
            </p>
          </motion.div>
          {/* Decorative shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />
        </div>

        {/* ── Pizza Comparison Section ── */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
            >
              {/* Pizza Image */}
              <div className="flex-shrink-0">
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                  <Image
                    src="/assets/pizza.png"
                    alt="Pizza comparison – counselling costs less than a pizza"
                    fill
                    sizes="300px"
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-foreground leading-tight">
                  एका Pizza च्या किंमतीत तुमच्या{" "}
                  <span className="text-secondary">Career</span> चा निर्णय घ्या!
                </h1>

                <div className="mt-6 space-y-4 text-foreground/80 text-base leading-relaxed">
                  <p className="font-semibold text-lg text-foreground">
                    अजून वेळ गेलेली नाहीये!
                  </p>
                  <p>
                    जर तुम्हाला तुमच्या Percentage + Category + City नुसार योग्य
                    कॉलेजमध्ये admission घ्यायचं असेल, डाऊट्स क्लिअर करायचे
                    असतील किंवा Personal मार्गदर्शन हवं असेल…
                  </p>
                  <p className="text-secondary font-bold text-lg flex items-center gap-2 justify-center md:justify-start">
                    <Check className="w-5 h-5" />
                    Campus Academy Counselling तुमच्यासाठी उपलब्ध आहे!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Pricing Cards Section ── */}
        <section className="py-20 md:py-24 bg-background relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-glow rounded-full glow-blur" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Counselling Plans
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
                Choose Your Counselling Plan
              </h2>
              <p className="text-base text-foreground/75 mt-3">
                Get expert, personalized DSE admission guidance at an affordable price.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              {/* ── ADVANCE PLAN (Highlighted / Recommended) ── */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-card-bg border-2 border-primary p-8 sm:p-10 rounded-3xl shadow-xl relative flex flex-col justify-between bg-gradient-to-b from-primary/5 to-transparent order-1 md:order-2"
              >
                {/* Recommended Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Recommended</span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-heading text-foreground mt-4">
                    Advance Plan
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Complete 1-to-1 counselling with strategy
                  </p>

                  <div className="my-6 flex items-baseline">
                    <span className="text-5xl font-black text-foreground">₹999</span>
                    <span className="text-xs text-gray-500 ml-2 font-semibold">
                      / One-time fee
                    </span>
                  </div>

                  <div className="h-px bg-card-border/50 my-6" />

                  <ul className="space-y-4 mb-8">
                    {[
                      "College List (as per % + category + city)",
                      "Previous Year Cutoff Analysis",
                      "CAP Round Strategy",
                      "Live 1:1 Personal Counselling Meeting",
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-primary/15 p-1 rounded-full mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground/90">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.link/ee2fyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary hover:bg-primary-light text-white text-center font-bold py-4 rounded-full text-sm shadow-lg hover:shadow-primary/20 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Get Advance Plan
                </a>
              </motion.div>

              {/* ── BASIC PLAN ── */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-card-bg border border-card-border p-8 sm:p-10 rounded-3xl shadow-lg relative flex flex-col justify-between order-2 md:order-1"
              >
                <div>
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Basic Plan
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Essential profile-based college guidance
                  </p>

                  <div className="my-6 flex items-baseline">
                    <span className="text-5xl font-black text-foreground">₹499</span>
                    <span className="text-xs text-gray-500 ml-2 font-semibold">
                      / One-time fee
                    </span>
                  </div>

                  <div className="h-px bg-card-border/50 my-6" />

                  <ul className="space-y-4 mb-8">
                    {[
                      "Personalized College List",
                      "College Suggestions Based On Profile",
                    ].map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="bg-secondary/10 p-1 rounded-full mt-0.5">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground/90">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://wa.link/ee2fyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white dark:bg-card-bg border-2 border-primary hover:bg-primary-glow text-primary dark:text-white text-center font-bold py-4 rounded-full text-sm shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Get Basic Plan
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Large CTA Section ── */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          {/* Decorative orbs */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-secondary/20 rounded-full glow-blur" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full glow-blur" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-4">
                📝 Interested Students
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
                Click Below to Get Started
              </h2>
              <p className="text-white/70 mt-4 text-base max-w-xl mx-auto">
                Send your details on WhatsApp and our counselling team will reach out to you within minutes.
              </p>

              <a
                href="https://wa.link/ee2fyk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 bg-secondary hover:bg-secondary/90 text-white font-extrabold py-4 px-10 rounded-full text-lg shadow-2xl transition-all duration-200 hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                Send Details On WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/60 text-sm font-semibold">
                <Phone className="w-4 h-4" />
                <a href="tel:9175956461" className="hover:text-white transition-colors">
                  9175956461
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Footer Tagline ── */}
        <section className="py-8 bg-background">
          <div className="text-center">
            <p className="text-sm font-bold text-foreground/60 tracking-wide">
              Campus Academy – Your Career, Our Commitment
            </p>
          </div>
        </section>
      </main>

    </>
  );
}
