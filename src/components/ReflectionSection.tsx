import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Sprout, Handshake, Sparkles } from "lucide-react";
import collage from "@/assets/collage.jpeg";
import cute from "@/assets/cute .jpeg";
import sight from "@/assets/sight.jpeg";
import star from "@/assets/star.jpeg";
import sweater from "@/assets/sweater .jpeg";

interface Reflection {
  icon: React.ElementType;
  title: string;
  content: string;
}

const reflections: Reflection[] = [
  {
    icon: MessageCircle,
    title: "Where I Failed to Communicate",
    content: "I held back when I should have spoken up. I assumed you understood what I felt, when I should have told you. Silence isn't always peace—sometimes it's distance I created without meaning to."
  },
  {
    icon: Sprout,
    title: "Patterns I'm Working to Change",
    content: "I've noticed my tendency to retreat when things get hard. To protect myself in ways that left you feeling alone. I'm learning that vulnerability isn't weakness—it's the only path to real connection."
  },
  {
    icon: Handshake,
    title: "What I Should Have Done Differently",
    content: "I should have asked more questions. Listened more deeply. Made you feel as important as you truly were to me. Your feelings deserved more space than I gave them."
  },
  {
    icon: Sparkles,
    title: "Who I'm Becoming",
    content: "Someone who shows up, even when it's uncomfortable. Someone who values honesty over comfort. Someone who understands that love is a verb—it requires action, not just feeling."
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
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
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

  return (
    <section className="py-24 md:py-32 bg-blush/30 relative">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="prose-romantic relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-script text-gold text-2xl">Chapter Two</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4">
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
              <p className="font-script text-gold text-center mt-2 text-lg">The brightest</p>
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
              <p className="font-script text-gold text-center mt-2 text-lg">Pure joy</p>
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
              <p className="font-script text-gold text-center mt-4 text-xl">Warmth</p>
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
              <p className="font-script text-gold text-center mt-4 text-xl">Looking back</p>
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
              <p className="font-script text-gold text-center mt-2">Reflection</p>
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
          <p className="font-serif text-xl md:text-2xl text-foreground/80 italic max-w-lg mx-auto">
            "You deserved better.
            <br />
            I'm learning to be better."
          </p>
        </motion.div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  );
};

export default ReflectionSection;
