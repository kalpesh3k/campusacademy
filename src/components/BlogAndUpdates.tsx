"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  link: string;
}

export default function BlogAndUpdates() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "MSBTE Diploma Results Announced: Next Steps for DSE Admission",
      excerpt: "MSBTE has officially released the final year diploma results. Here is the step-by-step guidance on how to calculate your aggregate percentage and get ready for the CET Cell registration portal.",
      date: "June 18, 2026",
      category: "DSE Updates",
      readTime: "4 min read",
      link: "https://wa.link/j5skkr"
    },
    {
      id: 2,
      title: "Understanding Option Form Choice Codes: General vs TFWS Seats",
      excerpt: "A single digit mistake in the choice code can allocate a core mechanical branch instead of computer engineering. Learn how to identify autonomous codes, TFWS codes, and normal codes properly.",
      date: "June 12, 2026",
      category: "Admission Guides",
      readTime: "6 min read",
      link: "https://wa.link/j5skkr"
    },
    {
      id: 3,
      title: "Documents Rejection Alert: Caste Validity and Non-Creamy Layer Validity",
      excerpt: "CET Cell e-scrutiny centers reject thousands of forms due to outdated Non-Creamy Layer dates (must be valid till March 2027) or missing Caste Validity. Read this to know how to upload receipts instead.",
      date: "June 05, 2026",
      category: "Alerts & Notices",
      readTime: "5 min read",
      link: "https://wa.link/j5skkr"
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl text-left">
            <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Admission Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
              Latest DSE News & Articles
            </h2>
            <p className="text-sm text-foreground/75 mt-3">
              Stay ahead with crucial admission circular notifications, guidelines, and expert analyses.
            </p>
          </div>
          
          <a
            href="https://wa.link/j5skkr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 flex items-center gap-1 text-sm font-bold text-secondary hover:text-secondary/85 group"
          >
            <span>Read all articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-card-bg border border-card-border rounded-3xl shadow-sm hover:shadow-lg flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 space-y-4">
                
                {/* Meta details */}
                <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                  <span className="bg-primary/5 dark:bg-primary-glow text-primary dark:text-white px-2.5 py-1 rounded-full uppercase tracking-wider text-[10px]">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold font-heading text-foreground hover:text-primary transition-colors leading-snug">
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-foreground/70 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Author & Footer */}
              <div className="p-6 border-t border-card-border/50 flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </div>
                
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-secondary hover:text-secondary/80"
                >
                  <span>Read Article</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
