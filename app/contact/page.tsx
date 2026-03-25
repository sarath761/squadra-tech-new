import LeadForm from "@/components/ui/LeadForm";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Contact Us | Squadra Tech",
  description: "Get in touch with us to start building your next digital project. Free technology assessment available.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 md:py-32 bg-slate-50 dark:bg-bg-dark overflow-hidden flex-grow">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <AnimateOnScroll variant="fade-down">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20 shadow-sm">
                Get Started
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-6 font-serif italic">
                Let's Build Together
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                Tell us about your project and we will get back within 24 hours. Free technology assessment. No commitment.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Contact Form Section (60%) */}
            <div className="w-full lg:w-3/5">
              <AnimateOnScroll variant="fade-right" delay={0.1}>
                <div className="bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
                  <LeadForm />
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Info Section (40%) */}
            <div className="w-full lg:w-2/5 space-y-10 lg:sticky lg:top-32">
              <AnimateOnScroll variant="fade-left" delay={0.2}>
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Our Office</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">mail</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Email Us</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed flex flex-col gap-1">
                        <a href={`mailto:${COMPANY_INFO.emailL1}`} className="hover:text-primary dark:hover:text-blue-400 transition-colors">{COMPANY_INFO.emailL1}</a>
                        <a href={`mailto:${COMPANY_INFO.emailL2}`} className="hover:text-primary dark:hover:text-blue-400 transition-colors">{COMPANY_INFO.emailL2}</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">call</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">Call Us</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        <a href={`tel:${COMPANY_INFO.phone.replace(/\\s/g, '')}`} className="hover:text-primary dark:hover:text-blue-400 transition-colors">{COMPANY_INFO.phone}</a>
                        <br />
                        <span className="text-sm opacity-80 mt-1 inline-block">Mon-Fri, 9am - 6pm IST</span>
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll variant="scale-up" delay={0.3}>
                <div className="rounded-3xl overflow-hidden h-64 border border-slate-200 dark:border-white/10 shadow-xl group relative bg-slate-200 dark:bg-slate-800">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"></div>
                     <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary dark:text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 group-hover:-translate-y-2 transition-transform duration-300 border border-slate-200 dark:border-white/10">
                      <span className="material-symbols-outlined animate-bounce text-primary">location_on</span>
                      <span className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">Find Us</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
