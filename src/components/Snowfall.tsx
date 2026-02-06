import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Snowfall = () => {
    // Generate flakes on client side only to avoid hydration mismatch if SSR (though this is likely SPA)
    const [flakes, setFlakes] = useState<number[]>([]);

    useEffect(() => {
        setFlakes(Array.from({ length: 150 }, (_, i) => i));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {flakes.map((i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full blur-[0.5px]"
                    style={{
                        width: Math.random() * 6 + 4 + "px", // Increased size: 4px to 10px
                        height: Math.random() * 6 + 4 + "px",
                        left: Math.random() * 100 + "%",
                        opacity: Math.random() * 0.2 + 0.8, // Very high opacity for intense white color
                        top: -20,
                        backgroundColor: "#ffffff",
                        boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)", // Add glow for more intensity
                    }}
                    animate={{
                        top: "120%",
                        x: [0, Math.random() * 50 - 25, 0], // Swaying motion
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10, // Slightly faster: 10-20s
                        repeat: Infinity,
                        delay: Math.random() * 20,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default Snowfall;
