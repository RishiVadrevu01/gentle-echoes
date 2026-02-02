import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-50px" });
  const isButtonsInView = useInView(buttonsRef, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-40 bg-background relative">
      {/* Subtle vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--cream) / 0.8) 100%)',
        }}
      />

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
              Your feelings are your own.
              <br />
              Your choice is yours to make.
              <br />
              <span className="text-foreground">And whatever that choice is, I respect it.</span>
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
          <p className="font-script text-2xl md:text-3xl text-foreground">
            ~ With love and respect, always
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              variant="romantic" 
              size="lg"
              className="group"
              onClick={() => window.location.href = 'mailto:?subject=My%20Thoughts'}
            >
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Send Me Your Thoughts
            </Button>
            
            <Button 
              variant="romantic-outline" 
              size="lg"
              className="group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Read Again
            </Button>
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
    </section>
  );
};

export default ClosingSection;
