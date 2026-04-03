"use client";

import { useState, useEffect, useRef } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const study = CASE_STUDIES[currentIndex];

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    }, 6000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    startAutoPlay();
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
    startAutoPlay();
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
    startAutoPlay();
  };

  const handleClick = () => {
    if (study.showWebsite && study.link) {
      window.open(
        study.link.startsWith("http") ? study.link : `https://${study.link}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className={className}>
      {/* Heading + Arrows */}
      <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-4">
            Work That Speaks For Itself
          </h2>
          <p className="text-slate-500 max-w-md font-display font-light">
            Real projects. Real results.
          </p>
        </div>

        {/* Desktop arrows */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/[0.08] transition-all duration-300 group"
            aria-label="Previous case study"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-0.5 transition-transform">
              arrow_back
            </span>
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center text-white hover:bg-white/[0.08] transition-all duration-300 group"
            aria-label="Next case study"
          >
            <span className="material-symbols-outlined group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Slider card */}
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`liquid-glass rounded-2xl overflow-hidden group ${study.showWebsite ? "cursor-pointer" : ""}`}
          onClick={handleClick}
        >

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row"
            >
              {/* Image — left 60% */}
              <div className="w-full lg:w-[60%] relative overflow-hidden">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-[480px] relative">
                  <div className="absolute inset-0 bg-[url('/images/casestudyBg.png')] bg-cover bg-center" />
                  <motion.div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${study.image}')` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#14181e]/30 hidden lg:block" />
                </div>
              </div>

              {/* Details — right 40% */}
              <div className="w-full lg:w-[40%] p-8 lg:p-10 flex flex-col justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-primary text-xs font-bold uppercase tracking-widest font-display mb-3"
                >
                  {study.category}
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl lg:text-3xl font-display font-semibold text-white tracking-tight mb-3"
                >
                  {study.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-400 text-sm font-display font-light leading-relaxed mb-5"
                >
                  {study.description}
                </motion.p>

                {study.solution && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="mb-5"
                  >
                    <p className="text-white text-xs font-display font-semibold uppercase tracking-wider mb-1">
                      What we built:
                    </p>
                    <p className="text-slate-400 text-sm font-display font-light leading-relaxed">
                      {study.solution}
                    </p>
                  </motion.div>
                )}

                {study.metric && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-5 border-t border-white/10"
                  >
                    <p className="text-white text-xs font-display font-semibold uppercase tracking-wider mb-1">
                      Result:
                    </p>
                    <p className="text-[#F9B51D] text-2xl font-display font-bold">
                      {study.metric}
                    </p>
                    {study.metricLabel && (
                      <p className="text-slate-500 text-xs font-display uppercase tracking-wider mt-1">
                        {study.metricLabel}
                      </p>
                    )}
                  </motion.div>
                )}

                {study.showWebsite && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 flex items-center gap-2 text-primary text-sm font-display font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    <span>View project</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots + Mobile arrows */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="md:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white"
            aria-label="Previous"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </button>

          <div className="flex items-center gap-2">
            {CASE_STUDIES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="relative p-1"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="md:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-white"
            aria-label="Next"
          >
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}