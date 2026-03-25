import FAQ from "@/components/ui/FAQ";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={0.1}>
          <FAQ />
        </AnimateOnScroll>

        {/* Design Change #5: CTA after FAQ */}
        <AnimateOnScroll variant="fade-up" delay={0.2}>
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-500 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
            >
              Get in Touch →
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}