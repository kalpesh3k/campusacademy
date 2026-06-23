"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, GraduationCap, Users, MapPin, HeartHandshake } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: "5+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Students Guided" },
  { icon: MapPin, value: "Maharashtra", label: "Wide Guidance" },
  { icon: HeartHandshake, value: "1:1", label: "Personal Support" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-badge-bg text-badge-text text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
              DSE Admission Experts
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground leading-tight mb-6">
              Your{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                Engineering Admission
              </span>{" "}
              Journey Starts Here
            </h1>

            <p className="text-base sm:text-lg text-foreground/70 mb-8 max-w-xl leading-relaxed">
              Expert guidance for Direct Second Year (DSE) Engineering admissions in Maharashtra.
              Get personalized college selection, CAP round strategy, and complete admission support.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://chat.whatsapp.com/HkUZ5xB4Ij11UAjYy752iV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Group
              </a>
              <Link
                href="/paid-counselling"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl text-base font-semibold transition-colors shadow-sm"
              >
                Get Counselling
              </Link>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-card-bg border border-card-border rounded-2xl p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold font-heading text-foreground">{stat.value}</div>
                  <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
