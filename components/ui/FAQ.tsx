// components/ui/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ({ className = "" }: { className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={`space-y-3 ${className}`} id="faq-container">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`liquid-glass rounded-2xl overflow-hidden transition-all duration-500 ${
              isOpen ? "shadow-lg shadow-primary/10" : ""
            }`}
          >
            <div
              className="p-6 md:p-7 cursor-pointer transition-all duration-300 flex justify-between items-center group hover:bg-white/[0.03]"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <h5 className="text-base md:text-lg font-display font-semibold text-white/90 pr-8 tracking-tight">
                {item.question}
              </h5>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary text-2xl flex-shrink-0 font-light"
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-7 pb-7">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
                    <p className="text-base text-white/70 leading-[1.75] font-display font-light">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}