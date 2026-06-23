import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Globe, Video } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "DSE Process", href: "/dse-process" },
  { label: "DSE 2026-27 Updates", href: "/dse-updates" },
  { label: "Counselling", href: "/counselling" },
  { label: "Paid Counselling", href: "/paid-counselling" },
  { label: "Feedback", href: "/feedback" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/assets/logo.jpg"
                alt="Campus Academy"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="font-heading font-bold text-lg text-white">Campus Academy</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Expert DSE Engineering admission guidance in Maharashtra. Personalized counselling for
              Diploma students since 2019.
            </p>
            <p className="text-sm font-semibold text-accent">
              Your Career, Our Commitment
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919175956461"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                9175956461
              </a>
              <a
                href="https://wa.link/j5skkr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/campus_academy._/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                @campus_academy._
              </a>
              <a
                href="https://www.youtube.com/results?search_query=MSBTE+Campus+Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Video className="w-4 h-4" />
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Campus Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
