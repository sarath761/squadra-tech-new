import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import LeadForm from "@/components/ui/LeadForm";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32">
      {/* Animated Background Blobs — matches HTML exactly */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/30 blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7">
          <AnimateOnScroll variant="fade-down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-white/50 text-white text-md font-bold mb-6">
              <span className="material-symbols-outlined text-md text-white">bolt</span>
              AI-Powered Web Design Agency
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="blur-in" delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
              See Your Website Mockup In 48 Hours.{" "}
              <span className="text-primary not-italic font-display font-black block lg:inline">
                What&apos;s Next?
              </span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.2}>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed">
              Squadra builds high-converting websites for startups, e-com brands,
              and growing businesses, powered by AI and delivered faster than any
              traditional agency.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-up" delay={0.3}>
            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
              <span className="material-symbols-outlined text-primary">schedule</span>
              We take on a limited number of projects each month. Fill in the form to secure your spot.
            </div>
          </AnimateOnScroll>
        </div>

        {/* Right Column — Form */}
        <div className="lg:col-span-5 relative">
          <AnimateOnScroll variant="fade-left" delay={0.3}>
            <div className="liquid-glass p-8 rounded-2xl shadow-2xl relative z-10">
              <h2 className="text-2xl font-bold font-display tracking-tight mb-2">Get a Free Technology Assessment</h2>
              <p className="text-sm text-slate-500 mb-6">
                Fill in your details and we will be in touch within 24 hours.
              </p>
              <LeadForm />
              <p className="text-center text-xs text-slate-500 mt-4">
                🔒 No spam. No commitment. Just a conversation.
              </p>
            </div>
          </AnimateOnScroll>
          {/* Glow blob behind form — from HTML reference */}
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[120px] -z-10" />
        </div>
      </div>
    </section>
  );
}