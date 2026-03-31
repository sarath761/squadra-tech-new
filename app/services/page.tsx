"use client";

import { useRef, useEffect } from "react";
import { SERVICES } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function ServicesPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsSrc = "https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8";

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

          {/* No bottom fade — bleeds into Services Content */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <AnimateOnScroll variant="fade-down">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-white">Services</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="blur-in" delay={0.1}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">Expertise</span>
            <h1 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-tight mb-6">Our Services</h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
              Tailored technology solutions to empower your business growth and digital transformation. We bridge the gap between vision and execution.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Content — video background */}
      <section className="py-14 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {SERVICES.map((service, idx) => {
              const isMaterialIcon = /^[a-z_]+$/.test(service.icon);

              return (
                <AnimateOnScroll key={idx} variant="fade-up" delay={(idx % 2) * 0.15} className="h-full">
                  <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl liquid-glass hover:bg-white/[0.06] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      {isMaterialIcon ? (
                        <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                      ) : (
                        <span>{service.icon}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-4 flex-grow">
                      <h3 className="text-xl font-display font-semibold text-white">{service.title}</h3>
                      <p className="text-slate-300 text-md leading-relaxed flex-grow font-display font-normal">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {service.tags && service.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-3 py-1 text-[10px] font-bold uppercase rounded-lg bg-white/[0.06] text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
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

          {/* Bottom fade — blends into footer */}
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimateOnScroll variant="scale-up">
            <div className="p-10 lg:p-10 relative overflow-hidden">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight font-display font-semibold">Have a project in mind?</h2>
              <p className="text-xl text-white/70 mb-10 font-display font-light">Let&apos;s talk about how we can help you achieve your goals.</p>
              <Link
                href="/contact"
                className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-display font-semibold text-white inline-flex items-center gap-2 group hover:scale-105 transition-all duration-300"
              >
                Let&apos;s talk
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}