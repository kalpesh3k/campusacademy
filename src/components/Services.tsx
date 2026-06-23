"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  Shuffle,
  School,
  TrendingDown,
  Video,
  UserCheck,
  FileText,
  FormInput,
  X,
  ArrowRight
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: string[];
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesList: ServiceItem[] = [
    {
      id: 1,
      title: "DSE Admission Updates",
      icon: <Bell className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Real-time alerts and explanations for crucial dates, schedules, and MSBTE circular updates.",
      details: [
        "Instant WhatsApp and SMS alerts for registration deadlines",
        "Step-by-step videos on how to register and verify profile details",
        "Alerts on seat matrix releases, seat vacancy status, and round deadlines",
        "Official ARC verification centre updates"
      ]
    },
    {
      id: 2,
      title: "CAP Round Guidance",
      icon: <Shuffle className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Master the Centralized Admission Process (CAP) rounds to secure top colleges.",
      details: [
        "Freeze, Float, and Betterment rules simplified",
        "Strategies on whether to accept seats in Round 1 or wait for Round 2/3",
        "Understand vacancy dynamics and institutional round seats",
        "Avoid common pitfalls that lead to registration cancellations"
      ]
    },
    {
      id: 3,
      title: "College Selection Support",
      icon: <School className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Filter and research top engineering colleges across Maharashtra matching your profile.",
      details: [
        "Information on Autonomous vs. Affiliated engineering institutes",
        "Region-wise mapping (Pune, Mumbai, Nagpur, Nashik, Aurangabad, etc.)",
        "Detailed comparison of placements, packages, and campus facilities",
        "Honest college reviews based on years of student feedback"
      ]
    },
    {
      id: 4,
      title: "Cutoff Analysis",
      icon: <TrendingDown className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Data-driven cutoff comparisons across branches and categories.",
      details: [
        "Percentage-wise, branch-wise, and college-wise cutoff sheets",
        "Category-wise comparison (Open, OBC, SC, ST, NT, VJNT, EWS, TFWS)",
        "Prediction engine calculations based on previous year trends",
        "Seat availability matrix breakdown"
      ]
    },
    {
      id: 5,
      title: "Live Sessions",
      icon: <Video className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Interactive online webinars and QA sessions addressing real-time doubts.",
      details: [
        "Regular interactive live calls on YouTube and Zoom",
        "Live form filling demonstrations",
        "Instant QA sessions directly with Kalpesh Kulkarni",
        "Clarifications on latest DSE updates and documents"
      ]
    },
    {
      id: 6,
      title: "Admission Counselling",
      icon: <UserCheck className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Dedicated personal support from veteran education consultants.",
      details: [
        "One-on-one calls to evaluate your chances based on percentage",
        "Resolve branch confusion (Computer vs IT vs AIDS vs Core branches)",
        "Guidance for parents on fee structures and hostel options",
        "Personal support till the final college reporting step"
      ]
    },
    {
      id: 7,
      title: "Document Verification Guidance",
      icon: <FileText className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Prevent application rejection with correct document compilation.",
      details: [
        "Full list of documents based on caste, category, and income statuses",
        "Solutions for spelling discrepancies, name changes, or missing receipts",
        "Guidance on obtaining EWS, Non-Creamy Layer, and Caste Validity on time",
        "Avoid rejections by physical or e-scrutiny centres"
      ]
    },
    {
      id: 8,
      title: "College Preference Form Guidance",
      icon: <FormInput className="w-6 h-6 text-primary dark:text-primary-light" />,
      description: "Draft the perfect college option form with accurate choice codes.",
      details: [
        "Learn how college choice codes work (e.g. TFWS code vs General code)",
        "Arrangement of colleges in priority order to maximize selection chance",
        "Personal review of your option draft before final lock",
        "Optimize branch codes for safe, reliable options"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary-glow/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            How We Guide You to Success
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Comprehensive admission support designed specifically for MSBTE and Maharashtra Diploma graduates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-card-bg border border-card-border p-6 rounded-2xl shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/5 dark:bg-primary-glow w-fit rounded-xl border border-primary/5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-card-border/50">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-1 text-xs font-bold text-secondary hover:text-secondary/80 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Details Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative w-full max-w-lg bg-background border border-card-border p-6 sm:p-8 rounded-3xl shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-primary-glow text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-card-border pb-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  {selectedService.icon}
                </div>
                <h3 className="text-xl font-extrabold font-heading text-foreground pr-8">
                  {selectedService.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Bullet list of details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                  What is included in this service:
                </h4>
                <ul className="space-y-3.5">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary mt-1.5"></span>
                      <span className="text-sm text-foreground/90 font-medium leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal footer call to action */}
              <div className="mt-8 pt-6 border-t border-card-border flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.link/j5skkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary hover:bg-primary-light text-white text-center font-bold py-3 rounded-full text-sm shadow-md transition-colors"
                >
                  Contact About This
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-foreground text-center font-bold py-3 px-6 rounded-full text-sm transition-colors"
                >
                  Close Detail
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
