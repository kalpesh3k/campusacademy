import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Feedback – Campus Academy | DSE Counselling Reviews",
  description:
    "Real WhatsApp feedback from students who used Campus Academy's DSE admission counselling. See proof of our guidance quality.",
  keywords: [
    "Campus Academy Reviews",
    "DSE Counselling Feedback",
    "Student Testimonials",
    "Campus Academy Feedback",
  ],
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
