"use client";

import { useRef, useEffect } from "react";
import { ACHIEVEMENTS, TECH_STACKS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import ProcessSection from "./ProcessSection";

export default function HowWeDoPage() {
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
    <div className="flex flex-col">
      {/* Hero Section — wave background */}
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

          {/* No bottom fade — bleeds into process video */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <AnimateOnScroll variant="fade-down">
                <div className="inline-flex items-center gap-2 text-md text-slate-400 mb-6 font-medium bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <span className="material-symbols-outlined text-md">chevron_right</span>
                  <span className="text-white">How We Do</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <span className="liquid-glass rounded-full px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-primary inline-block">
                  How We Do
                </span>
                <h1 className="text-4xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-6">
                  Delivering High Impact Digital Engineering
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-display font-light">
                  At Squadra Tech, we bridge the gap between complex enterprise challenges and modern technological excellence. Our capabilities span across scalable platforms, AI automation, and resilient cloud architectures.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ACHIEVEMENTS.slice(0, 4).map((achievement, idx) => (
                <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
                  <div className={`relative overflow-hidden liquid-glass-strong p-8 rounded-2xl flex flex-col justify-between aspect-square group hover:-translate-y-1 transition-all duration-500 ${idx % 2 !== 0 ? "translate-y-8" : ""}`}>
                    <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 material-symbols-outlined text-primary bg-primary/10 p-3 rounded-xl self-start transition-transform duration-300 group-hover:-translate-y-1 text-3xl">
                      {achievement.icon}
                    </span>
                    <div className="relative z-10 mt-auto">
                      <p className="text-4xl font-black text-white mb-2 text-gradient">{achievement.metric}</p>
                      <p className="text-slate-400 font-bold text-md uppercase tracking-wider font-display">{achievement.label}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section — video background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            style={{ filter: "saturate(0.3) brightness(0.35)" }}
          />
          <div className="absolute top-0 left-0 right-0 z-[1]" style={{ height: "200px", background: "linear-gradient(to bottom, #14181e, transparent)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-[1]" style={{ height: "200px", background: "linear-gradient(to top, #14181e, transparent)" }} />
          <div className="absolute inset-0 bg-bg-dark/45 z-[1]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <span className="liquid-glass rounded-full px-5 py-2 text-md font-display font-medium text-white/90 tracking-wide">
                  Methodology
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-6">Our Proven Methodology</h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg font-display font-light">
                From concept to deployment, we follow a rigorous 6-step lifecycle to ensure your project&apos;s success and long-term scalability.
              </p>
            </div>
          </AnimateOnScroll>

          <ProcessSection />
        </div>
      </section>

      {/* Tech Stacks Section — wave background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />

          <svg className="absolute bottom-0 left-0 w-full opacity-[0.07]" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" fill="currentColor" className="text-primary">
              <animate attributeName="d" dur="11s" repeatCount="indefinite" values="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,400 L0,400Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" />
            </path>
            <path d="M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z" fill="currentColor" className="text-indigo-500">
              <animate attributeName="d" dur="13s" repeatCount="indefinite" values="M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z;M0,320 C400,350,600,180,840,320 C1080,350,1300,180,1440,320 L1440,400 L0,400Z;M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z" />
            </path>
          </svg>

          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[130px] animate-blob animation-delay-4000" />

          {/* No top fade — seamless from video */}
          {/* No bottom fade — bleeds into CTA */}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <span className="liquid-glass rounded-full px-5 py-2 text-md font-display font-medium text-white/90 tracking-wide">
                  Technology
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-6">Our Technology Stack</h2>
              <p className="text-slate-400 text-lg font-display font-light">
                We leverage industry-leading tools and frameworks to build high-performance software.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_STACKS.map((stack, idx) => (
              <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
                <div className="liquid-glass p-8 rounded-2xl hover:bg-white/[0.06] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 h-full flex flex-col group">
                  <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary text-3xl p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">{stack.icon}</span>
                    <h3 className="font-display font-semibold text-xl text-white">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {stack.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-3 py-1.5 bg-white/[0.06] text-slate-300 rounded-lg text-md font-light font-display">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — wave background */}
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

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <AnimateOnScroll variant="scale-up">
            <div className="p-10 lg:p-10 text-center text-white relative overflow-hidden">
              <h2 className="text-3xl lg:text-5xl text-white mb-6 leading-tight font-display font-semibold">Ready to scale your digital presence?</h2>
              <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg font-display font-light">
                Let&apos;s discuss how our capabilities can solve your unique business challenges and drive meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="liquid-glass-strong rounded-full px-8 py-4 text-lg font-display font-semibold text-white hover:scale-105 transition-all duration-300"
                >
                  Schedule a Consult
                </Link>
                <Link
                  href="/case-studies"
                  className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 px-8 py-4 rounded-full font-display font-semibold text-lg transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}