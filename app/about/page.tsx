import { WHY_PARTNER, INDUSTRIES, TEAM_COMPOSITION, COMPANY_INFO } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { metadataAbout } from "@/lib/metadata";
import Link from "next/link";

export const metadata = metadataAbout;

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Who We Are Section */}
      <section className="relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll variant="fade-down" className="mb-6 inline-flex">
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-1.5 rounded-full shadow-sm">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
              <span className="text-slate-900 dark:text-white">About Us</span>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variant="fade-right">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase">
                  Our Legacy
                </div>
                <h1 className="text-4xl md:text-5xl font-serif italic font-black leading-tight">
                  Bridging Technology & Business Outcomes
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Squadra Tech is a powerhouse of innovation, dedicated to delivering enterprise-grade solutions. Our journey began with a vision to bridge the gap between complex technology and tangible business outcomes.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  As the technology wing of Squadra Media, we provide a holistic approach to digital transformation. We don't just build software; we engineer growth engines that scale with your ambitions. Our DNA is rooted in high-performance marketing and technical excellence.
                </p>
                <div className="pt-4">
                  <a className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200 dark:bg-primary/20 hover:bg-slate-300 dark:hover:bg-primary/30 rounded-xl font-bold transition-all hover:scale-105" href="https://squadramedia.com" target="_blank" rel="noopener noreferrer">
                    <span>Visit Squadra Media</span>
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-left">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-slate-200 dark:bg-slate-800 border border-white/10 group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-primary/10 dark:bg-slate-900/20 mix-blend-overlay"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-2xl shadow-xl hidden md:block z-10 hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-white">
                    <div className="text-4xl font-bold font-serif italic mb-1 text-gradient">150+</div>
                    <div className="text-sm font-bold uppercase tracking-wider">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* 2. Industries We Serve Section */}
      <section className="py-14 md:py-16 bg-white dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-black font-serif italic">Industries We Empower</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Deep domain expertise across high-growth sectors allows us to build solutions that speak your industry's language.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry, idx) => (
              <AnimateOnScroll key={idx} variant="scale-up" delay={idx * 0.05}>
                <div className="group px-8 py-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 hover:bg-primary dark:hover:bg-primary transition-all duration-300 flex flex-col items-center gap-4 h-full justify-center shadow-sm hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{industry.emoji}</span>
                  <span className="font-bold text-sm tracking-tight group-hover:text-white transition-colors text-slate-900 dark:text-white">{industry.name}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Partner With Squadra Tech */}
      <section className="py-14 md:py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimateOnScroll variant="fade-right">
              <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-32">
                <h2 className="text-4xl font-black leading-tight font-serif italic">Why Leading Brands Partner With Us</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  We move beyond the typical vendor-client relationship, becoming a strategic extension of your internal teams.
                </p>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
              </div>
            </AnimateOnScroll>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {WHY_PARTNER.map((item, idx) => (
                <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1} className={item.title === "Uncompromising Security" ? "md:col-span-2" : ""}>
                   {/* 5 value prop cards with gold left border */}
                  <div className={`p-8 rounded-2xl bg-white dark:bg-bg-dark border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 h-full border-l-4 border-l-[#d4af37] flex flex-col ${item.title === "Uncompromising Security" ? "md:flex-row md:items-center gap-6" : ""}`}>
                    <span className={`material-symbols-outlined text-primary mb-4 ${item.title === "Uncompromising Security" ? "text-5xl mb-0" : "text-3xl"}`}>
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Team Section */}
      <section className="py-14 md:py-16 bg-white dark:bg-bg-dark border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll variant="fade-right">
             <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-200 dark:bg-slate-800">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
               <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
             </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll variant="fade-left">
            <h2 className="text-4xl lg:text-5xl font-serif italic mb-6">The Engineering Engine.</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Our multidisciplinary teams of dedicated engineers, product strategists, and designers bring robust enterprise scale to everything we build.
            </p>
            
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full text-xs font-bold shadow-sm border border-slate-200 dark:border-slate-700">Engineering: {TEAM_COMPOSITION.engineering.join(", ")}</span>
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full text-xs font-bold shadow-sm border border-slate-200 dark:border-slate-700">Design: {TEAM_COMPOSITION.design.join(", ")}</span>
                <span className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-full text-xs font-bold shadow-sm border border-slate-200 dark:border-slate-700">Leadership: {TEAM_COMPOSITION.leadership.join(", ")}</span>
              </div>
            </div>

            <h4 className="font-bold text-xl mb-4">How this team delivers:</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
                <span className="text-slate-600 dark:text-slate-400">Deep product-first mindset integrated with modern technical strategies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
                <span className="text-slate-600 dark:text-slate-400">Agile velocity backed by rigorous CI/CD and QA automation pipelines.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-500 font-bold">check_circle</span>
                <span className="text-slate-600 dark:text-slate-400">Relentless commitment to reducing technology overhead and maximizing ROI.</span>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 5. Co-Founders & Location */}
      <section className="py-14 md:py-16 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimateOnScroll variant="fade-up">
              <h2 className="text-4xl md:text-5xl font-black font-serif italic mb-4">The Minds Behind Squadra</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">Our leadership brings together decades of experience in high-scale technology and strategic marketing.</p>
            </AnimateOnScroll>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-24">
            {[{ name: "Tarush", title: "Co-Founder", desc: "Visionary strategist focused on expanding Squadra's footprint globally while maintaining core values of excellence." },
              { name: "Anu", title: "Co-Founder", desc: "Operational excellence expert driving the inner machinery of Squadra Tech, ensuring flawless project delivery." },
              { name: "Sandesh", title: "Co-Founder", desc: "The technical architect behind our most complex enterprise deployments, bridging the gap between imagination and execution." }
            ].map((founder, idx) => (
              <AnimateOnScroll key={idx} variant="fade-up" delay={idx * 0.1}>
                <div className="group">
                  <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[3/4] shadow-xl border border-white/10 dark:bg-slate-800 bg-slate-200">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973e2153b62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white group-hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-2xl font-black">{founder.name}</h3>
                      <p className="text-sm font-bold text-primary dark:text-blue-400 uppercase tracking-wider mt-1">{founder.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">{founder.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="scale-up">
            <div className="grid lg:grid-cols-2 gap-12 bg-white dark:bg-slate-800/80 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 backdrop-blur-xl">
              <div className="p-12 lg:p-16 flex flex-col justify-center space-y-8">
                <h2 className="text-4xl font-black font-serif italic text-slate-900 dark:text-white">Find Us</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-xl">location_on</span>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Headquarters</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{COMPANY_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-xl">mail</span>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">General Inquiry</h4>
                      <p className="text-slate-600 dark:text-slate-400"><a href={`mailto:${COMPANY_INFO.emailL1}`} className="hover:text-primary transition-colors">{COMPANY_INFO.emailL1}</a></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-xl">call</span>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Call Us</h4>
                      <p className="text-slate-600 dark:text-slate-400">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-[400px] relative dark:bg-slate-800 bg-slate-200">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-primary/20 pointer-events-none mix-blend-overlay"></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
