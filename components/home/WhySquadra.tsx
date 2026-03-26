import { WHY_SQUADRA } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const ICONS = ["bolt", "verified_user", "groups", "trending_up"];

export default function WhySquadra() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Shared background — fades out at top, fades out at bottom */}
      <div className="absolute inset-0 bg-slate-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />

        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.07]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path d="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" fill="currentColor" className="text-primary">
            <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,400 L0,400Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" />
          </path>
          <path d="M0,220 C360,120,520,320,780,220 C1040,120,1280,300,1440,220 L1440,400 L0,400Z" fill="currentColor" className="text-indigo-500">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,220 C360,120,520,320,780,220 C1040,120,1280,300,1440,220 L1440,400 L0,400Z;M0,260 C360,320,520,120,780,260 C1040,320,1280,120,1440,260 L1440,400 L0,400Z;M0,220 C360,120,520,320,780,220 C1040,120,1280,300,1440,220 L1440,400 L0,400Z" />
          </path>
        </svg>

        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[10%] right-[10%] w-64 h-64 rounded-full bg-indigo-500/15 blur-[120px] animate-blob animation-delay-2000" />

        {/* Top fade — blends from previous section */}
        <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#14181e] to-transparent z-[2]" />
        {/* NO bottom fade — bleeds into AISwitch */}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[0.9] text-center mb-4">
            Why Global Leaders Choose Us?
          </h2>
          <p className="text-center text-base text-slate-300 mb-16 font-display">
            A team that ships fast and builds for growth.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_SQUADRA.map((item, idx) => (
            <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
              <div className="relative p-8 rounded-2xl h-full backdrop-blur-xl bg-white/[0.04] border border-white/[0.08] shadow-lg shadow-black/10 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group">
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="material-symbols-outlined text-4xl text-primary mb-6 block group-hover:scale-110 transition-transform duration-300">
                  {ICONS[idx]}
                </span>
                <h4 className="text-lg font-bold mb-3 font-display tracking-tight text-white">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-display font-normal">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}