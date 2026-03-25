import Carousel from "@/components/ui/Carousel";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CaseStudyPreview() {
  return (
    <section className="py-16 md:py-24 overflow-hidden" id="case-studies">
      <AnimateOnScroll variant="fade-up">
        <Carousel />
      </AnimateOnScroll>
    </section>
  );
}