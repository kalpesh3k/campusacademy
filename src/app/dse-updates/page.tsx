import { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  Clock,
  FileText,
  MessageCircle,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "DSE 2026-27 Updates | Campus Academy",
  description:
    "Latest updates on DSE 2026-27 registration, CET Cell Maharashtra announcements, and Direct Second Year Engineering admission news.",
  openGraph: {
    title: "DSE 2026-27 Updates | Campus Academy",
    description:
      "Latest updates on DSE 2026-27 registration, CET Cell Maharashtra announcements, and Direct Second Year Engineering admission news.",
  },
};

export default function DSEUpdatesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-6">
            DSE <span className="text-primary">2026-27</span> Updates
          </h1>
        </div>
      </section>

      {/* Notice */}
      <section className="pb-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-2xl bg-card-bg border border-amber-300 shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Important Notice
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Currently there is no official DSE 2026-27 registration update
                  from CET Cell Maharashtra.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card-bg border border-blue-200 shadow-sm p-6 md:p-8 mt-4">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-foreground/70 leading-relaxed">
                  Registration is expected to start soon. Students should keep
                  all documents ready and stay connected for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Cards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            Current Status
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Status */}
            <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                  Current Status
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <p className="text-lg font-heading font-semibold text-foreground">
                  Registration Not Started
                </p>
              </div>
            </div>

            {/* Expected Update */}
            <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                  Expected Update
                </span>
              </div>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-blue-500" />
                <p className="text-lg font-heading font-semibold text-foreground">
                  Within Upcoming Days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            Tips for Students
          </h2>

          <div className="space-y-4">
            <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-6 flex items-start gap-4">
              <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Keep Documents Ready
                </h3>
                <p className="text-foreground/70">
                  Prepare all required documents including mark sheets, leaving
                  certificate, caste certificate (if applicable), and passport
                  size photos well in advance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-6 flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  Stay Connected via WhatsApp Group
                </h3>
                <p className="text-foreground/70">
                  Join our WhatsApp group to get instant updates about DSE
                  registration, document verification, and CAP round schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Join WhatsApp Group */}
          <div className="mt-8 text-center">
            <Link
              href="https://chat.whatsapp.com/HkUZ5xB4Ij11UAjYy752iV"
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
              Join WhatsApp Group
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Need Personal Guidance?
            </h2>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Get one-on-one support for your DSE admission process. We&apos;re
              here to help.
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
