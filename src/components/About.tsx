"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, AwardIcon, GraduationCap, Star } from "lucide-react";
import Image from "next/image";

export default function About() {
  const provisions = [
    "Admission Updates",
    "CAP Round Guidance",
    "College Selection",
    "Cutoff Analysis",
    "Personal Counselling",
    "Live Sessions",
    "Admission Support",
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              About Campus Academy
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground tracking-tight">
              Leading Direct Second Year (DSE) Admission Consultants
            </h2>
            
            <p className="text-base text-foreground/85 leading-relaxed">
              Campus Academy helps Diploma students across Maharashtra navigate the complex and highly competitive Direct Second Year Engineering Admission Process. We guide you step-by-step from registration to securing your dream engineering college.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {provisions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm font-semibold text-foreground/95">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="text-sm font-black text-foreground">MSBTE Approved Syllabus Help</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary dark:text-primary-light" />
                <span className="text-sm font-black text-foreground">Maharashtra Wide Counselling</span>
              </div>
            </div>
          </div>

          {/* Founder Card & Bio */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[380px] bg-gradient-to-b from-primary/10 to-primary-glow/40 dark:from-primary-dark/80 dark:to-primary-dark/40 border border-card-border p-6 rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Decorative Accent elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
              <div className="absolute top-4 right-4 bg-badge-bg text-badge-text text-[10px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider border border-secondary/10 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>5+ Years Exp</span>
              </div>

              {/* Founder Avatar Fallback/Placeholder using beautiful Styled Icon/SVG */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 bg-white shadow-md flex items-center justify-center mb-5">
                <Image
                  src="/assets/logo.jpg"
                  alt="Kalpesh Kulkarni"
                  fill
                  sizes="96px"
                  className="object-cover scale-110"
                />
              </div>

              {/* Founder Details */}
              <h3 className="text-xl font-bold font-heading text-foreground">
                Kalpesh Kulkarni
              </h3>
              <p className="text-xs text-secondary font-bold uppercase tracking-widest mt-1">
                Founder – Campus Academy
              </p>

              <div className="h-px w-16 bg-card-border my-4"></div>

              {/* Bio */}
              <p className="text-sm text-foreground/80 leading-relaxed italic bg-white/40 dark:bg-black/20 p-4 rounded-2xl border border-card-border/50">
                &ldquo;Helping Diploma students make informed engineering admission decisions through expert guidance and counselling.&rdquo;
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 w-full mt-6">
                <a
                  href="https://wa.link/j5skkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-light text-white text-xs font-bold py-2.5 px-4 rounded-full transition-colors"
                >
                  Message
                </a>
                <a
                  href="tel:9175956461"
                  className="bg-white dark:bg-card-bg border border-card-border hover:bg-gray-50 text-foreground text-xs font-bold py-2.5 px-4 rounded-full transition-all"
                >
                  Call Founder
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
