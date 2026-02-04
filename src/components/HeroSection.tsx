import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/vibha-photo .jpeg";
import lakeView from "@/assets/lake-view.jpeg";
import collageLake from "@/assets/collage-lake.jpeg";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("journey");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-cream-blush watercolor-overlay overflow-hidden">
      {/* Background Image with Fade */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none px-4">
        {/* collage-lake placed specifically to the left area - hidden on mobile, shown from md up */}
        <div className="hidden md:flex absolute left-[5%] top-1/2 -translate-y-1/2 w-[25%] lg:w-[30%] h-[40vh] md:h-[60vh] items-center justify-center">
          <img
            src={collageLake}
            alt="Collage Lake"
            className="max-w-full max-h-full object-contain opacity-30 md:opacity-40 saturate-125 brightness-110 rounded-xl"
          />
        </div>

        {/* vibha-photo remains centered */}
        <img
          src={heroBg}
          alt="Vibha"
          className="max-w-[90%] md:max-w-[85%] max-h-[60vh] md:max-h-[80vh] object-contain opacity-40 md:opacity-40 saturate-125 brightness-110 rounded-xl"
        />

        {/* lake-view placed specifically to the right area - hidden on mobile, shown from md up */}
        <div className="hidden md:flex absolute right-[5%] top-1/2 -translate-y-1/2 w-[25%] lg:w-[30%] h-[40vh] md:h-[60vh] items-center justify-center">
          <img
            src={lakeView}
            alt="Lake View"
            className="max-w-full max-h-full object-contain opacity-30 md:opacity-40 saturate-125 brightness-110 rounded-xl"
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

      <div className="prose-romantic text-center py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            <span className="block italic text-gold mb-2 font-script text-3xl md:text-4xl">
              This is not to force anything.
            </span>
            <span className="block">
              It's just my heart,
            </span>
            <span className="block">
              speaking honestly.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
            I'm not here to convince you of anything you don't feel.
            <br />
            <span className="text-foreground/80">
              I'm here because some things deserve to be said,
            </span>
            <br />
            even if the answer is already known.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="section-divider mt-16"
        />
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        aria-label="Scroll to continue"
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
