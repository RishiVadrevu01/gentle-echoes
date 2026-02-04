import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import photo1 from "@/assets/vibha-photo .jpeg";
import photo2 from "@/assets/lake-view.jpeg";
import photo3 from "@/assets/hug.jpeg";

const Sparkle = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1.2, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="absolute pointer-events-none"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="hsl(var(--gold))" />
    </svg>
  </motion.div>
);

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
    content: "You are my strength and my guide whenever I feel lost, I run to you, knowing I’ll always find comfort and peace in you."
  },
  {
    title: "Your Love",
    content: "I am the most luckiest person in the world to have you in my life.YOU a bit harsh but i love it "
  },
  {
    title: "Your Cuteness",
    content: "Your smile is my favorite place, and your laugh is my favorite sound. In a world full of beautiful things 💕"
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
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1
      }}
      whileHover={{
        scale: 1.05,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 }
      }}
      className="card-romantic text-center group cursor-default shadow-sm hover:shadow-xl"
    >
      <div className="relative mb-4 inline-block">
        <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
          {card.title}
        </h3>
        <motion.div
          className="absolute -top-2 -right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ✨
        </motion.div>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        {card.content}
      </p>
    </motion.div>
  );
};

const GratitudeSection = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const quoteRef = useRef(null);
  const closingRef = useRef(null);

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-50px" });
  const isClosingInView = useInView(closingRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 relative overflow-hidden gradient-blush-lavender"
    >
      <FloatingPetals />

      {/* Magical Sticker Gallery */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sticker 1 */}
        <motion.div
          style={{ y: y1 }}
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[2%] md:left-[8%] top-[10%] md:top-[15%] w-32 md:w-48 lg:w-64 z-0 hidden md:block"
        >
          <div className="relative group">
            <div className="bg-white p-1 md:p-2 pb-4 md:pb-8 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm border-[4px] md:border-[6px] border-white -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img src={photo1} alt="Cute" className="w-full h-full object-cover filter saturate-110" />
              <div className="absolute -top-4 -right-4 md:block hidden"><Sparkle /></div>
            </div>
            <div className="absolute -bottom-2 -left-2 md:block hidden"><Sparkle delay={1} /></div>
          </div>
        </motion.div>

        {/* Sticker 2 */}
        <motion.div
          style={{ y: y2 }}
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[2%] md:right-[10%] top-[20%] md:top-[25%] w-28 md:w-40 lg:w-56 z-0 hidden md:block"
        >
          <div className="relative group">
            <div className="bg-white p-1 md:p-2 pb-4 md:pb-8 shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm border-[4px] md:border-[6px] border-white rotate-6 group-hover:rotate-2 transition-transform duration-500">
              <img src={photo2} alt="Cute" className="w-full h-full object-cover filter saturate-110" />
              <div className="absolute top-1/2 -left-6 md:block hidden"><Sparkle delay={0.5} /></div>
            </div>
          </div>
        </motion.div>

        {/* Sticker 3 - hidden on mobile, shown from lg */}
        <motion.div
          style={{ y: y3 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] md:left-[12%] bottom-[10%] md:bottom-[15%] w-40 md:w-56 lg:w-72 z-0 hidden lg:block"
        >
          <div className="relative group">
            <div className="bg-white p-1 md:p-2 pb-4 md:pb-8 shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-sm border-[4px] md:border-[8px] border-white rotate-[-2deg] group-hover:scale-105 transition-all duration-500">
              <img src={photo3} alt="Cute" className="w-full h-full object-cover filter saturate-110" />
              <div className="absolute -bottom-4 right-1/4 md:block hidden"><Sparkle delay={1.5} /></div>
            </div>
          </div>
        </motion.div>

        {/* Mobile-only Sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="md:hidden absolute -right-4 top-[5%] w-32 z-0 opacity-40 rotate-12"
        >
          <div className="bg-white p-1 pb-4 shadow-lg border-[4px] border-white">
            <img src={photo1} alt="Cute" className="w-full h-24 object-cover" />
          </div>
        </motion.div>
      </div>

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
