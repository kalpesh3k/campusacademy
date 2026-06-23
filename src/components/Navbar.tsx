"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check initial dark mode state
    const isDarkMode = document.documentElement.classList.contains("dark") || 
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "DSE Insights", href: "#insights" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Counselling", href: "#plans" },
    { name: "Admission Step", href: "#process" },
    { name: "Document Checklist", href: "#checklist" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav-bg backdrop-blur-md shadow-md py-3 border-b border-card-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-sm bg-white flex items-center justify-center">
              <Image
                src="/assets/logo.jpg"
                alt="Campus Academy Logo"
                fill
                priority
                sizes="40px"
                className="object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%233D1054'><circle cx='50' cy='50' r='48' fill='none' stroke='%233D1054' stroke-width='4'/><text x='50' y='55' font-size='35' font-family='Arial' font-weight='bold' text-anchor='middle' fill='%233D1054'>CA</text></svg>";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading tracking-tight text-primary dark:text-white transition-colors duration-300">
                Campus Academy
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium -mt-1 tracking-wider uppercase">
                DSE Admission Experts
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-secondary text-foreground/80 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary-glow text-foreground/80 transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href="https://wa.link/j5skkr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Join WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-primary-glow text-foreground/80 transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary-glow text-foreground/80 transition-colors duration-200"
              aria-label="Open menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 top-[73px] z-40 w-full bg-background/95 backdrop-blur-md border-t border-card-border lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold py-2 border-b border-card-border/50 text-foreground/90 hover:text-secondary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.link/j5skkr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white py-3 rounded-full text-base font-bold shadow-md transition-all duration-200 w-full"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>Join WhatsApp Channel</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
