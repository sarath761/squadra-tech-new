"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-1/2">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-primary"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-12">
        {PROCESS_STEPS.map((step, idx) => {
          const isEven = idx % 2 !== 0;

          return (
            <AnimateOnScroll key={idx} variant={isEven ? "fade-left" : "fade-right"}>
              <div className="relative flex flex-col md:flex-row items-center">
                {isEven ? (
                  <>
                    <div className="md:w-1/2 order-1 hidden md:block"></div>
                    <div className="absolute left-[3px] md:left-1/2 w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full border-4 border-bg-light dark:border-bg-dark md:-translate-x-1/2 z-10 flex items-center justify-center transition-colors duration-500 hover:border-primary">
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-bold">{step.number}</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12 order-2 mt-4 md:mt-0 ml-10 md:ml-0 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/50 transition-all group">
                      <h4 className="text-primary text-md font-bold tracking-wider uppercase mb-1 drop-shadow-sm font-display">{step.timing}</h4>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0 ml-10 md:ml-0 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:border-primary/50 transition-all group">
                      <h4 className="text-primary text-md font-bold tracking-wider uppercase mb-1 drop-shadow-sm font-display">{step.timing}</h4>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-display">{step.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                    </div>
                    <div className="absolute left-[3px] md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-bg-light dark:border-bg-dark md:-translate-x-1/2 z-10 flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                      <span className="text-sm text-white font-bold">{step.number}</span>
                    </div>
                    <div className="md:w-1/2 order-3 hidden md:block"></div>
                  </>
                )}
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}
