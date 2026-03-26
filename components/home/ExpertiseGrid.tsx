import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const EXPERTISE = [
  { icon: "settings_ethernet", title: "Web Design and Development", description: "Custom-built, mobile-first websites designed around your brand. Built with modern frameworks and AI-assisted workflows for faster turnaround and sharper quality." },
  { icon: "smartphone", title: "Landing Pages and Microsites", description: "High-converting single pages built fast, for product launches, ad campaigns and lead generation. Copy, design and build all handled by one team." },
  { icon: "hub", title: "UI/UX Design", description: "Figma-first design process. Every screen is designed, reviewed and approved before a single line of code is written. You always know what you are getting." },
  { icon: "cloud", title: "Branding and Identity", description: "Logo, colour, typography and a complete brand system built to complement your new website. Everything consistent, everything intentional." },
];

export default function ExpertiseGrid() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="expertise">
      {/* Same background family — fades out at bottom only */}
      <div className="absolute inset-0 bg-slate-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />

        <svg
          className="absolute bottom-0 left-0 w-full opacity-[0.07]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <path d="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" fill="currentColor" className="text-primary">
            <animate attributeName="d" dur="11s" repeatCount="indefinite" values="M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z;M0,200 C320,100,440,300,720,160 C1000,80,1200,300,1440,200 L1440,400 L0,400Z;M0,160 C320,300,440,100,720,200 C1000,300,1200,80,1440,160 L1440,400 L0,400Z" />
          </path>
          <path d="M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z" fill="currentColor" className="text-indigo-500">
            <animate attributeName="d" dur="13s" repeatCount="indefinite" values="M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z;M0,320 C400,350,600,180,840,320 C1080,350,1300,180,1440,320 L1440,400 L0,400Z;M0,280 C400,180,600,350,840,280 C1080,180,1300,320,1440,280 L1440,400 L0,400Z" />
          </path>
        </svg>

        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/15 blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[130px] animate-blob animation-delay-4000" />

        {/* No top fade — seamless from AISwitch */}
        {/* Bottom fade — blends into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white tracking-tight leading-[0.9] text-center mb-4">
            Our Expertise
          </h2>
          <p className="text-base text-slate-300 mb-10 leading-relaxed text-center font-display">
            Everything you need to build, launch and grow online.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERTISE.map((item, idx) => (
            <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
              <div className="relative p-7 rounded-2xl h-full backdrop-blur-md bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 group overflow-hidden liquid-glass">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.04) 50%, transparent 60%)" }} />
                <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl text-primary group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                </div>
                <h5 className="font-bold text-md font-display tracking-tight text-white mb-2">{item.title}</h5>
                <p className="text-slate-300 text-sm leading-relaxed font-display font-normal">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}