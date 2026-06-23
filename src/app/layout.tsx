import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campus Academy | DSE Engineering Admission Guidance Maharashtra",
  description: "Get complete support for Direct Second Year Engineering (DSE) Admissions in Maharashtra. Personalised CAP round guidance, college preference lists, cutoff analysis, and expert counselling by Kalpesh Kulkarni.",
  keywords: [
    "DSE Admission Maharashtra",
    "Direct Second Year Engineering Admission",
    "DSE CAP Round",
    "Engineering Admission Guidance",
    "Maharashtra Engineering Admission",
    "Diploma to Degree Admission",
    "DSE Counselling Maharashtra",
    "CAP Round Guidance",
    "College Predictor Maharashtra",
    "Campus Academy",
    "Kalpesh Kulkarni"
  ],
  authors: [{ name: "Kalpesh Kulkarni" }],
  icons: {
    icon: "/assets/logo.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
