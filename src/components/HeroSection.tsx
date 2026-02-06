import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/vibha-photo .jpeg";
import lakeView from "@/assets/lake-view.jpeg";
import collageLake from "@/assets/collage-lake.jpeg";
import Butterfly from "./Butterfly";
import RosePetalParticles from "./RosePetalParticles";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("journey");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-16 md:pt-24 gradient-cream-blush watercolor-overlay overflow-hidden">
      <RosePetalParticles />
      {/* Side Background Images (keeping them absolute but less intrusive) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* collage-lake placed specifically to the left area - hidden on mobile, shown from md up */}
        <div className="hidden md:flex absolute left-[2%] lg:left-[5%] top-1/2 -translate-y-1/2 w-[20%] lg:w-[25%] h-[50vh] items-center justify-center">
          <img
            src={collageLake}
            alt="Collage Lake"
            className="max-w-full max-h-full object-contain opacity-20 saturate-100 rounded-xl"
          />
        </div>

        {/* lake-view placed specifically to the right area - hidden on mobile, shown from md up */}
        <div className="hidden md:flex absolute right-[2%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[20%] lg:w-[25%] h-[50vh] items-center justify-center">
          <img
            src={lakeView}
            alt="Lake View"
            className="max-w-full max-h-full object-contain opacity-20 saturate-100 rounded-xl"
          />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-peach/30 blur-3xl"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-[15%] w-48 h-48 rounded-full bg-lavender/20 blur-3xl"
          animate={{ y: [0, 15, 0], scale: [1, 0.95, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-24 h-24 rounded-full bg-gold/10 blur-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            <span className="block italic text-gold mb-2 font-script text-3xl md:text-5xl text-opacity-100" style={{ fontFamily: '' }}>
              Snupyyyy
            </span>
            <span className="block">
              It's just my heart,
            </span>
            <span className="block">
              speaking honestly.
            </span>
          </h1>
        </motion.div>

        {/* Central Image with Butterfly - Pulled into flow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative inline-block mb-12 shadow-2xl rounded-2xl"
        >
          <div className="relative group">
            <img
              src={heroBg}
              alt="Vibha"
              className="max-w-[85vw] md:max-w-md lg:max-w-lg max-h-[50vh] object-cover rounded-2xl shadow-inner saturate-[1.1] brightness-[1.05]"
            />
            {/* White frame effect */}
            <div className="absolute inset-0 border-8 border-white/40 rounded-2xl pointer-events-none" />

            {/* Butterfly - Positioned relative to the real image frame */}
            <Butterfly className="absolute -top-10 -right-10 md:-top-14 md:-right-14 z-20 pointer-events-auto filter drop-shadow-xl" />
          </div>
        </motion.div>

        {/* Personal Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl px-4"
        >
          <p className="text-lg md:text-xl text-foreground font-serif leading-relaxed italic" style={{ fontFamily: '' }}>
            "You are the most beautiful girl I've ever seen in my world, and the most special person in my life."
          </p>

          <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed text-base md:text-lg">
            <p>
              My heart feels heavy knowing I hurt you. If I could take back that moment, I would without a second thought.
            </p>
            <p>
              You are incredibly precious to me, and the thought of losing you scares me more than anything.
              Please forgive me — I truly regret it, and I’ll spend every day proving how much you mean to me.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="section-divider mt-12 w-32"
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        aria-label="Scroll to continue"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
