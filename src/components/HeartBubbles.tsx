import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeartBubbles = () => {
    const [hearts, setHearts] = useState<number[]>([]);

    useEffect(() => {
        // Generate a fixed number of hearts
        setHearts(Array.from({ length: 60 }, (_, i) => i));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {hearts.map((i) => (
                <motion.div
                    key={i}
                    className="absolute text-pink-500 drop-shadow-md"
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    style={{
                        left: Math.random() * 100 + "%",
                        top: -50,
                        fontSize: Math.random() * 20 + 10 + "px",
                    }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        top: "110%", // Fall down to bottom
                        x: [0, (Math.random() - 0.5) * 100, 0], // Swaying motion
                        rotate: [0, Math.random() * 360], // Gentle rotation
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10, // 10-20s duration
                        repeat: Infinity,
                        delay: Math.random() * 15,
                        ease: "linear",
                    }}
                >
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default HeartBubbles;
