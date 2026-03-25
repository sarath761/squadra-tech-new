import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const EXPERTISE = [
  { icon: "settings_ethernet", title: "Web Design and Development", description: "Custom-built, mobile-first websites designed around your brand. Built with modern frameworks and AI-assisted workflows for faster turnaround and sharper quality." },
  { icon: "smartphone", title: "Landing Pages and Microsites", description: "High-converting single pages built fast, for product launches, ad campaigns and lead generation. Copy, design and build all handled by one team." },
  { icon: "hub", title: "UI/UX Design", description: "Figma-first design process. Every screen is designed, reviewed and approved before a single line of code is written. You always know what you are getting." },
  { icon: "cloud", title: "Branding and Identity", description: "Logo, colour, typography and a complete brand system built to complement your new website. Everything consistent, everything intentional." },
];

export default function ExpertiseGrid() {
  return (
    <section className="py-14 md:py-16" id="expertise">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-4xl lg:text-5xl font-serif italic mb-2 text-center">Our Expertise.</h2>
          <p className="text-slate-500 text-lg mb-12 leading-relaxed text-center max-w-2xl mx-auto">Everything you need to build, launch and grow online.</p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE.map((item, idx) => (
            <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
              <div className="p-8 rounded-2xl bg-bg-light dark:bg-bg-dark border border-white/15 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">{item.icon}</span>
                <h5 className="font-bold text-lg mb-3">{item.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
