"use client";

import { useRef, useEffect } from "react";
import { CASE_STUDIES } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function CaseStudiesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSrc;
    } else {
      import("hls.js").then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls({ enableWorker: true });
          hls.loadSource(hlsSrc);
          hls.attachMedia(video);
        }
      }).catch(() => {
        video.src = "/videos/Gradient-background.mp4";
      });
    }
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section — wave background */}
      <section className="relative overflow-hidden py-12 md:py-20 px-6">
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />

          <svg className="absolute bottom-0 left-0 w-full opacity-[0.07]" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" fill="currentColor" className="text-primary">
              <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,400 L0,400Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" />
            </path>
            <path d="M0,220 C360,120,520,320,780,220 C1040,120,1280,300,1440,220 L1440,400 L0,400Z" fill="currentColor" className="text-indigo-500">
              <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,220 C360,120,520,320,780,220 C1040,120,1280,300,1440,220 L1440,400 L0,400Z;M0,260 C360,320,520,120,780,260 C1040,320,1280,120,1440,260 L1440,400 L0,400Z;M0,220 C360,120,520,320,780,220 C1040,120,1280,300,1440,220 L1440,400 L0,400Z" />
            </path>
          </svg>

          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-blob mix-blend-screen" />
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />

          {/* No bottom fade — bleeds into case studies video */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <AnimateOnScroll variant="fade-down">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-white">Case Studies</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="blur-in" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-tight mb-4">Case Studies</h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="text-slate-400 max-w-2xl text-lg leading-relaxed font-display font-light">
              Exploring how we help industry leaders and innovative startups leverage technology to scale, optimize, and dominate their markets.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Studies List — video background */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            style={{ filter: "saturate(0.3) brightness(0.3)" }}
          />
          <div className="absolute top-0 left-0 right-0 z-[1]" style={{ height: "200px", background: "linear-gradient(to bottom, #14181e, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-[1]" style={{ height: "200px", background: "linear-gradient(to top, #14181e, transparent)" }} />
          <div className="absolute inset-0 bg-bg-dark/50 z-[1]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-32 relative z-10">
          {CASE_STUDIES.map((study, idx) => {
            const isFullFormat = idx < 3;
            const isEven = idx % 2 !== 0;

            return (
              <AnimateOnScroll key={idx} variant={isEven ? "fade-left" : "fade-right"}>
                <article className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 group`}>
                  <div className="w-full lg:w-1/2 overflow-hidden rounded-xl aspect-[16/10] relative shadow-2xl liquid-glass">
                    <div className="absolute inset-0 bg-[url('/images/casestudyBg.png')] bg-cover bg-center bg-slate-800" />
                    <div
                      className="absolute inset-0 bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${study.image}')` }}
                    />
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-md font-bold rounded-full">
                        {study.category}
                      </span>
                      <span className="px-3 py-1 bg-white/[0.06] text-slate-400 text-md font-medium rounded-full">
                        {study.link}
                      </span>
                    </div>

                    <h2 className="text-3xl font-display font-semibold text-white">{study.title}</h2>

                    <div className="space-y-4 text-slate-300 text-lg font-display font-light">
                      {isFullFormat ? (
                        <>
                          <p><strong className="text-white block mb-1 font-display font-semibold">Challenge:</strong> {study.challenge}</p>
                          <p><strong className="text-white block mb-1 font-display font-semibold">Solution:</strong> {study.solution}</p>
                          <p><strong className="text-white block mb-1 font-display font-semibold">Impact:</strong> {study.impact}</p>
                        </>
                      ) : (
                        <p>{study.description}</p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="text-[#d4af37] text-2xl font-bold font-display">{study.metric}</div>
                      <p className="text-xs text-slate-500 uppercase font-semibold font-display">{study.metricLabel}</p>
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      {/* Final CTA — wave background */}
      <section className="py-14 md:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-primary/10" />

          <svg className="absolute top-0 left-0 w-full opacity-[0.07]" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z" fill="currentColor" className="text-primary">
              <animate attributeName="d" dur="9s" repeatCount="indefinite" values="M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,0 L0,0Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z" />
            </path>
          </svg>

          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute bottom-[10%] left-[10%] w-80 h-80 rounded-full bg-primary/15 blur-[140px] animate-blob" />
          <div className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[120px] animate-blob animation-delay-2000" />

          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll variant="scale-up">
            <div className="p-10 lg:p-10 relative overflow-hidden">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight font-display font-semibold">Ready to build something amazing?</h2>
              <p className="text-xl text-white/70 mb-4 font-display font-light">Let&apos;s talk about your next project and how we can achieve these results.</p>
              <Link
                href="/contact"
                className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-display font-semibold text-white inline-flex items-center gap-2 group hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}