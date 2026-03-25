import { ACHIEVEMENTS, TECH_STACKS } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";
import ProcessSection from "./ProcessSection";

// We fallback to standard page metadata if metadataWhatWeDo isn't defined explicitly in lib
export const metadata = {
  title: "How We Do | Squadra Tech",
  description: "Delivering High-Impact Digital Engineering and Proven Methodolgy.",
};

export default function HowWeDoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <AnimateOnScroll variant="fade-down">
                {/* Breadcrumb */}
                <div className="inline-flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-sm">
                  <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                  <span className="text-slate-900 dark:text-white">How We Do</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary dark:bg-primary/20 rounded-full">
                  How We Do
                </span>
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight font-serif italic mb-6">
                  Delivering High-Impact Digital Engineering
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  At Squadra Tech, we bridge the gap between complex enterprise challenges and modern technological excellence. Our capabilities span across scalable platforms, AI automation, and resilient cloud architectures.
                </p>
              </AnimateOnScroll>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ACHIEVEMENTS.slice(0, 4).map((achievement, idx) => (
                <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
                  <div className={`relative overflow-hidden bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl flex flex-col justify-between aspect-square group ${idx % 2 !== 0 ? 'translate-y-8' : ''}`}>
                    <span className="relative z-10 material-symbols-outlined text-primary bg-primary/10 p-3 rounded-xl self-start shadow-sm border border-primary/10 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 text-3xl">
                      {achievement.icon}
                    </span>
                    <div className="relative z-10 mt-auto">
                      <p className="text-4xl font-black text-slate-900 dark:text-white mb-2 text-gradient">{achievement.metric}</p>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-wider">{achievement.label}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-white dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-serif italic text-slate-900 dark:text-white mb-6">Our Proven Methodology</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                From concept to deployment, we follow a rigorous 6-step lifecycle to ensure your project's success and long-term scalability.
              </p>
            </div>
          </AnimateOnScroll>

          <ProcessSection />
        </div>
      </section>

      {/* Tech Stacks Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Our Technology Stack</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We leverage industry-leading tools and frameworks to build high-performance software.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_STACKS.map((stack, idx) => (
              <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.1}>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg hover:border-primary/50 transition-colors h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary text-3xl p-3 bg-primary/10 rounded-xl">{stack.icon}</span>
                    <h3 className="font-bold text-xl text-slate-900 dark:text-white">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {stack.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold shadow-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll variant="scale-up">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-900/50 to-primary opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black mb-6 font-serif italic">Ready to scale your digital presence?</h2>
                <p className="text-white/80 mb-10 max-w-xl mx-auto text-lg">
                  Let's discuss how our capabilities can solve your unique business challenges and drive meaningful impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <button className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl">
                      Schedule a Consult
                    </button>
                  </Link>
                  <Link href="/case-studies">
                    <button className="bg-primary-dark/20 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
                      View Our Work
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
