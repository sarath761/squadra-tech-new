import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateOnScroll variant="scale-up">
          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <h2 className="text-4xl lg:text-6xl font-serif italic mb-8 relative z-10">Ready to See Your Website Tomorrow?</h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto relative z-10">Free mockup. No commitment. 48 hours.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full bg-[#e2c18d] hover:bg-[#d4ae78] text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                  Book Your Free Session
                </button>
              </Link>
              <Link href="/case-studies" className="w-full sm:w-auto">
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
