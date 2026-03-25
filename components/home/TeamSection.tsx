import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TeamSection() {
  return (
    <section className="py-14 md:py-16" id="team">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimateOnScroll variant="fade-right">
            <h2 className="text-4xl lg:text-5xl font-serif italic mb-6">The People Behind Your Website.</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Squadra is a team of 100+ designers, developers, strategists and creatives based in Bangalore. We have been building for brands across India and the UAE for over five years.
              What makes us different is how we work. AI handles the heavy lifting so our team can focus on what actually matters: craft, strategy and results.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">Product Owners & Tech Leads</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">60+ Full-stack Engineers</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">DevOps & SRE Team</span>
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-bold">QA & Security Team</span>
            </div>
          </AnimateOnScroll>
        </div>
        
        <AnimateOnScroll variant="fade-left" delay={0.2} className="relative group">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 rounded-2xl bg-slate-800"
            ></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl text-white shadow-xl max-w-xs z-10">
            <p className="italic mb-2">"Squadra Tech blends technology with branding and growth to deliver a true end-to-end partner experience."</p>
            <p className="font-bold text-sm">—Anu, Tarush & Sandesh - Co-Founders</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
