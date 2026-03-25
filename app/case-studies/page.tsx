import { CASE_STUDIES } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { metadataCaseStudies } from "@/lib/metadata";
import Link from "next/link";

export const metadata = metadataCaseStudies;

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
          <AnimateOnScroll variant="fade-down">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-sm">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-slate-900 dark:text-white">Case Studies</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="blur-in" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Our Portfolio
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Case Studies</h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
              Exploring how we help industry leaders and innovative startups leverage technology to scale, optimize, and dominate their markets.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24 md:space-y-32">
        {CASE_STUDIES.map((study, idx) => {
          const isFullFormat = idx < 3;
          const isEven = idx % 2 !== 0; // idx 1 is visually the 2nd card (even card)

          return (
            <AnimateOnScroll key={idx} variant={isEven ? "fade-left" : "fade-right"}>
              <article className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 group`}>
                <div className="w-full lg:w-1/2 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[16/10] relative shadow-2xl">
                  {/* Provide a solid fallback bg color and a real image transition block */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 bg-slate-800"
                    style={{ backgroundImage: `url('${study.image}')` }}
                  ></div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/20 text-primary dark:text-blue-300 text-xs font-bold rounded-full">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full">
                      {study.link}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold">{study.title}</h2>
                  
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg">
                    {isFullFormat ? (
                      <>
                        <p><strong className="text-slate-900 dark:text-slate-100 block mb-1">Challenge:</strong> {study.challenge}</p>
                        <p><strong className="text-slate-900 dark:text-slate-100 block mb-1">Solution:</strong> {study.solution}</p>
                        <p><strong className="text-slate-900 dark:text-slate-100 block mb-1">Impact:</strong> {study.impact}</p>
                      </>
                    ) : (
                      <p>{study.description}</p>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-[#d4af37] text-2xl font-bold">{study.metric}</div>
                    <p className="text-xs text-slate-500 uppercase font-semibold">{study.metricLabel}</p>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          );
        })}
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll variant="scale-up">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Ready to build something amazing?</h2>
            <p className="text-xl text-white/80 mb-10">Let's talk about your next project and how we can achieve these results.</p>
            <Link 
              href="/contact"
              className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-bold transition-all inline-flex items-center gap-2 group shadow-xl"
            >
              Start Your Project
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
