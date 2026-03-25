import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import CaseStudyPreview from "@/components/home/CaseStudyPreview";
import WhySquadra from "@/components/home/WhySquadra";
import TeamSection from "@/components/home/TeamSection";
import AISwitch from "@/components/home/AISwitch";
import ExpertiseGrid from "@/components/home/ExpertiseGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import FinalCTA from "@/components/home/FinalCTA";
import FAQSection from "@/components/home/FAQSection";
import { metadataHome } from "@/lib/metadata";

export const metadata = metadataHome;

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrustBar />
      <CaseStudyPreview />
      <WhySquadra />
      <TeamSection />
      <AISwitch />
      <ExpertiseGrid />
      <ProcessSteps />
      <FinalCTA />
      <FAQSection />
    </div>
  );
}
