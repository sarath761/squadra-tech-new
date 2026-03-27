"use client";

import FAQ from "@/components/ui/FAQ";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="py-16 md:py-16 relative overflow-hidden" style={{ minHeight: "600px" }}>
      {/* Same background family — no top fade from FinalCTA, bottom fade into footer */}
      <div className="absolute inset-0 bg-slate-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />

        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.07]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path d="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" fill="currentColor" className="text-primary">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,400 L0,400Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" />
          </path>
          <path d="M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z" fill="currentColor" className="text-indigo-500">
            <animate attributeName="d" dur="14s" repeatCount="indefinite" values="M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z;M0,320 C400,350,600,180,840,320 C1080,350,1300,180,1440,320 L1440,400 L0,400Z;M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z" />
          </path>
        </svg>

        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[-10%] left-[10%] w-72 h-72 rounded-full bg-primary/15 blur-[130px] animate-blob animation-delay-4000" />
        <div className="absolute bottom-[5%] right-[5%] w-80 h-80 rounded-full bg-indigo-500/10 blur-[140px] animate-blob" />

        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* No top fade — seamless from FinalCTA */}
        {/* Bottom fade — blends into footer */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <AnimateOnScroll variant="fade-up">
          <div className="flex justify-center mb-5">
            <span className="liquid-glass rounded-full px-5 py-2 text-sm font-display font-medium text-white/90 tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9] text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/60 font-display font-light text-center mb-14">
            Everything you need to know before getting started.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={0.1}>
          <FAQ />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={0.2}>
          <div className="mt-8 text-center">
            <div className="rounded-2xl p-4 inline-block">
              <p className="text-white/60 font-display font-semibold mb-5 text-md">
                Still have questions?
              </p>
              <Link
                href="/contact"
                className="liquid-glass-strong rounded-full px-8 py-3.5 text-white font-display font-semibold text-sm inline-flex items-center gap-2 hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}