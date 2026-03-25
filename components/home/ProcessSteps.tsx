"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-14 md:py-16 bg-slate-50 dark:bg-slate-900/50" id="process">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-4xl lg:text-5xl font-serif italic mb-2 text-center">From Brief to Live Site.</h2>
          <p className="text-slate-500 text-lg leading-relaxed text-center mb-16">Six steps. Full transparency. No surprises.</p>
        </AnimateOnScroll>

        <div ref={containerRef} className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-[39px] md:left-[49px] top-0 bottom-0 w-0.5 bg-slate-800">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimateOnScroll key={idx} variant="fade-up" delay={0.1}>
                <div className="relative pl-24 md:pl-32">
                  {/* Timeline Dot */}
                  <div className="absolute left-[31px] md:left-[41px] top-8 w-[18px] h-[18px] rounded-full border-4 border-bg-dark bg-primary z-10 transition-colors duration-300"></div>
                  
                  <div className="p-8 rounded-2xl bg-bg-light dark:bg-bg-dark border border-white/15 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-4">
                      <span className="text-4xl text-primary font-black font-serif italic">{step.number}</span>
                      <div>
                        <h4 className="text-slate-400 text-sm font-bold tracking-wider uppercase mb-1">{step.timing}</h4>
                        <h5 className="text-xl font-bold">{step.title}</h5>
                      </div>
                    </div>
                    <p className="text-slate-500 text-base leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
