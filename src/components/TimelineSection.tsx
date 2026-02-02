import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Memory {
  season: string;
  title: string;
  description: string;
  emotionalNote: string;
  icon: string;
}

const memories: Memory[] = [
  {
    season: "Spring 2023",
    icon: "🌸",
    title: "The First Conversation",
    description: "You laughed at something I said—not because it was particularly funny, but because you were generous with your joy. I remember thinking how rare that was.",
    emotionalNote: "That's when I started paying attention."
  },
  {
    season: "Summer 2023",
    icon: "☀️",
    title: "The Long Walk",
    description: "We walked for hours without noticing time. The city felt different with you—smaller, kinder, more beautiful. Every street corner held a conversation waiting to happen.",
    emotionalNote: "I learned that home isn't a place."
  },
  {
    season: "Autumn 2023",
    icon: "🍂",
    title: "The Quiet Moment",
    description: "We sat in comfortable silence, and I realized I didn't need to fill every gap with words. Being present with you was enough. More than enough.",
    emotionalNote: "Silence became a language."
  },
  {
    season: "Winter 2024",
    icon: "❄️",
    title: "The Difficult Truth",
    description: "Things got harder. We stumbled. I made mistakes I'm still learning from. But even in the struggle, I saw your strength—and my own need to grow.",
    emotionalNote: "Love doesn't mean perfection."
  },
];

const TimelineCard = ({ memory, index }: { memory: Memory; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <div className="timeline-dot" />
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-1/2" />

      {/* Card */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="card-romantic-hover">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{memory.icon}</span>
            <span className="font-script text-xl text-gold">{memory.season}</span>
          </div>
          
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            "{memory.title}"
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            {memory.description}
          </p>
          
          <div className="border-l-2 border-gold/40 pl-4">
            <p className="text-foreground/80 italic font-serif">
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

  return (
    <section id="journey" className="py-24 md:py-32 bg-background relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blush/30 to-transparent pointer-events-none" />

      <div className="prose-romantic relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-script text-gold text-2xl">Chapter One</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            The moments that shaped us—each one a small miracle I carry with me.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dusty-rose via-lavender to-dusty-rose" />

          <div className="space-y-12 md:space-y-20">
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
