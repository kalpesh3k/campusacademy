"use client";

import { useState, useEffect } from "react";
import { CheckSquare, Square, Printer, CheckCircle, RefreshCw } from "lucide-react";

interface ChecklistItem {
  id: string;
  category: "general" | "caste" | "income";
  label: string;
  description: string;
}

export default function DocumentChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  const checklistItems: ChecklistItem[] = [
    {
      id: "diploma-marksheets",
      category: "general",
      label: "Diploma Marksheets (All Semesters)",
      description: "Original copy of final year, and copy of all previous semester marksheets.",
    },
    {
      id: "diploma-certificate",
      category: "general",
      label: "Diploma Passing Certificate / Provisional Certificate",
      description: "Issued by MSBTE or your respective autonomous institute university.",
    },
    {
      id: "ssc-marksheet",
      category: "general",
      label: "SSC Marksheet & Passing Certificate",
      description: "Required for name verification, date of birth, and board match.",
    },
    {
      id: "hsc-marksheet",
      category: "general",
      label: "HSC Marksheet & Passing Certificate (If Applicable)",
      description: "Required only if you did HSC before joining the diploma course.",
    },
    {
      id: "domicile-cert",
      category: "general",
      label: "Domicile Certificate / School Leaving / Birth Certificate",
      description: "Must state you were born in Maharashtra, or possess a Maharashtra domicile certificate.",
    },
    {
      id: "leaving-cert",
      category: "general",
      label: "Leaving Certificate (LC) / Transfer Certificate (TC)",
      description: "Issued by the last attended diploma polytechnic institute.",
    },
    {
      id: "equivalence-cert",
      category: "general",
      label: "MSBTE Equivalence Certificate (If Autonomous)",
      description: "Required if your polytechnic was autonomous or outside MSBTE.",
    },
    {
      id: "caste-cert",
      category: "caste",
      label: "Caste Certificate (For Reserved Categories)",
      description: "Required for OBC, SC, ST, VJNT, NT, SBC candidates.",
    },
    {
      id: "caste-validity",
      category: "caste",
      label: "Caste Validity Certificate (CVC)",
      description: "Mandatory document for all reserved category students in engineering.",
    },
    {
      id: "non-creamy-layer",
      category: "caste",
      label: "Non-Creamy Layer Certificate (NCL)",
      description: "Valid up to March 31st of the current academic year (OBC, NT, SBC).",
    },
    {
      id: "ews-cert",
      category: "caste",
      label: "EWS Certificate (Economically Weaker Section)",
      description: "Official certificate in State format issued by competent authority.",
    },
    {
      id: "income-cert",
      category: "income",
      label: "Income Certificate (FY 2025-26)",
      description: "Issued by Tahsildar, necessary for TFWS seats, scholarship or EBC benefits.",
    },
    {
      id: "nationality-cert",
      category: "income",
      label: "Indian Nationality Certificate",
      description: "Usually covered under Domicile, or School Leaving, or Indian Passport.",
    },
    {
      id: "gap-cert",
      category: "income",
      label: "Gap Certificate Affidavit (If Applicable)",
      description: "Required if there is a gap year between Diploma completion and DSE admission.",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("dse_checklist");
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse checklist", e);
      }
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    localStorage.setItem("dse_checklist", JSON.stringify(updated));
  };

  const resetChecklist = () => {
    if (confirm("Are you sure you want to reset your checklist progress?")) {
      setCheckedItems({});
      localStorage.removeItem("dse_checklist");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getCompletedCount = (category: string) => {
    const items = checklistItems.filter((i) => i.category === category);
    const completed = items.filter((i) => checkedItems[i.id]);
    return { completed: completed.length, total: items.length };
  };

  if (!mounted) return null;

  return (
    <section id="checklist" className="py-24 bg-background relative print-area">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-12 no-print">
          <span className="bg-primary/10 dark:bg-primary-glow text-primary dark:text-primary-light text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Document Checklist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-foreground mt-3 tracking-tight">
            DSE Required Documents Checklist
          </h2>
          <p className="text-sm text-foreground/75 mt-3">
            Track and verify all documents needed for verification. Check off items as you gather them.
          </p>
        </div>

        {/* Print Header (Only shown during print) */}
        <div className="hidden print:block mb-8 border-b-2 border-primary pb-4">
          <h1 className="text-2xl font-black text-primary font-heading">Campus Academy</h1>
          <p className="text-xs text-gray-500">DSE Engineering Admission Documents Checklist</p>
          <p className="text-[10px] text-gray-400 mt-1">
            Status report generated on: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex justify-between items-center mb-8 bg-card-bg border border-card-border p-4 rounded-2xl shadow-sm no-print">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-xs font-bold text-foreground">
              Total Progress: {checklistItems.filter((i) => checkedItems[i.id]).length} /{" "}
              {checklistItems.length} Verified
            </span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={resetChecklist}
              className="flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 px-3 py-2 rounded-xl transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Checklist Categories */}
        <div className="space-y-10">
          
          {/* General Categories */}
          <div>
            <div className="flex justify-between items-center border-b border-card-border pb-3 mb-4">
              <h3 className="text-base font-extrabold font-heading text-primary dark:text-primary-light uppercase tracking-wider">
                1. General Academic Documents
              </h3>
              <span className="text-[10px] bg-primary/10 text-primary dark:text-white px-2 py-0.5 rounded-full font-bold no-print">
                {getCompletedCount("general").completed} / {getCompletedCount("general").total} Checked
              </span>
            </div>
            
            <div className="space-y-4">
              {checklistItems
                .filter((item) => item.category === "general")
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                      checkedItems[item.id]
                        ? "bg-primary-glow/10 border-primary/20"
                        : "bg-card-bg border-card-border hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {checkedItems[item.id] ? (
                        <CheckSquare className="w-5 h-5 text-primary fill-primary/10" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                      <p className="text-xs text-foreground/70 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Caste Categories */}
          <div>
            <div className="flex justify-between items-center border-b border-card-border pb-3 mb-4">
              <h3 className="text-base font-extrabold font-heading text-primary dark:text-primary-light uppercase tracking-wider">
                2. Category Specific Documents
              </h3>
              <span className="text-[10px] bg-primary/10 text-primary dark:text-white px-2 py-0.5 rounded-full font-bold no-print">
                {getCompletedCount("caste").completed} / {getCompletedCount("caste").total} Checked
              </span>
            </div>

            <div className="space-y-4">
              {checklistItems
                .filter((item) => item.category === "caste")
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                      checkedItems[item.id]
                        ? "bg-primary-glow/10 border-primary/20"
                        : "bg-card-bg border-card-border hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {checkedItems[item.id] ? (
                        <CheckSquare className="w-5 h-5 text-primary fill-primary/10" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                      <p className="text-xs text-foreground/70 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Income Categories */}
          <div>
            <div className="flex justify-between items-center border-b border-card-border pb-3 mb-4">
              <h3 className="text-base font-extrabold font-heading text-primary dark:text-primary-light uppercase tracking-wider">
                3. Income & Additional Documents
              </h3>
              <span className="text-[10px] bg-primary/10 text-primary dark:text-white px-2 py-0.5 rounded-full font-bold no-print">
                {getCompletedCount("income").completed} / {getCompletedCount("income").total} Checked
              </span>
            </div>

            <div className="space-y-4">
              {checklistItems
                .filter((item) => item.category === "income")
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                      checkedItems[item.id]
                        ? "bg-primary-glow/10 border-primary/20"
                        : "bg-card-bg border-card-border hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {checkedItems[item.id] ? (
                        <CheckSquare className="w-5 h-5 text-primary fill-primary/10" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">{item.label}</h4>
                      <p className="text-xs text-foreground/70 mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>

        {/* Print Disclaimer (Only shown during print) */}
        <div className="hidden print:block mt-12 pt-4 border-t border-gray-300 text-[10px] text-gray-400 text-center">
          Note: This document list serves as a checklist guide. Always check official DTE/CET Cell notices for the final mandated documents.
          <br />
          For DSE counselling & updates, visit Campus Academy (Founder: Kalpesh Kulkarni | 9175956461).
        </div>

      </div>
    </section>
  );
}
