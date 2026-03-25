import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function TeamSection() {
  return (
    <section className="py-16 md:py-24" id="team">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <AnimateOnScroll variant="fade-right">
            <h2 className="text-4xl font-serif italic mb-6">
              The People Behind Your Website.
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed">
              Squadra is a team of 100+ designers, developers, strategists and
              creatives based in Bangalore. We have been building for brands
              across India and the UAE for over five years. What makes us
              different is how we work. AI handles the heavy lifting so our team
              can focus on what actually matters: craft, strategy and results.
            </p>
            <div className="flex flex-wrap gap-3">
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
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll variant="fade-left" delay={0.2} className="relative group">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            {/* Replace the image path below when actual asset is available */}
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000 rounded-2xl bg-slate-800"
              style={{ backgroundImage: "url('/images/team/who-we-are.png')" }}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl text-white shadow-xl max-w-xs">
            <p className="italic mb-2">
              &quot;Squadra Tech blends technology with branding and growth to
              deliver a true end-to-end partner experience.&quot;
            </p>
            <p className="font-bold text-sm">
              —Anu, Tarush &amp; Sandesh - Co-Founders
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}