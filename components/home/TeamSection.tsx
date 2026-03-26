import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="team">
      {/* Background that blends with adjacent sections */}
      <div className="absolute inset-0 bg-slate-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-indigo-500/10" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #2a4a7e 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute top-[20%] right-[-5%] w-72 h-72 rounded-full bg-primary/15 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[110px] animate-blob" />

        {/* Top fade — blends from previous section */}
        <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#14181e] to-transparent z-[2]" />
        {/* Bottom fade — blends into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#14181e] to-transparent z-[2]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <AnimateOnScroll variant="fade-right">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white text-center mb-4">
              The People Behind Your Website
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Squadra is a team of 100+ designers, developers, strategists and
              creators based in Bangalore. We have been building for brands
              across India and UAE for over five years. What makes us
              different is how we work. AI handles the heavy lifting so our team
              can focus on what actually matters: craft, strategy and results.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">
                Product Owners &amp; Tech Leads
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">
                60+ Full-stack Engineers
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">
                DevOps &amp; SRE Team
              </span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">
                QA &amp; Security Team
              </span>
            </div>

            <div className="relative max-w-sm">
              <div className="bg-primary p-5 rounded-2xl text-white shadow-xl relative">
                <p className="italic mb-2 text-sm leading-relaxed">
                  &quot;Squadra Tech blends technology with branding and growth to
                  deliver a true end-to-end partner experience.&quot;
                </p>
                <p className="font-bold text-xs">
                  —Anu, Tarush &amp; Sandesh - Co-Founders
                </p>
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-primary" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Image with faded edges — no box, no border, blends into background */}
        <AnimateOnScroll variant="fade-left" delay={0.2} className="group">
          <div className="relative">
            <img
              src="/images/WHO WE ARE.jpg"
              alt="Squadra Tech team and capabilities"
              className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000"
              style={{
                maskImage: "radial-gradient(ellipse 85% 80% at center, black 50%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 80% at center, black 50%, transparent 100%)",
              }}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}