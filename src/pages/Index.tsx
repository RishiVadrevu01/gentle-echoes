import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import ReflectionSection from "@/components/ReflectionSection";
import GratitudeSection from "@/components/GratitudeSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TimelineSection />
      <ReflectionSection />
      <GratitudeSection />
      <ClosingSection />
    </main>
  );
};

export default Index;
