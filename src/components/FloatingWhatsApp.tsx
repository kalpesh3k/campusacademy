"use client";

import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/9175956461?text=Hello%20Campus%20Academy%2C%20I%20need%20DSE%20Admission%20Guidance.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl hover:shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center no-print"
      aria-label="Contact Campus Academy on WhatsApp"
    >
      {/* Glow Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none"></span>
      <MessageSquare className="w-6 h-6 fill-white stroke-none" />
    </a>
  );
}
