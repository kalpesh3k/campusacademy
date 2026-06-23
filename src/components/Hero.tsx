"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Award, Users, MapPin, Radio } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const trustBadges = [
    { icon: <Award className="w-5 h-5 text-secondary" />, text: "5+ Years Experience" },
    { icon: <Users className="w-5 h-5 text-secondary" />, text: "1000+ Students Guided" },
    { icon: <MapPin className="w-5 h-5 text-secondary" />, text: "Maharashtra Wide Support" },
    { icon: <Radio className="w-5 h-5 text-secondary animate-pulse" />, text: "Live Guidance Sessions" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-tr from-background via-background to-primary/5 dark:to-primary-dark/20"
    >
      {/* Background Decorative Glowing Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary-glow glow-blur transition-all duration-500"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary-glow glow-blur transition-all duration-500"></div>

      {/* SVG Engineering Pattern Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="bg-badge-bg text-badge-text text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase border border-secondary/10">
                Your Trusted Partner for DSE Engineering Admissions
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-foreground tracking-tight leading-tight"
            >
              DSE Admission Guidance for{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent dark:from-primary-light">
                Maharashtra Diploma
              </span>{" "}
              Students
            </motion.h1>

            {/* Sub Heading */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 leading-relaxed max-w-2xl"
            >
              Get complete end-to-end support for Direct Second Year Engineering (DSE) Admissions, CAP Rounds, College Preference List Selection, Cutoff Analysis, Personal Counselling, and Live Admission Updates.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <a
                href="https://chat.whatsapp.com/HkUZ5xB4Ij11UAjYy752iV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-base font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Join WhatsApp Group</span>
              </a>
              <a
                href="#plans"
                className="flex items-center justify-center gap-2 bg-white dark:bg-card-bg border border-card-border hover:bg-gray-50 dark:hover:bg-primary-glow text-foreground text-base font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-secondary" />
                <span>Book Counselling</span>
              </a>
            </motion.div>

            {/* Badges Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-card-border"
            >
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-secondary/10 dark:bg-secondary/20">
                    {badge.icon}
                  </div>
                  <span className="text-sm font-semibold text-foreground/90">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Right Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Spinning Engineering Compass/Cogs Visual Backdrop */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[360px] h-[360px] border border-dashed border-primary/20 dark:border-primary-light/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute w-[280px] h-[280px] border border-dashed border-secondary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              </div>

              {/* Floating Engineering/Consulting Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-4 left-6 bg-card-bg backdrop-blur-md border border-card-border p-4 rounded-2xl shadow-lg flex items-center gap-3"
              >
                <div className="bg-primary/10 p-2 rounded-xl text-primary dark:text-primary-light">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">CAP ROUNDS</div>
                  <div className="text-sm font-bold text-foreground">100% Guaranteed Options</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-6 right-6 bg-card-bg backdrop-blur-md border border-card-border p-4 rounded-2xl shadow-lg flex items-center gap-3"
              >
                <div className="bg-secondary/10 p-2 rounded-xl text-secondary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">CUTOFF ANALYSIS</div>
                  <div className="text-sm font-bold text-foreground">Percentage wise</div>
                </div>
              </motion.div>

              {/* Central Premium Graphic Badge */}
              <div className="relative w-56 h-56 rounded-full bg-gradient-to-tr from-primary to-secondary flex flex-col justify-center items-center text-center p-6 shadow-2xl text-white">
                <div className="absolute inset-2 border border-white/20 rounded-full"></div>
                <svg className="w-14 h-14 text-accent fill-accent/10 mb-2 drop-shadow-md animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                <div className="text-4xl font-extrabold font-heading tracking-tight text-white drop-shadow">5+</div>
                <div className="text-xs font-bold text-accent tracking-widest uppercase mt-0.5">Years Excellence</div>
                <div className="text-[10px] opacity-80 mt-1 max-w-[130px]">Maharashtra Diploma Counselling</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Downward scrolling indicator indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-gray-500">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-3 rounded-full bg-secondary"
        ></motion.div>
      </div>
    </section>
  );
}
