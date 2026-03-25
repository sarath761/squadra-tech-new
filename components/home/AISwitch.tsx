import { AI_STATS } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function AISwitch() {
  return (
    <section className="py-20 md:py-32 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-5xl lg:text-7xl font-black mb-16 leading-tight">
            The Enterprises That{" "}
            <span className="text-primary italic font-serif font-normal">
              Switch to AI{" "}
            </span>
            Win.
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-12">
          {AI_STATS.map((stat, idx) => (
            <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
              <div className="p-10 rounded-2xl bg-white/5 border border-primary/30 shadow-lg shadow-primary/20 hover:border-primary/60 transition-all duration-300 h-full">
                <div className="text-6xl font-black text-gradient mb-4">
                  {stat.isText ? (
                    <span>{stat.display}</span>
                  ) : (
                    <CountUp end={stat.number} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-xl font-bold mb-2">{stat.title}</div>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}