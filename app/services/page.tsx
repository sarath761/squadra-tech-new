import { SERVICES } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { metadataServices } from "@/lib/metadata";
import Link from "next/link";

export const metadata = metadataServices;

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16 bg-slate-950">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <AnimateOnScroll variant="fade-down">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 font-medium bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-white">Services</span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="blur-in" delay={0.1}>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full">Expertise</span>
            <h1 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight mb-6">Our Services</h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
              Tailored technology solutions to empower your business growth and digital transformation. We bridge the gap between vision and execution.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-14 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          {SERVICES.map((service, idx) => {
            const isMaterialIcon = /^[a-z_]+$/.test(service.icon);
            
            return (
              <AnimateOnScroll key={idx} variant="fade-up" delay={(idx % 2) * 0.15} className="h-full">
                <div className="flex flex-col md:flex-row gap-6 p-8 rounded-2xl bg-white dark:bg-bg-dark border border-white/15 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-2xl">
                    {isMaterialIcon ? (
                      <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                    ) : (
                      <span>{service.icon}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-4 flex-grow">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.tags && service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 text-[10px] font-bold uppercase rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll variant="scale-up">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight font-serif italic">Have a project in mind?</h2>
            <p className="text-xl text-white/80 mb-10">Let's talk about how we can help you achieve your goals.</p>
            <Link 
              href="/contact"
              className="bg-white text-primary hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-bold transition-all inline-flex items-center gap-2 group shadow-xl"
            >
              Let's talk
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
