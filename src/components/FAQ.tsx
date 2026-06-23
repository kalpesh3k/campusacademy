"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What is DSE Admission?",
      answer: "Direct Second Year Engineering (DSE) Admission is a centralized process conducted by the State Common Entrance Test Cell (CET Cell), Maharashtra. It allows engineering diploma graduates (MSBTE or equivalent) to skip the first year and secure direct admission into the 3rd semester (2nd year) of B.E. / B.Tech degree programs.",
    },
    {
      id: 2,
      question: "Who can apply for DSE?",
      answer: "Candidates who have completed a Diploma in Engineering and Technology from an MSBTE-approved institution or equivalent with a minimum of 45% marks (40% for candidates belonging to reserved categories, EWS, and PwD from Maharashtra State) can apply. BSc graduates are also eligible under specific vacancy guidelines.",
    },
    {
      id: 3,
      question: "How many CAP rounds are conducted?",
      answer: "The State CET Cell typically conducts 3 Centralized Admission Process (CAP) rounds. In each round, you fill out an option form ranking your preferred colleges. If allocated a seat, you can choose to Freeze (lock), Float (accept with betterment chance in next round), or participate directly in the next round depending on eligibility.",
    },
    {
      id: 4,
      question: "How can Campus Academy help me?",
      answer: "With only 10% seats reserved for Diploma students, DSE admissions are highly competitive. Campus Academy guides you to organize your college preferences optimally. We provide updated cutoff sheets, help select colleges matching your percentage/category, verify your documents before final submissions, and offer direct strategies from Founder Kalpesh Kulkarni.",
    },
    {
      id: 5,
      question: "What documents are required?",
      answer: "Standard academic files include: SSC Marks List, Diploma Marksheets (All Semesters), Domicile/Leaving Certificate, and Nationality Proof. For reserved categories, a Caste Certificate, Caste Validity Certificate (CVC), and Non-Creamy Layer (NCL) valid up to March 31st of the current academic year are mandatory. EWS candidates need an active EWS certificate.",
    },
    {
      id: 6,
      question: "What is the counselling fee?",
      answer: "We offer two transparent, affordable pricing packages: the Basic Plan at ₹499 (personalized college list, category/percentage guidance, and circular updates) and the Advance Plan at ₹999 (1-to-1 personal counselling calls, option form audit, and direct help from Kalpesh Kulkarni).",
    },
    {
      id: 7,
      question: "Can I get personal counselling?",
      answer: "Yes, our Advance Plan at ₹999 is dedicated to direct 1-to-1 personal guidance. You will have one-on-one calls to clear doubts, build custom CAP strategies, review option lists, and receive priority support during document verification hurdles.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-primary-glow/20 border-t border-card-border relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            FAQ Section
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-foreground/75 mt-3">
            Quick answers to help you understand the Direct Second Year Engineering (DSE) Admission norms.
          </p>
        </div>

        {/* Search Filter Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card-bg border border-card-border py-3 pl-11 pr-4 rounded-full text-sm font-semibold shadow-sm focus:outline-none focus:border-primary transition-colors text-foreground"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="bg-card-bg border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => toggleExpand(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3.5 pr-4">
                        <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm sm:text-base font-bold text-foreground">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-1 border-t border-card-border/50 text-sm text-foreground/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500 font-bold">
                No matching questions found. Ask us directly via the contact form!
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
