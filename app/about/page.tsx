"use client";

import { useRef, useEffect } from "react";
import { WHY_PARTNER, INDUSTRIES, TEAM_COMPOSITION, COMPANY_INFO } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function AboutPage() {
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
    <div className="flex flex-col">
      {/* 1. Who We Are — wave background */}
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
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />

          {/* No bottom fade — bleeds into Industries */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-down" className="mb-6 inline-flex">
            <div className="flex items-center gap-2 text-sm text-slate-400 font-medium bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-white">About Us</span>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="fade-right">
              <div className="space-y-8">
                <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary inline-block">
                  Our Legacy
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9]">
                  Bridging Technology &amp; Business Outcomes
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed font-display font-light">
                  Squadra Tech is a powerhouse of innovation, dedicated to delivering enterprise-grade solutions. Our journey began with a vision to bridge the gap between complex technology and tangible business outcomes.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-display font-light">
                  As the technology wing of Squadra Media, we provide a holistic approach to digital transformation. We don&apos;t just build software; we engineer growth engines that scale with your ambitions.
                </p>
                <div className="pt-4">
                  <a className="liquid-glass-strong rounded-full px-6 py-3 font-display font-semibold text-white inline-flex items-center gap-2 hover:scale-105 transition-all duration-300" href="https://squadramedia.com" target="_blank" rel="noopener noreferrer">
                    <span>Visit Squadra Media</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group liquid-glass">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="absolute -bottom-6 -left-6 liquid-glass-strong p-8 rounded-2xl hidden md:block z-10 hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-white">
                    <div className="text-4xl font-bold font-display mb-1 text-gradient">150+</div>
                    <div className="text-sm font-bold uppercase tracking-wider font-display">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 2. Industries — wave background, no fades (bridge) */}
      <section className="py-14 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-primary/10" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-primary/15 blur-[130px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[110px] animate-blob" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9]">Industries We Empower</h2>
              <p className="text-slate-400 text-lg font-display font-light">
                Deep domain expertise across high-growth sectors allows us to build solutions that speak your industry&apos;s language.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, idx) => (
              <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.05}>
                <div className="group liquid-glass rounded-3xl px-8 py-10 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 flex flex-col items-center gap-4 h-full justify-center">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{industry.emoji}</span>
                  <span className="font-bold text-sm tracking-tight text-white font-display">{industry.name}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Partner — video background */}
      <section className="py-14 md:py-16 relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimateOnScroll variant="fade-right">
              <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-32">
                <div className="flex mb-4">
                  <span className="liquid-glass rounded-full px-5 py-2 text-sm font-display font-medium text-white/90 tracking-wide">
                    Why Us
                  </span>
                </div>
                <h2 className="text-4xl font-display font-semibold text-white tracking-tight leading-[0.9]">Why Leading Brands Partner With Us?</h2>
                <p className="text-slate-400 text-lg font-display font-light">
                  We move beyond the typical vendor-client relationship, becoming a strategic extension of your internal teams.
                </p>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
            </AnimateOnScroll>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {WHY_PARTNER.map((item, idx) => (
                <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1} className={item.title === "Uncompromising Security" ? "md:col-span-2" : ""}>
                  <div className={`liquid-glass-strong p-8 rounded-2xl border-l-4 border-l-[#d4af37] hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-500 h-full group flex flex-col ${item.title === "Uncompromising Security" ? "md:flex-row md:items-center gap-6" : ""}`}>
                    <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className={`material-symbols-outlined text-primary mb-4 ${item.title === "Uncompromising Security" ? "text-5xl mb-0" : "text-3xl"}`}>
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed font-display font-normal">{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Team — wave background */}
      <section className="py-14 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />

          <svg className="absolute bottom-0 left-0 w-full opacity-[0.07]" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" fill="currentColor" className="text-primary">
              <animate attributeName="d" dur="11s" repeatCount="indefinite" values="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,400 L0,400Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" />
            </path>
          </svg>

          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[-10%] right-[5%] w-72 h-72 rounded-full bg-primary/15 blur-[130px] animate-blob" />
          <div className="absolute bottom-[10%] left-[-5%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <AnimateOnScroll variant="fade-right">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group liquid-glass">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-left">
            <h2 className="text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-6">The Engineering Engine.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed font-display font-light">
              Our multidisciplinary teams of dedicated engineers, product strategists, and designers bring robust enterprise scale to everything we build.
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-white/[0.06] text-slate-300 rounded-full text-xs font-bold font-display">Engineering: {TEAM_COMPOSITION.engineering.join(", ")}</span>
                <span className="px-4 py-2 bg-white/[0.06] text-slate-300 rounded-full text-xs font-bold font-display">Design: {TEAM_COMPOSITION.design.join(", ")}</span>
                <span className="px-4 py-2 bg-white/[0.06] text-slate-300 rounded-full text-xs font-bold font-display">Leadership: {TEAM_COMPOSITION.leadership.join(", ")}</span>
              </div>
            </div>

            <h4 className="font-display font-semibold text-xl text-white mb-4">How this team delivers:</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="text-slate-300 font-display font-light">Deep product-first mindset integrated with modern technical strategies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="text-slate-300 font-display font-light">Agile velocity backed by rigorous CI/CD and QA automation pipelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                <span className="text-slate-300 font-display font-light">Relentless commitment to reducing technology overhead and maximizing ROI.</span>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. Co-Founders & Location — wave background with bottom fade */}
      <section className="py-14 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/30">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-primary/10" />

          <svg className="absolute top-0 left-0 w-full opacity-[0.07]" viewBox="0 0 1440 400" preserveAspectRatio="none">
            <path d="M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z" fill="currentColor" className="text-primary">
              <animate attributeName="d" dur="9s" repeatCount="indefinite" values="M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,0 L0,0Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z" />
            </path>
          </svg>

          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-[10%] left-[5%] w-80 h-80 rounded-full bg-primary/15 blur-[140px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-[15%] right-[10%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[120px] animate-blob" />

          {/* Bottom fade — blends into footer */}
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimateOnScroll variant="fade-up">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9] mb-4">The Minds Behind Squadra</h2>
              <p className="text-slate-400 text-lg font-display font-light">Our leadership brings together decades of experience in high-scale technology and strategic marketing.</p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-24">
            {[
              { name: "Tarush", title: "Co-Founder", desc: "Visionary strategist focused on expanding Squadra's footprint globally while maintaining core values of excellence." },
              { name: "Anu", title: "Co-Founder", desc: "Operational excellence expert driving the inner machinery of Squadra Tech, ensuring flawless project delivery." },
              { name: "Sandesh", title: "Co-Founder", desc: "The technical architect behind our most complex enterprise deployments, bridging the gap between imagination and execution." },
            ].map((founder, idx) => (
              <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1}>
                <div className="group">
                  <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[3/4] shadow-xl liquid-glass">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973e2153b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14181e] via-[#14181e]/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white group-hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-2xl font-display font-semibold">{founder.name}</h3>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mt-1 font-display">{founder.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-display font-light">{founder.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="scale-up">
            <div className="grid lg:grid-cols-2 gap-0  rounded-[2.5rem] overflow-hidden">
              <div className="p-12 lg:p-16 flex flex-col justify-center space-y-8">
                <h2 className="text-4xl font-display font-semibold text-white tracking-tight leading-[0.9]">Find Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-xl">location_on</span>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-white mb-2">Headquarters</h4>
                      <p className="text-slate-400 leading-relaxed font-display font-light">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-xl">mail</span>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-white mb-2">General Inquiry</h4>
                      <p className="text-slate-400 font-display font-light"><a href={`mailto:${COMPANY_INFO.emailL1}`} className="hover:text-primary transition-colors">{COMPANY_INFO.emailL1}</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-xl">call</span>
                    <div>
                      <h4 className="font-display font-semibold text-lg text-white mb-2">Call Us</h4>
                      <p className="text-slate-400 font-display font-light">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-[400px] relative">
                <div className="absolute inset-0 bg-[url('/images/office-main.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-primary/20 pointer-events-none mix-blend-overlay" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}