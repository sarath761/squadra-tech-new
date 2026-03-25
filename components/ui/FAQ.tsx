"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ({ className = "" }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-4 ${className}`} id="faq-container">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-transparent">
            <div 
              className="p-6 hover:bg-primary/5 cursor-pointer transition-all flex justify-between items-center bg-white dark:bg-slate-900/30"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h5 className="font-bold pr-8">{item.question}</h5>
              <span 
                className="material-symbols-outlined transition-transform duration-300 flex-shrink-0"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                add
              </span>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-slate-500 text-sm leading-relaxed px-6 pb-6 bg-white dark:bg-slate-900/30">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
