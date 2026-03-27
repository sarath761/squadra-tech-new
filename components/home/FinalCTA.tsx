import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-8 relative overflow-hidden">
      {/* Same background family — top fade from ProcessSteps, no bottom fade into FAQ */}
      <div className="absolute inset-0 bg-slate-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-primary/10" />

        <svg
          className="absolute top-0 left-0 w-full opacity-[0.07]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path d="M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z" fill="currentColor" className="text-primary">
            <animate attributeName="d" dur="9s" repeatCount="indefinite" values="M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,0 L0,0Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,0 L0,0Z" />
          </path>
        </svg>

        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[20%] right-[10%] w-80 h-80 rounded-full bg-primary/15 blur-[140px] animate-blob" />
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[120px] animate-blob animation-delay-2000" />

        {/* Top fade — blends from ProcessSteps */}
        <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#14181e] to-transparent z-[2]" />
        {/* No bottom fade — bleeds into FAQSection */}
      </div>

      <div className="max-w-5xl mx-auto relative z-10 bg-red-1000">
        <AnimateOnScroll variant="scale-up">
          <div className=" rounded-[2.5rem] p-12 lg:p-10 text-center text-white relative overflow-hidden">

            <h2 className="text-4xl md:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-[0.9] text-center mb-4">
              Ready to See Your Website Tomorrow?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-display font-light">
              Free mockup. No commitment. 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="liquid-glass-strong rounded-full px-8 py-4 text-white font-display font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                Book Your Free Session
              </Link>
              <Link
                href="/contact"
                className="liquid-glass-strong rounded-full px-8 py-4 text-white font-display font-semibold text-lg hover:scale-105 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}