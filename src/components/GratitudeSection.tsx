import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface GratitudeCard {
  title: string;
  content: string;
}

const gratitudes: GratitudeCard[] = [
  {
    title: "Your Laughter",
    content: "The way you laugh at the smallest things reminded me that joy doesn't need permission."
  },
  {
    title: "Your Strength",
    content: "Watching you handle difficult moments with grace showed me what real courage looks like."
  },
  {
    title: "Your Kindness",
    content: "You made space for people in ways I'm still learning to do. Generosity came naturally to you."
  },
  {
    title: "Your Curiosity",
    content: "The questions you asked, the wonder you held—you made the ordinary feel extraordinary."
  },
  {
    title: "Your Patience",
    content: "You gave me time when I didn't deserve it. Room to stumble. Space to figure things out."
  },
  {
    title: "Your Presence",
    content: "Just being near you felt like coming home to a place I'd never been, but always belonged."
  }
];

const FloatingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            background: i % 3 === 0
              ? 'hsl(var(--peach) / 0.6)'
              : i % 3 === 1
                ? 'hsl(var(--lavender) / 0.5)'
                : 'hsl(var(--dusty-rose) / 0.5)',
          }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, Math.sin(i) * 50],
            rotate: [0, 360 * (i % 2 === 0 ? 1 : -1)],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const AppreciationCard = ({ card, index }: { card: GratitudeCard; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="card-romantic text-center group cursor-default"
    >
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
        {card.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {card.content}
      </p>
    </motion.div>
  );
};

const GratitudeSection = () => {
  const headerRef = useRef(null);
  const quoteRef = useRef(null);
  const closingRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-50px" });
  const isClosingInView = useInView(closingRef, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden gradient-blush-lavender">
      <FloatingPetals />

      <div className="prose-romantic relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-script text-gold text-2xl">Chapter Three</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            What You Mean to Me
          </h2>
        </motion.div>

        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isQuoteInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic max-w-2xl mx-auto leading-relaxed">
            "You taught me what it means to be seen."
          </blockquote>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {gratitudes.map((card, index) => (
            <AppreciationCard key={index} card={card} index={index} />
          ))}
        </div>

        <motion.div
          ref={closingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isClosingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <p className="font-serif text-xl md:text-2xl text-foreground max-w-md mx-auto">
            I don't love who you could be.
            <br />
            <span className="text-gold">I love who you are.</span>
          </p>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
};

export default GratitudeSection;
