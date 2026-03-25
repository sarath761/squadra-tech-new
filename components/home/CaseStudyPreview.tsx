import Carousel from "@/components/ui/Carousel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CaseStudyPreview() {
  return (
    <section className="py-14 md:py-16 overflow-hidden" id="case-studies">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll variant="fade-up">
          <Carousel />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
