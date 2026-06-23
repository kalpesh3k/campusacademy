import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://campusacademy.site"),
  title: {
    default: "Campus Academy | DSE Engineering Admission Guidance Maharashtra",
    template: "%s | Campus Academy",
  },
  description:
    "Expert DSE (Direct Second Year) Engineering admission guidance in Maharashtra. Personalized counselling, CAP round strategy, college selection support for Diploma students. 5+ years experience, 1000+ students guided.",
  keywords: [
    "DSE admission",
    "Direct Second Year Engineering",
    "Maharashtra engineering admission",
    "CAP round guidance",
    "diploma to engineering",
    "college counselling Maharashtra",
    "Campus Academy",
    "DSE 2026",
    "engineering admission help",
    "Kalpesh Kulkarni",
  ],
  authors: [{ name: "Kalpesh Kulkarni" }],
  creator: "Campus Academy",
  publisher: "Campus Academy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://campusacademy.site",
    siteName: "Campus Academy",
    title: "Campus Academy | DSE Engineering Admission Guidance Maharashtra",
    description:
      "Expert DSE admission guidance in Maharashtra. Personalized counselling, CAP round strategy & college selection support. 5+ years, 1000+ students guided.",
    images: [{ url: "/assets/logo.jpg", width: 512, height: 512, alt: "Campus Academy Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Campus Academy | DSE Admission Guidance",
    description:
      "Expert DSE admission guidance in Maharashtra. Personalized counselling & college selection support.",
    images: ["/assets/logo.jpg"],
  },
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
        </Script>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Campus Academy",
              url: "https://campusacademy.site",
              logo: "https://campusacademy.site/assets/logo.jpg",
              description:
                "Expert DSE Engineering admission guidance in Maharashtra for Diploma students.",
              founder: { "@type": "Person", name: "Kalpesh Kulkarni" },
              telephone: "+919175956461",
              address: {
                "@type": "PostalAddress",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              sameAs: ["https://www.instagram.com/campus_academy._/"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
