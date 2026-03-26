"use client";

import { STATS } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Image from "next/image";

const CLIENT_LOGOS = [
  { src: "/images/logo/logo-1.png", alt: "Client Logo", white: false },
  { src: "/images/logo/logo-2.png", alt: "Client Logo", white: false },
  { src: "/images/logo/logo-3.png", alt: "Client Logo", white: false },
  { src: "/images/logo/logo-4.png", alt: "Client Logo", white: false },
];

const TICKER_ROWS = [
  { direction: "left" as const, duration: 30 },
];

export default function TrustBar() {
  const duplicated = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {STATS.map((stat, idx) => (
            <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1}>
              <div className="p-6 md:p-8 rounded-2xl relative group overflow-hidden liquid-glass">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-gradient">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-white/50 uppercase tracking-widest font-display">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Client Logo Ticker */}
      <div className="w-full overflow-hidden">
        <h3 className="text-center text-sm font-display font-normal text-white/40 tracking-wide mb-10">
          Our Trusted Clients
        </h3>
        <div className="w-full max-w-[1164px] mx-auto px-1 flex flex-col gap-0">
          {TICKER_ROWS.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex items-center h-[73px] overflow-hidden"
              aria-hidden="true"
            >
              <div
                className={`flex items-center gap-[50px] ${
                  row.direction === "left" ? "animate-ticker-left" : "animate-ticker-right"
                }`}
                style={{ animationDuration: `${row.duration}s` }}
              >
                {duplicated.map((logo, idx) => (
                  <div
                    key={`row${rowIdx}-${idx}`}
                    className="flex-shrink-0 flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={40}
                      className={`h-[40px] w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 ${
                        logo.white ? "brightness-0 invert" : ""
                      }`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}