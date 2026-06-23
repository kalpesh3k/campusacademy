"use client";

import { Phone, Mail, Heart } from "lucide-react";

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/5 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Panel */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-white/10 flex items-center justify-center">
                <Image
                  src="/assets/logo.jpg"
                  alt="Campus Academy Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%233D1054'><circle cx='50' cy='50' r='48' fill='none' stroke='%233D1054' stroke-width='4'/><text x='50' y='55' font-size='35' font-family='Arial' font-weight='bold' text-anchor='middle' fill='%233D1054'>CA</text></svg>";
                  }}
                />
              </div>
              <div>
                <div className="text-lg font-bold font-heading">Campus Academy</div>
                <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider -mt-1">DSE Admission Consultant</div>
              </div>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Helping polytechnic and diploma engineering graduates across Maharashtra secure Direct Second Year Engineering admissions in standard government, autonomous, and private institutions.
            </p>
            <div className="text-[10px] text-gray-500 font-bold">
              Founder: Kalpesh Kulkarni (5+ Years Experience)
            </div>
          </div>

          {/* Links Panel */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-semibold">
              <li><a href="#home" className="hover:text-secondary transition-colors">Home Page</a></li>
              <li><a href="#insights" className="hover:text-secondary transition-colors">DSE Seats Info</a></li>
              <li><a href="#about" className="hover:text-secondary transition-colors">About Campus Academy</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Counselling Services</a></li>
              <li><a href="#plans" className="hover:text-secondary transition-colors">Pricing Packages</a></li>
              <li><a href="#checklist" className="hover:text-secondary transition-colors">Required Documents</a></li>
            </ul>
          </div>

          {/* Contacts Panel */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Contact Info</h4>
            <div className="space-y-3 text-xs text-gray-400 font-bold">
              
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:9175956461" className="hover:text-white transition-colors">9175956461</a>
                  <a href="tel:8830687180" className="hover:text-white transition-colors mt-0.5">8830687180</a>
                </div>
              </div>

              {/* YouTube */}
              <div className="flex items-center gap-3">
                <YoutubeIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="https://www.youtube.com/results?search_query=MSBTE+Campus+Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  YouTube: MSBTE Campus Academy
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <InstagramIcon className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="https://instagram.com/campus_academy._"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram: campus_academy._
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-500 font-semibold gap-4">
          <div>
            &copy; {currentYear} Campus Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>for Maharashtra Diploma Students.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
