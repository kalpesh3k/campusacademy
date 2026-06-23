import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSE Admission Process",
  description:
    "Complete step-by-step guide to Direct Second Year (DSE) Engineering admission in Maharashtra. Registration, document verification, merit list, CAP rounds, and admission confirmation.",
};

export default function DseProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
