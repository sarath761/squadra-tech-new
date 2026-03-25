import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <AnimateOnScroll variant="scale-up">
          <div className="bg-primary rounded-[2.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <h2 className="text-4xl lg:text-6xl font-serif italic mb-8 relative z-10">
              Ready to See Your Website Tomorrow?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
              Free mockup. No commitment. 48 hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                href="/contact"
                className="bg-[#e2c18d] hover:bg-[#d4ae78] text-primary px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
              >
                Book Your Free Session
              </Link>
              <Link
                href="/case-studies"
                className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}