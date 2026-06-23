import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Campus Academy | DSE Admission Guidance",
  description:
    "Get in touch with Campus Academy for DSE admission counselling. Call, WhatsApp, or fill our contact form for personalized college guidance in Maharashtra.",
  keywords: [
    "Contact Campus Academy",
    "DSE Counselling Contact",
    "Campus Academy WhatsApp",
    "Engineering Admission Help Maharashtra",
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
