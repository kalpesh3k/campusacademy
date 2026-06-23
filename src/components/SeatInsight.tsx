"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, HelpCircle, ShieldAlert, CheckCircle } from "lucide-react";

export default function SeatInsight() {
  const [totalSeats, setTotalSeats] = useState(120);

  const dseSeats = Math.round(totalSeats * 0.1);
  // Estimate splits roughly matching typical DSE seat distributions
  const openSeats = Math.max(1, Math.round(dseSeats * 0.35));
  const obcSeats = Math.max(1, Math.round(dseSeats * 0.25));
  const scStSeats = Math.max(1, Math.round(dseSeats * 0.20));
  const otherSeats = Math.max(1, dseSeats - openSeats - obcSeats - scStSeats);

  return (
    <section id="insights" className="py-20 bg-primary-glow/30 border-y border-card-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary-glow glow-blur"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Critical Admission Analytics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            DSE Seats Distribution Rule (10% Reservation)
          </h2>
          <p className="text-base text-foreground/75 mt-3">
            Understand why Direct Second Year (DSE) Admission is highly competitive and requires a smart CAP round strategy.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Marathi Educational Info Box */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-card-border pb-4">
                <span className="text-2xl">💡</span>
                <h3 className="text-lg font-extrabold text-primary dark:text-primary-light uppercase tracking-wide">
                  DSE Admission Fact
                </h3>
              </div>

              <div className="space-y-4 text-foreground/90 font-medium">
                <p className="text-base leading-relaxed bg-primary/5 p-3.5 rounded-xl border-l-4 border-primary">
                  <strong>DSE Admission मध्ये प्रत्येक कॉलेजमध्ये साधारण 10% Seats Diploma विद्यार्थ्यांसाठी राखीव असतात.</strong>
                </p>
                
                <p className="text-sm leading-relaxed">
                  For example: MIT College मध्ये Computer Engineering च्या Regular Admission साठी <strong>120 Seats</strong> असतील तर DSE विद्यार्थ्यांसाठी फक्त <strong>12 Seats</strong> उपलब्ध असतात.
                </p>

                <p className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200/30 flex gap-2">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <span>
                    <strong>आणि या 12 Seats सर्व Categories मध्ये विभागल्या जातात.</strong> म्हणजेच तुमच्या Category साठी अनेक वेळा फक्त 2 ते 3 Seats उपलब्ध असू शकतात.
                  </span>
                </p>

                <p className="text-sm text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg border border-green-200/30 flex gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    म्हणूनच DSE Admission मध्ये योग्य <strong>College Selection</strong> आणि <strong>CAP Round Strategy</strong> खूप महत्त्वाची असते.
                  </span>
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-card-border">
              <a
                href="https://wa.link/j5skkr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-200"
              >
                <span>Counselling साठी येथे क्लीक करा</span>
              </a>
            </div>
          </div>

          {/* Interactive Calculator Graphic */}
          <div className="lg:col-span-7 bg-card-bg border border-card-border p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-1 flex items-center gap-2">
                <span>DSE Seat Calculator & Split Tracker</span>
                <Info className="w-4 h-4 text-gray-400" />
              </h3>
              <p className="text-xs text-foreground/60 mb-6">
                Adjust total regular intake seats below to visualize the restricted reservation numbers.
              </p>

              {/* Slider Input */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-foreground/80">Total Regular College Seats:</span>
                  <span className="text-2xl font-black text-primary dark:text-white">{totalSeats} Seats</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="180"
                  step="60"
                  value={totalSeats}
                  onChange={(e) => setTotalSeats(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary dark:bg-gray-700"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold px-1 mt-1">
                  <span>60 (Intake)</span>
                  <span>120 (Standard MIT Case)</span>
                  <span>180 (Mega Intake)</span>
                </div>
              </div>

              {/* Graphical Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/5 dark:bg-primary-glow/20 p-4 rounded-2xl border border-primary/10 flex flex-col justify-between">
                  <span className="text-xs text-gray-500 font-bold uppercase">Total Intake Seats</span>
                  <span className="text-3xl font-black text-foreground mt-2">{totalSeats}</span>
                  <span className="text-[10px] text-gray-400 mt-1">For first-year admissions</span>
                </div>

                <div className="bg-secondary/5 p-4 rounded-2xl border border-secondary/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-bold uppercase">DSE Reserved Seats</span>
                    <span className="text-[10px] bg-secondary/10 text-secondary font-black px-2 py-0.5 rounded-full">10% Rule</span>
                  </div>
                  <span className="text-3xl font-black text-secondary mt-2">{dseSeats}</span>
                  <span className="text-[10px] text-gray-400 mt-1">Direct Second Year vacancy</span>
                </div>
              </div>

              {/* Seats category breakdown */}
              <div>
                <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                  Expected Category Split (Approximate)
                </h4>
                <div className="space-y-3">
                  
                  {/* Open Seats */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-foreground/80">Open Category (~35%)</span>
                      <span className="text-foreground font-bold">{openSeats} Seat{openSeats > 1 ? 's' : ''}</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-primary h-full rounded-full"
                        animate={{ width: `${(openSeats / dseSeats) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* OBC Seats */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-foreground/80">OBC Category (~25%)</span>
                      <span className="text-foreground font-bold">{obcSeats} Seat{obcSeats > 1 ? 's' : ''}</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-secondary h-full rounded-full"
                        animate={{ width: `${(obcSeats / dseSeats) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* SC/ST Seats */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-foreground/80">SC / ST Category (~20%)</span>
                      <span className="text-foreground font-bold">{scStSeats} Seat{scStSeats > 1 ? 's' : ''}</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-accent h-full rounded-full"
                        animate={{ width: `${(scStSeats / dseSeats) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Other Seats */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-foreground/80">Others: NT, VJNT, EWS, TFWS (~20%)</span>
                      <span className="text-foreground font-bold">{otherSeats} Seat{otherSeats > 1 ? 's' : ''}</span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        className="bg-slate-400 h-full rounded-full"
                        animate={{ width: `${(otherSeats / dseSeats) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-500 font-bold flex items-center justify-center gap-2 bg-primary/5 dark:bg-primary-glow/20 py-2.5 px-4 rounded-xl border border-card-border">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span>With just 2-3 seats per category, a single wrong college code in your option form can cost a year!</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
