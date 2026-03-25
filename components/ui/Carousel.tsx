"use client";

import { useState, useEffect, useRef } from "react";
import { CASE_STUDIES } from "@/lib/constants";

export default function Carousel({ className = "" }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const scrollAmount = currentIndex * 424;
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className={className}>
      {/* Heading + Arrows — constrained to max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-serif italic mb-4">Featured Work</h2>
          <p className="text-slate-500 max-w-md">
            Real results for industry leaders across the globe.
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={prevSlide}
            className="p-3 border border-slate-700 rounded-full hover:bg-primary transition-colors group"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white">
              west
            </span>
          </button>
          <button
            onClick={nextSlide}
            className="p-3 border border-slate-700 rounded-full hover:bg-primary transition-colors group"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-white">
              east
            </span>
          </button>
        </div>
      </div>

      {/* Card Strip — full width, breaks out of container */}
      <div
        ref={containerRef}
        className="flex gap-6 px-4 overflow-x-auto hide-scrollbar snap-x scroll-smooth"
      >
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={idx}
            className="min-w-[85vw] md:min-w-[400px] snap-center group flex-shrink-0"
          >
            <div className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden relative mb-4">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${study.image}')`,
                  backgroundColor: "#1e293b",
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14181e]/80 to-transparent" />
              {/* Label + Title */}
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-bold uppercase tracking-widest bg-primary px-3 py-1 rounded-full mb-2 inline-block">
                  {study.category}
                </span>
                <h4 className="text-2xl font-bold">{study.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}