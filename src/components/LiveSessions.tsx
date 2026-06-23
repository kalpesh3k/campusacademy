"use client";

import { motion } from "framer-motion";
import { Radio, Calendar, ArrowRight, BellRing } from "lucide-react";

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

interface LiveSession {
  id: number;
  title: string;
  topic: string;
  date: string;
  time: string;
  platform: string;
  status: "live" | "scheduled" | "soon";
}

export default function LiveSessions() {
  const sessions: LiveSession[] = [
    {
      id: 1,
      title: "DSE 2026 Registration & E-Scrutiny Process Demo",
      topic: "Live step-by-step application form filling, document sizes, resolving verification queries, and verification centres choice.",
      date: "Upcoming (Check Channel)",
      time: "11:00 AM IST",
      platform: "YouTube Live",
      status: "soon",
    },
    {
      // CAP Round 1 Option Form
      id: 2,
      title: "CAP Round 1 Option Form & Cutoff Analysis Strategy",
      topic: "How to draft preference lists, using college codes, understanding autonomous vs core choices, and managing low percentages.",
      date: "Upcoming (Check Channel)",
      time: "07:30 PM IST",
      platform: "YouTube Live",
      status: "scheduled",
    },
  ];

  const youtubeUrl = "https://www.youtube.com/results?search_query=MSBTE+Campus+Academy";

  return (
    <section className="py-24 bg-primary-glow/20 relative border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-red-500/10 text-red-500 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider border border-red-500/10 flex items-center gap-1.5 w-fit mx-auto">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Sessions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            Upcoming Live Guidance Streams
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Interact live with Founder Kalpesh Kulkarni, clarify your doubts, and secure perfect college option codes.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sessions.map((session) => (
            <motion.div
              key={session.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] bg-red-100 text-red-700 dark:bg-red-950/20 dark:text-red-400 border border-red-200/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
                    {session.status === "live" ? "Streaming Live" : session.status === "soon" ? "Streaming Soon" : "Scheduled"}
                  </span>
                  <span className="text-xs text-gray-500 font-bold uppercase">{session.platform}</span>
                </div>

                <h3 className="text-lg font-bold font-heading text-foreground mb-3 leading-snug">
                  {session.title}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                  {session.topic}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-card-border/50">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>{session.date}</span>
                  </div>
                  <span>{session.time}</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <YoutubeIcon className="w-4.5 h-4.5 fill-white stroke-none" />
                    <span>Subscribe Channel</span>
                  </a>
                  <a
                    href="https://wa.link/j5skkr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-card-bg border border-card-border hover:bg-gray-50 text-foreground text-center font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5"
                  >
                    <BellRing className="w-4 h-4 text-primary" />
                    <span>Get Alert</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
