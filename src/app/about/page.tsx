import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  MapPin,
  HeartHandshake,
  Phone,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Campus Academy | DSE Admission Experts in Maharashtra",
  description:
    "Campus Academy has been guiding Diploma students through the Direct Second Year (DSE) Engineering admission process in Maharashtra for over 5 years.",
  openGraph: {
    title: "About Campus Academy | DSE Admission Experts in Maharashtra",
    description:
      "Campus Academy has been guiding Diploma students through the Direct Second Year (DSE) Engineering admission process in Maharashtra for over 5 years.",
  },
};

const services = [
  "Admission Guidance",
  "CAP Round Strategy",
  "College Selection Support",
  "Personalized Counselling",
];

const stats = [
  { icon: GraduationCap, value: "5+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Students Guided" },
  { icon: MapPin, value: "Maharashtra", label: "Wide Coverage" },
  { icon: HeartHandshake, value: "Personal", label: "Support" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-6">
            About <span className="text-primary">Campus Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 text-center max-w-3xl mx-auto leading-relaxed">
            Campus Academy has been guiding Diploma students through the Direct
            Second Year (DSE) Engineering admission process in Maharashtra for
            over <strong>5 years</strong>.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            {/* Founder Avatar Placeholder */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <span className="text-3xl md:text-4xl font-heading font-bold text-white">
                KK
              </span>
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                Kalpesh Kulkarni
              </h2>
              <p className="text-secondary font-semibold text-lg mb-4">
                Founder & DSE Admission Expert
              </p>
              <p className="text-foreground/70 leading-relaxed">
                With years of hands-on experience in DSE admissions, Kalpesh has
                personally guided over a thousand diploma students to secure
                seats in top engineering colleges across Maharashtra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-10">
            What We Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-5 flex items-center gap-4"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium text-lg">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-6 text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-8 md:p-12">
            <Phone className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Have questions about DSE admissions? Reach out to us directly on
              WhatsApp for quick guidance.
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
