"use client";

import Link from "next/link";
import DocumentChecklist from "@/components/DocumentChecklist";

const steps = [
  {
    number: 1,
    title: "Registration",
    description:
      "Register on the official CET Cell Maharashtra portal with your personal and academic details.",
  },
  {
    number: 2,
    title: "Document Verification",
    description:
      "Get all required documents verified at facilitation centers designated by the authorities.",
  },
  {
    number: 3,
    title: "Merit List",
    description:
      "Merit list published based on diploma percentage. Check your rank and eligibility.",
  },
  {
    number: 4,
    title: "CAP Round 1",
    description:
      "Fill option form with preferred colleges and branches. Seats are allotted based on merit and preferences.",
  },
  {
    number: 5,
    title: "CAP Round 2",
    description:
      "Revise preferences based on Round 1 results. You can upgrade, slide, or retain your current seat.",
  },
  {
    number: 6,
    title: "CAP Round 3",
    description:
      "Final CAP round for remaining seats. Last chance to get allotment through centralized process.",
  },
  {
    number: 7,
    title: "Institute Level Round",
    description:
      "Colleges conduct their own admission for vacant seats. Contact colleges directly for availability.",
  },
  {
    number: 8,
    title: "Admission Confirmation",
    description:
      "Pay fees and confirm your admission at the allotted college within the specified deadline.",
  },
];

export default function DSEProcessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            DSE <span className="text-primary">Admission Process</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Complete step-by-step guide to Direct Second Year Engineering
            admission in Maharashtra
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-card-border" />

            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-4 md:gap-6">
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-heading font-bold text-lg md:text-xl ${
                        index % 2 === 0
                          ? "bg-primary text-white"
                          : "bg-secondary text-white"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 pb-8 md:pb-10 ${
                      index === steps.length - 1 ? "pb-0" : ""
                    }`}
                  >
                    <div
                      className={`rounded-2xl border border-card-border shadow-sm p-5 md:p-6 ${
                        index % 2 === 0
                          ? "bg-card-bg"
                          : "bg-card-bg/50"
                      }`}
                    >
                      <h3 className="text-lg md:text-xl font-heading font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            Document Checklist
          </h2>
          <DocumentChecklist />
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Need Help with the Process?
            </h2>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Get step-by-step guidance through the entire DSE admission
              process. We&apos;re just a message away.
            </p>
            <Link
              href="https://wa.link/j5skkr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
