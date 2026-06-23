"use client";

import { MessageSquare, ArrowRight } from "lucide-react";
import StudentsFeedback from "@/components/StudentsFeedback";

export default function FeedbackPage() {
  return (
    <>

      <main className="flex-1 w-full">
        {/* Page Header */}
        <section className="pt-32 pb-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Student Testimonials
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-foreground mt-4 tracking-tight">
              Student Feedback
            </h1>
            <p className="text-base text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Real feedback from our students on WhatsApp. Read what they have to
              say about Campus Academy&apos;s guidance.
            </p>
          </div>
        </section>

        {/* Feedback Gallery (existing component) */}
        <StudentsFeedback />

        {/* WhatsApp CTA Section */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
          <div className="absolute top-10 right-10 w-48 h-48 bg-secondary/15 rounded-full glow-blur" />

          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Want the Same Guidance?
            </h2>
            <p className="text-white/70 mt-3 text-base max-w-xl mx-auto">
              Join hundreds of students who trusted Campus Academy for their DSE
              admission. Connect with us on WhatsApp today.
            </p>
            <a
              href="https://wa.link/j5skkr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-green-600 hover:bg-green-700 text-white font-extrabold py-4 px-10 rounded-full text-base shadow-xl transition-all duration-200 hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 fill-white stroke-none" />
              Chat With Us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

    </>
  );
}
