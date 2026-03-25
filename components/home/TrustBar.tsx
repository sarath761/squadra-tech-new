import { STATS, CLIENT_NAMES } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TrustBar() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {STATS.map((stat, idx) => (
            <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1}>
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 relative group overflow-hidden">
                {/* Animated underline on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-gradient">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Client Logo Marquee */}
        <div className="overflow-hidden relative group">
          <div className="marquee-content gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* First set */}
            {CLIENT_NAMES.map((name, idx) => (
              <span key={`a-${idx}`} className="text-2xl font-bold whitespace-nowrap">
                {name}
              </span>
            ))}
            {/* Duplicate set for seamless loop */}
            {CLIENT_NAMES.map((name, idx) => (
              <span key={`b-${idx}`} className="text-2xl font-bold whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}