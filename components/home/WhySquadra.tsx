import { WHY_SQUADRA } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const ICONS = ["bolt", "verified_user", "groups", "trending_up"];

export default function WhySquadra() {
  return (
    <section className="py-14 md:py-16 bg-white dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-center text-4xl lg:text-5xl font-serif italic mb-2">Why Global Leaders Choose Us</h2>
          <p className="text-center text-slate-500 text-lg mb-16 max-w-2xl mx-auto">A team that ships fast and builds for growth.</p>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_SQUADRA.map((item, idx) => (
            <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-bg-light dark:bg-bg-dark border border-white/15 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{ICONS[idx]}</span>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
