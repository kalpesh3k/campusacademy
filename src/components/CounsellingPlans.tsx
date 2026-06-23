"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function CounsellingPlans() {
  const triggerConfetti = (planName: string, link: string) => {
    // Fire confetti from edges
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, animate them from the top
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Redirect after delay
    setTimeout(() => {
      window.open(link, "_blank");
    }, 800);
  };

  const basicFeatures = [
    "Personalized College List",
    "College Recommendation",
    "Percentage-wise Guidance",
    "Category-wise Guidance",
    "Branch-wise Guidance",
    "Location-wise Guidance",
    "Admission Updates",
  ];

  const advanceFeatures = [
    "Everything in Basic Plan",
    "1-to-1 Personal Counselling",
    "CAP Round Strategy",
    "College Selection Support",
    "Branch Selection Guidance",
    "Doubt Solving sessions",
    "Priority support (Direct Call)",
  ];

  const bookingUrl = "https://wa.link/j5skkr";

  return (
    <section id="plans" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Gradient Background Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-glow rounded-full glow-blur"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            Our DSE Counselling Plans
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Choose the plan that suits your admission requirements and secure your engineering seats.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Plan 1: Basic */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-card-bg border border-card-border p-8 rounded-3xl shadow-lg relative flex flex-col justify-between"
          >
            {/* Ribbon Highlight */}
            <div className="absolute top-4 right-4 bg-primary/10 text-primary dark:text-primary-light text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading text-foreground">Basic Plan</h3>
              <p className="text-xs text-gray-500 mt-1">Essential guidance for smart preferences</p>
              
              <div className="my-6 flex items-baseline">
                <span className="text-4xl font-black text-foreground">₹499</span>
                <span className="text-xs text-gray-500 ml-1 font-semibold">/ One-time fee</span>
              </div>

              <div className="h-px bg-card-border/50 my-6"></div>

              <ul className="space-y-3.5 mb-8">
                {basicFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-0.5 rounded-full">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => triggerConfetti("Basic Plan", bookingUrl)}
              className="w-full bg-white dark:bg-card-bg border-2 border-primary hover:bg-primary-glow text-primary dark:text-white text-center font-bold py-3.5 rounded-full text-sm shadow-md transition-all duration-200"
            >
              Get Basic Plan
            </button>
          </motion.div>

          {/* Plan 2: Advance */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-card-bg border-2 border-secondary p-8 rounded-3xl shadow-xl relative flex flex-col justify-between bg-gradient-to-b from-secondary/5 to-transparent"
          >
            {/* Gold Ribbon Highlight */}
            <div className="absolute top-4 right-4 bg-secondary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Best Value</span>
            </div>

            <div>
              <h3 className="text-xl font-bold font-heading text-foreground">Advance Plan</h3>
              <p className="text-xs text-gray-500 mt-1">1-to-1 intensive consulting support</p>
              
              <div className="my-6 flex items-baseline">
                <span className="text-4xl font-black text-foreground">₹999</span>
                <span className="text-xs text-gray-500 ml-1 font-semibold">/ One-time fee</span>
              </div>

              <div className="h-px bg-card-border/50 my-6"></div>

              <ul className="space-y-3.5 mb-8">
                {advanceFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-0.5 rounded-full">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => triggerConfetti("Advance Plan", bookingUrl)}
              className="w-full bg-primary hover:bg-primary-light text-white text-center font-bold py-3.5 rounded-full text-sm shadow-lg hover:shadow-primary/20 transition-all duration-200"
            >
              Get Advance Plan
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
