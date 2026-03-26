import { AI_STATS } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AISwitch() {
  return (
    <section className="py-20 md:py-32 text-white overflow-hidden relative">
      {/* Same background family — no top/bottom fades, sits between two matching sections */}
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[150px] animate-blob" />
        <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-indigo-500/10 blur-[120px] animate-blob animation-delay-4000" />

        {/* No top fade — seamless from WhySquadra */}
        {/* No bottom fade — seamless into ExpertiseGrid */}
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-5xl lg:text-7xl font-display font-semibold mb-16 leading-tight">
            The Enterprises That{" "}
            <span className="text-primary italic font-serif font-semibold">
              Switch to AI{" "}
            </span>
            Win
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-12">
          {AI_STATS.map((stat, idx) => (
            <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
              <div >
                <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-6xl font-black text-gradient mb-4">
                  {stat.isText ? (
                    <span>{stat.display}</span>
                  ) : (
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-xl font-bold mb-2 font-display">{stat.title}</div>
                <p className="text-slate-300 text-sm font-display font-normal">{stat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}