import FAQ from "@/components/ui/FAQ";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="py-14 md:py-16 bg-white dark:bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="fade-up" delay={0.1}>
          <FAQ />
        </AnimateOnScroll>

        <AnimateOnScroll variant="fade-up" delay={0.2}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold mb-6">Still have questions?</h3>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all font-display hover:-translate-y-1"
            >
              Get in Touch <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
