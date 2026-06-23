"use client";

import { motion } from "framer-motion";
import {
  FileSignature,
  FileCheck,
  Award,
  ChevronRight,
  TrendingUp,
  HelpCircle,
  Building,
  CheckCircle2,
} from "lucide-react";

interface Step {
  stepNumber: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

export default function AdmissionProcess() {
  const steps: Step[] = [
    {
      stepNumber: 1,
      title: "Registration",
      icon: <FileSignature className="w-6 h-6 text-white" />,
      description: "Fill out the online application form on the official DSE portal and upload required documents.",
    },
    {
      stepNumber: 2,
      title: "Document Verification",
      icon: <FileCheck className="w-6 h-6 text-white" />,
      description: "Get documents verified either via E-Scrutiny or by visiting a physical FC/ARC facilitation centre.",
    },
    {
      stepNumber: 3,
      title: "Merit List",
      icon: <Award className="w-6 h-6 text-white" />,
      description: "Check the Provisional & Final Merit List to verify your state/home university merit rank.",
    },
    {
      stepNumber: 4,
      title: "CAP Round 1",
      icon: <ChevronRight className="w-6 h-6 text-white" />,
      description: "Submit your college option form list. Seat allocation will occur based on rank and choices.",
    },
    {
      stepNumber: 5,
      title: "CAP Round 2",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      description: "Participate for betterment if not satisfied with Round 1 allocation, or lock your seat.",
    },
    {
      stepNumber: 6,
      title: "CAP Round 3",
      icon: <HelpCircle className="w-6 h-6 text-white" />,
      description: "Final standard counselling round. Last chance to secure a seat through the cap process.",
    },
    {
      stepNumber: 7,
      title: "College Confirmation",
      icon: <Building className="w-6 h-6 text-white" />,
      description: "Accept the allocated college seat, pay seat acceptance fee online, and report to the college.",
    },
    {
      stepNumber: 8,
      title: "Admission Complete",
      icon: <CheckCircle2 className="w-6 h-6 text-white" />,
      description: "Submit original certificates at the college, pay college admission fees, and start classes!",
    },
  ];

  return (
    <section id="process" className="py-24 bg-primary-glow/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Admission Steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            DSE Admission Timeline
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            A step-by-step breakdown of the Direct Second Year Engineering Centralized Admission Process.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line through timeline (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.stepNumber}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty block for layout alignment (Desktop) */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Circle Indicator */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                    className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg border-4 border-background"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Card Content */}
                  <motion.div
                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 80, damping: 12 }}
                    className="w-full md:w-[45%] mt-4 md:mt-0 bg-card-bg border border-card-border p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow relative"
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-3.5 left-6 bg-secondary text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Step {step.stepNumber}
                    </div>

                    <h3 className="text-lg font-bold font-heading text-foreground mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
