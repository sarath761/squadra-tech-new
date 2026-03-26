"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
    <section className="py-10 md:py-16 relative overflow-hidden" id="process" style={{ minHeight: "700px" }}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "saturate(0.3) brightness(0.4)" }}
        />
        {/* Top fade — dark blue instead of black */}
        <div
          className="absolute top-0 left-0 right-0 z-[1]"
          style={{
            height: "200px",
            background: "linear-gradient(to bottom, #14181e, transparent)",
          }}
        />
        {/* Bottom fade — dark blue instead of black */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[1]"
          style={{
            height: "200px",
            background: "linear-gradient(to top, #14181e, transparent)",
          }}
        />
        {/* Overlay — dark blue instead of black */}
        <div className="absolute inset-0 bg-bg-dark/40 z-[1]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimateOnScroll variant="fade-up">
          <div className="flex justify-center mb-5">
            <span className="liquid-glass rounded-full px-5 py-2 text-sm font-display font-medium text-white/90 tracking-wide">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[0.9] text-center mb-4">
            From Brief to Live Site
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-display font-light leading-relaxed text-center max-w-2xl mx-auto mb-16">
            Six steps. Full transparency. No surprises
          </p>
        </AnimateOnScroll>

        <div ref={containerRef} className="relative">
          <div className="absolute left-[39px] md:left-[49px] top-0 bottom-0 w-[2px] bg-white/[0.08]">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-primary to-primary/30"
              style={{ height: lineHeight }}
            />
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[6px] bg-primary/40 blur-[4px]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.08}>
                <div className="relative pl-24 md:pl-32">
                  <div className="absolute left-[31px] md:left-[41px] top-9 z-10">
                    {/* Dot border — dark blue instead of black */}
                    <div className="w-[18px] h-[18px] rounded-full bg-primary border-[3px] border-[#14181e] shadow-[0_0_12px_rgba(42,74,126,0.6)]" />
                  </div>

                  <div className="liquid-glass-strong rounded-2xl p-8 md:p-10 hover:-translate-y-1 transition-all duration-500 group">
                    <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 mb-4">
                      <span className="text-4xl md:text-5xl text-primary font-black font-display italic tracking-tight leading-none">
                        {step.number}
                      </span>
                      <div>
                        <h4 className="text-sm font-display font-semibold tracking-[0.15em] uppercase text-white/50 mb-1">
                          {step.timing}
                        </h4>
                        <h5 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight">
                          {step.title}
                        </h5>
                      </div>
                    </div>
                    <p className="text-base text-white leading-[1.75] font-display">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <AnimateOnScroll variant="fade-up" delay={0.5}>
          <div className="mt-16 text-center">
            <span className="liquid-glass rounded-full px-6 py-2.5 text-sm font-display font-semibold text-white inline-block">
              Client visibility at every stage: Weekly demo · Sprint report · Executive summary · ROI tracker
            </span>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}