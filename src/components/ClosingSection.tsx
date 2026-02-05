import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import firstImg from "@/assets/first.jpeg";
import PromisePopup from "./PromisePopup";

declare global {
  interface Window {
    VANTA: any;
  }
}

const ClosingSection = () => {
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });
  const isButtonsInView = useInView(buttonsRef, { once: true, margin: "-50px" });
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && vantaRef.current) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 150.00,
          minWidth: 150.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xfcfbf9,
          backgroundAlpha: 1.0,
          color1: 0xff0000,
          color2: 0x00d1ff,
          colorMode: "varianceGradient",
          quantity: 3.00,
          birdSize: 2.20,
          wingSpan: 40.00,
          speedLimit: 5.00,
          separation: 20.00,
          alignment: 20.00,
          cohesion: 20.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [showPromise, setShowPromise] = useState(false);

  const handleYesClick = async () => {
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mbdaragj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          message: "She said YES! ❤️",
          timestamp: new Date().toLocaleString(),
          subject: "She said YES! ❤️"
        })
      });

      if (response.ok) {
        setStatus("success");
        setShowPromise(true);
      } else {
        setStatus("error");
        // Still show promise popup even if email fails, for user experience
        setShowPromise(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setShowPromise(true);
    }
  };

  const handleNoHover = () => {
    // Detect mobile for smaller movement range
    const isMobile = window.innerWidth < 768;
    const range = isMobile ? 150 : 400; // Smaller range for mobile

    // Generate random coordinates within a reasonable range
    const randomX = (Math.random() - 0.5) * range;
    const randomY = (Math.random() - 0.5) * range;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Vanta Birds Background Effect */}
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-80" />

      {/* Subtle overlay for light theme consistency */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-white/30"
      />

      {/* Background Image - first.jpeg */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={firstImg}
          alt="Memory"
          className="w-full max-w-2xl h-auto object-contain contrast-125"
        />
      </div>

      <div className="prose-romantic text-center relative z-10">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-script text-gold text-2xl">The Closing</span>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-6 mb-8">
            No matter what you decide,
            <br />
            <span className="text-gold">thank you</span> for being part of my story.
          </h2>

          <div className="max-w-lg mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              This website isn't a plea.
              <br />
              It's not a last attempt.
            </p>
            <p className="text-foreground/80">
              It's simply me, being honest about what I felt,
              <br />
              what I learned, and what you meant to me.
            </p>
            <p>
              I Love you for every and every
              <br />
              Your choice is yours to make.
              <br />
              <span className="text-foreground">And whatever that choice is, I respect it.</span>
              <br />
              <span className="text-foreground">BUT CHOOSE ME FOR THE ONE LAST TIME
                <br />.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isContentInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="section-divider my-16"
        />

        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isButtonsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="font-script text-2xl md:text-4xl text-foreground">
            ~ please forgive me ❤️
          </p>
          <p className="font-script text-2xl md:text-4xl text-foreground">
            ~ Will you be my valentine ❤️
          </p>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button
              variant="romantic"
              size="lg"
              className="group min-w-[140px]"
              onClick={handleYesClick}
              disabled={status === "sending" || status === "success"}
            >
              {status === "idle" && (
                <>
                  <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform fill-current" />
                  Yes
                </>
              )}
              {status === "sending" && "Sending... ❤️"}
              {status === "success" && "Sent! ❤️"}
              {status === "error" && "Try Again ❤️"}
            </Button>

            <motion.div
              animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onMouseEnter={handleNoHover}
            >
              <Button
                variant="romantic-outline"
                size="lg"
                className="group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                NO
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer signature */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isButtonsInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border/30"
        >
          <p className="text-sm text-muted-foreground/60">
            Written with care. Shared with respect.
          </p>
        </motion.footer>
      </div>

      <PromisePopup
        isOpen={showPromise}
        onClose={() => setShowPromise(false)}
      />
    </section>
  );
};

export default ClosingSection;
