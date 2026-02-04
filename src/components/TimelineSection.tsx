import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import hugImg from "@/assets/hug.jpeg";
import lake2Img from "@/assets/lake2.jpeg";
import kissImg from "@/assets/kiss.jpeg";
import funnyImg from "@/assets/funny.jpeg";

interface Memory {
  season: string;
  title: string;
  description: string;
  emotionalNote: string;
  icon: string;
  image?: string;
}

const memories: Memory[] = [
  {
    season: "Spring 2023",
    icon: "🌸",
    title: "The First Conversation",
    description: "You laughed at something I said—not because it was particularly funny, but because you were generous with your joy. I remember thinking how rare that was.",
    emotionalNote: "That's when I started paying attention.",
    image: hugImg
  },
  {
    season: "Summer 2023",
    icon: "☀️",
    title: "The Long Walk",
    description: "We walked for hours without noticing time. The city felt different with you—smaller, kinder, more beautiful. Every street corner held a conversation waiting to happen.",
    emotionalNote: "I learned that home isn't a place.",
    image: lake2Img
  },
  {
    season: "Autumn 2023",
    icon: "🍂",
    title: "The Quiet Moment",
    description: "We sat in comfortable silence, and I realized I didn't need to fill every gap with words. Being present with you was enough. More than enough.",
    emotionalNote: "Silence became a language.",
    image: kissImg
  },
  {
    season: "Winter 2024",
    icon: "❄️",
    title: "The Difficult Truth",
    description: "Things got harder. We stumbled. I made mistakes I'm still learning from. But even in the struggle, I saw your strength—and my own need to grow.",
    emotionalNote: "Love doesn't mean perfection.",
    image: funnyImg
  },
];

const TimelineCard = ({ memory, index }: { memory: Memory; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-center w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-12 md:gap-0 mb-16 md:mb-32`}
    >
      {/* Timeline dot - centered on MD+ */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-[0.5px] top-1/2 -translate-y-1/2 z-20">
        <div className="w-4 h-4 rounded-full border-4 border-background bg-lavender/60 shadow-sm" />
      </div>

      {/* Image container */}
      <div className={`w-full md:w-1/2 flex items-center ${isEven ? 'md:justify-end md:pr-8' : 'md:justify-start md:pl-8'} justify-center px-4`}>
        {memory.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[300px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover saturate-[0.8] contrast-[1.1] opacity-40 hover:opacity-100 hover:saturate-100 transition-all duration-700"
            />
          </motion.div>
        )}
      </div>

      {/* Card container */}
      <div className={`w-full md:w-1/2 flex items-center ${isEven ? 'md:justify-start md:pl-8' : 'md:justify-end md:pr-8'} justify-center px-4`}>
        <div className="w-full max-w-[400px] bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-border/5">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">{memory.icon}</span>
            <span className="font-script text-2xl text-gold/80">{memory.season}</span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
            "{memory.title}"
          </h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {memory.description}
          </p>

          <div className="border-l-2 border-gold/30 pl-6">
            <p className="text-foreground/70 italic font-serif text-lg">
              → {memory.emotionalNote}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
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
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xfcfbf9,
          backgroundAlpha: 1.0,
          color1: 0xff0000,
          color2: 0x00d1ff,
          colorMode: "varianceGradient",
          quantity: 3.00,
          birdSize: 1.00,
          wingSpan: 30.00,
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

  return (
    <section id="journey" className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Vanta Birds Background Effect */}
      <div ref={vantaRef} className="absolute inset-0 z-0 opacity-80" />

      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <span className="font-script text-gold text-3xl">Chapter One</span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mt-4 mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            The moments that shaped us—each one a small miracle I carry with me.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - exactly centered and more visible */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/40 -translate-x-1/2 z-0" />

          <div className="flex flex-col">
            {memories.map((memory, index) => (
              <TimelineCard key={index} memory={memory} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
};

export default TimelineSection;
