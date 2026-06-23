import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paid Counselling Plans – Campus Academy | DSE 2026",
  description:
    "Get personalized DSE admission counselling from Campus Academy. Choose from Basic (₹499) or Advance (₹999) plans. College list, cutoff analysis, CAP round strategy & 1:1 guidance.",
  keywords: [
    "DSE Counselling",
    "Paid Counselling DSE",
    "DSE Admission Plan",
    "Campus Academy Counselling",
    "Engineering Admission Guidance Maharashtra",
  ],
};

export default function PaidCounsellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
