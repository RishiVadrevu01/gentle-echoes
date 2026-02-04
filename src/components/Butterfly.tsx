import { motion } from "framer-motion";

const Butterfly = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <motion.svg
                width="80"
                height="80"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: -15, scale: 0 }}
                animate={{
                    rotate: [-15, -5, -15],
                    scale: 1,
                    y: [0, -15, 0],
                    x: [0, 5, 0]
                }}
                transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 1 }
                }}
                className="drop-shadow-[0_5px_15px_rgba(255,105,180,0.4)]"
            >
                <defs>
                    <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFB6C1" />
                        <stop offset="50%" stopColor="#FF69B4" />
                        <stop offset="100%" stopColor="#DA70D6" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Left Wing */}
                <motion.path
                    d="M50 60 C30 30 5 40 10 65 C15 90 45 85 50 70"
                    fill="url(#wingGradient)"
                    fillOpacity="0.9"
                    stroke="white"
                    strokeWidth="0.5"
                    filter="url(#glow)"
                    animate={{
                        rotateY: [15, 65, 15],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "50px 60px", perspective: "1000px" }}
                />

                {/* Right Wing */}
                <motion.path
                    d="M50 60 C70 30 95 40 90 65 C85 90 55 85 50 70"
                    fill="url(#wingGradient)"
                    fillOpacity="0.9"
                    stroke="white"
                    strokeWidth="0.5"
                    filter="url(#glow)"
                    animate={{
                        rotateY: [-15, -65, -15],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "50px 60px", perspective: "1000px" }}
                />

                {/* Body */}
                <motion.ellipse
                    cx="50" cy="65" rx="2" ry="10"
                    fill="#333"
                    animate={{ scaleY: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Antennae */}
                <path d="M49 52 Q45 40 38 38" stroke="#333" strokeWidth="0.5" fill="none" />
                <path d="M51 52 Q55 40 62 38" stroke="#333" strokeWidth="0.5" fill="none" />

                {/* Little Sparkles around it */}
                <motion.circle
                    cx="20" cy="20" r="1" fill="white"
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.circle
                    cx="80" cy="30" r="1" fill="white"
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
                />
            </motion.svg>
        </div>
    );
};

export default Butterfly;
