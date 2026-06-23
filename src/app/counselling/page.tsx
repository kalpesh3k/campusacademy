import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Counselling म्हणजे काय? | Campus Academy",
  description:
    "Engineering Admission घेताना योग्य College निवडणे, CAP Round समजून घेणे आणि योग्य पर्याय निवडणे - Campus Academy Counselling.",
  openGraph: {
    title: "Counselling म्हणजे काय? | Campus Academy",
    description:
      "Engineering Admission घेताना योग्य College निवडणे, CAP Round समजून घेणे आणि योग्य पर्याय निवडणे - Campus Academy Counselling.",
  },
};

const counsellingFeatures = [
  "Personalized College List",
  "Cutoff Analysis",
  "CAP Round Guidance",
  "Admission Doubt Solving",
  "Personal Guidance",
  "College Selection Help",
];

export default function CounsellingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-6">
            Counselling <span className="text-primary">म्हणजे काय?</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 text-center max-w-3xl mx-auto leading-relaxed">
            Engineering Admission घेताना योग्य College निवडणे, CAP Round समजून
            घेणे आणि Percentage + Category + City नुसार योग्य पर्याय निवडणे
            खूप महत्त्वाचे असते.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-10">
            Campus Academy Counselling{" "}
            <span className="text-primary">मध्ये:</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {counsellingFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-5 flex items-center gap-4"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Counselling Link */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Paid Counselling Available
            </h2>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Get detailed, one-on-one counselling with personalized college
              recommendations based on your profile.
            </p>
            <Link
              href="/paid-counselling"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              View Paid Counselling
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="rounded-2xl bg-card-bg border border-card-border shadow-sm p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              संपर्क करा
            </h2>
            <p className="text-foreground/70 mb-6 max-w-lg mx-auto">
              Counselling बद्दल अधिक माहिती हवी असल्यास आम्हाला WhatsApp वर
              संपर्क करा.
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
