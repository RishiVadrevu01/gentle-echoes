import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import ReflectionSection from "@/components/ReflectionSection";
import GratitudeSection from "@/components/GratitudeSection";
import ClosingSection from "@/components/ClosingSection";
import LetterPopup from "@/components/LetterPopup";
import { motion } from "framer-motion";

const Index = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <main className="overflow-x-hidden">
      {!showMain && <LetterPopup onClose={() => setShowMain(true)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showMain ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <TimelineSection />
        <ReflectionSection />
        <GratitudeSection />
        <ClosingSection />
      </motion.div>
    </main>
  );
};

export default Index;
