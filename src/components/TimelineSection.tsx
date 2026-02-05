import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import handImg from "@/assets/hand.jpeg";
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
    season: "Collage 2022",
    icon: "🌸",
    title: "The First Conversation",
    description: "I never knew that one day you would become my whole world. Every man wishes for his life partner to be his best friend, but God gifted me something even more beautiful — you became my best friend first, and then my world.",
    emotionalNote: "I still remember those moments… blushing from afar just by seeing you, while you had no idea. The rush to talk to you, the excitement to see you, and the quiet dream of spending my entire life with you — it has all been you, always you. ❤️",
    image: handImg
  },
  {
    season: " Finally you are mine",
    icon: "☀️",
    title: "LOVE",
    description: "The moment I decided you were my world, I promised myself I would give you everything I have, and everything I am. I love the way you scold me, the way you guide me, and the gentle way you care for me — every little thing about you makes my heart feel at home.",
    emotionalNote: "The fear of losing you, or wondering if I could truly take care of you, sometimes weighs on my heart. But the moment I see you, every fear fades away. In your presence, all I feel is love — and a quiet promise within me that I would do anything, everything, just to see you happy. ❤️",
    image: lake2Img
  },
  {
    season: "Hope",
    icon: "🍂",
    title: "The Quiet Moment",
    description: " I still remember praying, hoping that somehow you would step into my life, dreaming of a future with you even before you were mine. And then came that cold winter night, as we were crossing the road… when you proposed. In that moment, not even the richest person alive could have felt as happy as I did",
    emotionalNote: "Your voice echoing, “She is mine,” still plays in my heart — it froze time for me. All I knew in that second was that I belonged to you, and you belonged to me.",
    image: kissImg
  },
  {
    season: "Trust",
    icon: "❄️",
    title: "The Difficult Truth",
    description: " Your happiness became my happiness, until I realized that in this entire world, it was your presence alone that truly mattered to me. I started dreaming of a lifetime with you — a loving home, children’s laughter, your cat with my dog, our little fights, our deep love… everything about “us” felt beautifully real.\n\nI know I made mistakes, even after the chances you gave me that I didn’t deserve. But every dream I ever saw with you was honest, loyal, and pure. I cried for that dream, fought for it, and held it close to my heart — yet one flaw of mine slowly broke what I was trying so hard to build. ",
    emotionalNote: "every mistake carries a lesson, and the fear of losing you has changed me. It has given me a new heart, a new mindset, and a stronger understanding of love. I want to rebuild what I broke — and this time, not just my dream, but the person I am will be more loyal, more patient, and more worthy of you.So I ask you, from the deepest place in my heart… give me one more chance. Let me prove that our love is stronger than my past, and that I can become the safe, forever kind of love you deserve..",
    image: funnyImg
  },
];

const TimelineCard = ({ memory, index }: { memory: Memory; index: number }) => {
  const ref = useRef(null);
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
      <div className={`w-full md:w-1/2 flex items-center ${isEven ? 'md:justify-end md:pr-12' : 'md:justify-start md:pl-12'} justify-center px-4`}>
        {memory.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
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
      <div className={`w-full md:w-1/2 flex items-center ${isEven ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'} justify-center px-4`}>
        <div className="w-full max-w-[600px] bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-border/10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">{memory.icon}</span>
            <span className="font-script text-2xl text-gold/80">{memory.season}</span>
          </div>

          <h3 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
            "{memory.title}"
          </h3>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
            {memory.description}
          </p>

          <div className="border-l-2 border-gold/30 pl-6">
            <p className="text-foreground/70 italic font-serif text-xl">
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
