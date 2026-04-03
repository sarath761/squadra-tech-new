"use client";

import { useRef, useEffect } from "react";
import LeadForm from "@/components/ui/LeadForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY_INFO } from "@/lib/constants";

export default function ContactPage() {
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
    <div className="flex flex-col min-h-screen">
      {/* Hero heading — wave background */}
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-16">
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

          {/* No bottom fade — bleeds into form video */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <AnimateOnScroll variant="fade-down">
              <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary inline-block mb-6">
                Get Started
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-6">
                Let&apos;s Build Together
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-display font-light">
                Tell us about your project and we will get back within 24 hours. Free technology assessment. No commitment.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Form + Contact Info — video background */}
      <section className="relative overflow-hidden py-16 md:py-24 flex-grow">
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

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Contact Form (60%) */}
            <div className="w-full lg:w-3/5">
              <AnimateOnScroll variant="fade-right" delay={0.1}>
                <div className="liquid-glass-strong p-8 md:p-10 rounded-3xl">
                  <LeadForm />
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Info (40%) */}
            <div className="w-full lg:w-2/5 space-y-10 lg:sticky lg:top-32">
              <AnimateOnScroll variant="fade-left" delay={0.2}>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 liquid-glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-xl mb-2 text-white">Our Office</h4>
                      <p className="text-slate-400 leading-relaxed max-w-xs font-display font-light">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 liquid-glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">mail</span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-xl mb-2 text-white">Email Us</h4>
                      <p className="text-slate-400 leading-relaxed flex flex-col gap-1 font-display font-light">
                        <a href={`mailto:${COMPANY_INFO.emailL1}`} className="hover:text-primary transition-colors">{COMPANY_INFO.emailL1}</a>
                        {/* {COMPANY_INFO.emailL2 && (
                          <a href={`mailto:${COMPANY_INFO.emailL2}`} className="hover:text-primary transition-colors">{COMPANY_INFO.emailL2}</a>
                        )} */}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 liquid-glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">call</span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-xl mb-2 text-white">Call Us</h4>
                      <p className="text-slate-400 leading-relaxed font-display font-light">
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{COMPANY_INFO.phone}</a>
                        <br />
                        <span className="text-sm text-white/40 mt-1 inline-block">Mon-Fri, 9am - 6pm IST</span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="scale-up" delay={0.3}>
                <div className="rounded-3xl overflow-hidden h-64 liquid-glass group relative">
                  <div className="absolute inset-0 bg-[url('/images/office-main.webp')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="liquid-glass-strong text-white px-5 py-3 rounded-2xl flex items-center gap-2 group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="material-symbols-outlined animate-bounce text-primary">location_on</span>
                      <span className="text-sm font-display font-semibold uppercase tracking-wider">Find Us</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}