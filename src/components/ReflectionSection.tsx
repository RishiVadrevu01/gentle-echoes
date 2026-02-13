import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { MessageCircle, Sprout, Handshake, Sparkles } from "lucide-react";
import collage from "@/assets/collage.jpeg";
import cute from "@/assets/cute .jpeg";
import sight from "@/assets/sight.jpeg";
import star from "@/assets/star.jpeg";
import sweater from "@/assets/sweater .jpeg";
import metro2 from "@/assets/metro2.jpeg";
import vibha2 from "@/assets/vibha2.jpeg";
import Snowfall from "./Snowfall";
import Butterfly from "./Butterfly";

interface Reflection {
  icon: React.ElementType;
  title: string;
  content: string;
}

const reflections: Reflection[] = [
  {
    icon: MessageCircle,
    title: "Where I Failed",
    content: "I failed myself by not controlling my mindset and by not honoring the responsibilities I should have carried as your boyfriend. I treated things too casually, without realizing how serious they truly were — until reality showed me the consequences of my actions."
  },
  {
    icon: Sprout,
    title: "What really matters ",
    content: "Now that I’ve lost your trust, nothing in this world feels more important than earning it back. I am ready to go to any extent to rebuild what I broke — to change my habits, to change my world, to become a better man — because you truly matter to me more than anything"
  },
  {
    icon: Handshake,
    title: "A Promise of Love",
    content: "I promise to be loyal — not just in words, but in every action, and I will rebuild your trust with my actions, not just my words. I will become the person you always wanted me to be — not as a sacrifice, but because my love for you is real, and you are worth every change. ❤️"
  },
  {
    icon: Sparkles,
    title: "❤️ One Last Chance",
    content: "I know I don’t deserve it, but I’m asking you for one last chance. Let me prove my love through my actions, rebuild the trust I broke, and become the person you deserve. Please don’t give up on us — you mean everything to me. ❤️"
  }
];

const ReflectionCard = ({ reflection, index }: { reflection: Reflection; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = reflection.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card-romantic"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blush flex items-center justify-center">
          <Icon className="w-5 h-5 text-foreground/70" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl text-foreground mb-3">
            {reflection.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {reflection.content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ReflectionSection = () => {
  const headerRef = useRef(null);
  const closingRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isClosingInView = useInView(closingRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isHeaderInView) {
      import("@/lib/analytics").then(({ trackSectionEntry }) => {
        trackSectionEntry("Reflection Section (Chapter 2)");
      });
    }
  }, [isHeaderInView]);

  return (
    <section className="py-24 md:py-32 bg-blush/30 relative">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Snowfall Effect */}
      <Snowfall />

      {/* Flying Butterflies */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        <motion.div
          className="absolute top-[15%] -left-20"
          animate={{
            x: ["-10vw", "100vw"],
            y: [0, -40, 0, 20],
          }}
          style={{ rotate: 90 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            delay: 0,
            ease: "linear",
          }}
        >
          <Butterfly className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute top-[45%] -right-20"
          animate={{
            x: ["10vw", "-100vw"],
            y: [0, 60, 0, -30],
          }}
          style={{ rotate: -90 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            delay: 5,
            ease: "linear",
          }}
        >
          <Butterfly className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] -left-20"
          animate={{
            x: ["-10vw", "100vw"],
            y: [0, -30, 0, 30],
          }}
          style={{ rotate: 90 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            delay: 12,
            ease: "linear",
          }}
        >
          <Butterfly className="w-14 h-14" />
        </motion.div>
      </div>

      <div className="prose-romantic relative z-10" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-script text-gold text-2xl" style={{ fontFamily: '' }}>Chapter Two</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
            What I've Learned About Myself
          </h2>
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-lg leading-relaxed">
            I've spent time reflecting on where I went wrong.
            <br />
            Not to punish myself, but to grow from it.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto px-4">
          {/* Polaroid 1 - Top Right (Star) */}
          <motion.div
            initial={{ opacity: 0, rotate: 10, x: 50 }}
            whileInView={{ opacity: 1, rotate: -5, x: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block absolute -right-32 xl:-right-64 top-0 z-0"
          >
            <div className="bg-white p-3 pb-8 shadow-xl border border-border/10 rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={star}
                alt="Star"
                className="w-32 xl:w-48 h-40 xl:h-56 object-cover filter saturate-110"
              />
              <p className="font-script text-gold text-center mt-2 text-lg" style={{ fontFamily: '' }}>The brightest</p>
            </div>
          </motion.div>

          {/* Polaroid 2 - Middle Left (Cute) - visible from lg */}
          <motion.div
            initial={{ opacity: 0, rotate: -15, x: -50 }}
            whileInView={{ opacity: 1, rotate: 8, x: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block absolute -left-40 xl:-left-72 top-[10%] z-0"
          >
            <div className="bg-white p-3 pb-8 shadow-xl border border-border/10 rotate-[8deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={cute}
                alt="Cute"
                className="w-32 xl:w-44 h-32 xl:h-44 object-cover filter saturate-125 brightness-105"
              />
              <p className="font-script text-gold text-center mt-2 text-lg" style={{ fontFamily: '' }}>Pure joy</p>
            </div>
          </motion.div>

          {/* Polaroid 3 - Middle Right (Sweater) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden xl:block absolute -right-80 top-1/2 z-0"
          >
            <div className="bg-white p-3 pb-12 shadow-xl border border-border/10 rotate-[-2deg] hover:rotate-2 transition-transform duration-500">
              <img
                src={sweater}
                alt="Sweater"
                className="w-52 h-64 object-cover filter saturate-115"
              />
              <p className="font-script text-gold text-center mt-4 text-xl" style={{ fontFamily: '' }}>Warmth</p>
            </div>
          </motion.div>

          {/* Polaroid 4 - Bottom Left (Sight) */}
          <motion.div
            initial={{ opacity: 0, rotate: -20, x: -50 }}
            whileInView={{ opacity: 1, rotate: -12, x: -40 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden xl:block absolute -left-80 bottom-1/4 z-0"
          >
            <div className="bg-white p-3 pb-12 shadow-xl border border-border/10 rotate-[-12deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={sight}
                alt="Sight"
                className="w-56 h-40 object-cover filter saturate-110 contrast-110"
              />
              <p className="font-script text-gold text-center mt-4 text-xl" style={{ fontFamily: '' }}>Looking back</p>
            </div>
          </motion.div>

          {/* Polaroid 5 - Custom Addition (Metro) */}
          <motion.div
            initial={{ opacity: 0, rotate: 15, x: 50 }}
            whileInView={{ opacity: 1, rotate: 10, x: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:block absolute -right-40 xl:-right-80 bottom-[-16rem] z-0"
          >
            <div className="bg-white p-3 pb-10 shadow-xl border border-border/10 rotate-[10deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={metro2}
                alt="Metro"
                className="w-40 xl:w-56 h-48 xl:h-64 object-cover filter saturate-110"
              />
              <p className="font-script text-gold text-center mt-3 text-lg" style={{ fontFamily: '' }}>Moments in motion</p>
            </div>
          </motion.div>

          {/* Polaroid 6 - Custom Addition (Vibha) */}
          <motion.div
            initial={{ opacity: 0, rotate: -10, y: 50 }}
            whileInView={{ opacity: 1, rotate: -5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden xl:block absolute -left-40 xl:-left-80 bottom-[-8rem] z-0"
          >
            <div className="bg-white p-3 pb-10 shadow-xl border border-border/10 rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
              <img
                src={vibha2}
                alt="Vibha"
                className="w-48 h-60 object-cover filter saturate-110"
              />
              <p className="font-script text-gold text-center mt-3 text-lg" style={{ fontFamily: '' }}>Your light</p>
            </div>
          </motion.div>

          {/* Mobile Decorative Image - visible only on small screens */}
          <div className="lg:hidden flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-2 pb-6 shadow-lg border border-border/5 rotate-2 max-w-[200px]"
            >
              <img src={star} alt="Star" className="w-full h-40 object-cover" />
              <p className="font-script text-gold text-center mt-2" style={{ fontFamily: '' }}>Reflection</p>
            </motion.div>
          </div>

          <div className="grid gap-6 md:gap-8 relative z-10">
            {reflections.map((reflection, index) => (
              <ReflectionCard key={index} reflection={reflection} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          ref={closingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isClosingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="font-serif text-xl md:text-2xl text-foreground font-bold italic max-w-lg mx-auto" style={{ fontFamily: '' }}>
            "“Even if I had a thousand lives, I would search every world just to find you again — because loving you is not just what my heart does, it is the reason it beats.” ❤️
            <br />
            You deserved better, I'm learning to be better."
          </p>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
};

export default ReflectionSection;
