import { STATS } from "@/lib/constants";
import CountUp from "@/components/ui/CountUp";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TrustBar() {
  return (
    <section className="py-14 md:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          {STATS.map((stat, idx) => (
            <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 relative group overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 text-gradient">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <div className="overflow-hidden relative group flex justify-center">
          <div className="flex w-max animate-marquee gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Realistically these would be mapped icons, using text as placeholdes like the HTML */}
            <span className="text-2xl font-bold">SAMSUNG</span>
            <span className="text-2xl font-bold">IBM</span>
            <span className="text-2xl font-bold">TATA MOTORS</span>
            <span className="text-2xl font-bold">RENAULT</span>
            <span className="text-2xl font-bold">JW MARRIOTT</span>
            <span className="text-2xl font-bold">SAMSUNG</span>
            <span className="text-2xl font-bold">IBM</span>
            <span className="text-2xl font-bold">TATA MOTORS</span>
            <span className="text-2xl font-bold">RENAULT</span>
            <span className="text-2xl font-bold">JW MARRIOTT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
