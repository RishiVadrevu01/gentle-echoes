import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import hand2Img from "@/assets/hand2.jpeg";
import shinchanImg from "@/assets/shinchan.jpg";
import shockImg from "@/assets/shock.jpeg";

interface PromisePopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const PromisePopup = ({ isOpen, onClose }: PromisePopupProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
                    onClick={onClose}
                >
                    {/* Animated Background Orbs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                x: [0, 100, 0],
                                y: [0, -100, 0],
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-500/10 blur-[120px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1.3, 1, 1.3],
                                x: [0, -100, 0],
                                y: [0, 100, 0],
                            }}
                            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[150px]"
                        />
                    </div>

                    <div
                        className="relative w-full max-w-6xl flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Three Cards Layout */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full mb-12">

                            {/* Left Card - Shock */}
                            <motion.div
                                initial={{ opacity: 0, x: -50, rotate: -10 }}
                                animate={{ opacity: 1, x: 0, rotate: -5 }}
                                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                                className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100 w-64 lg:w-72 transform hover:rotate-0 hover:scale-105 transition-all duration-500"
                            >
                                <div className="w-full aspect-square overflow-hidden rounded-sm bg-gray-50">
                                    <img
                                        src={shockImg}
                                        alt="Shocked"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="pt-4 pb-2 text-center">
                                    <span className="font-script text-xl text-rose-400 opacity-80">Omg! Really?</span>
                                </div>
                            </motion.div>

                            {/* Middle Card - Promise (Larger) */}
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
                                className="bg-white p-4 shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-sm border-2 border-rose-100 w-72 lg:w-96 z-10 transform hover:scale-[1.03] transition-all duration-500"
                            >
                                <div className="w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-50 relative">
                                    <img
                                        src={hand2Img}
                                        alt="A Promise"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                                </div>
                                <div className="pt-6 pb-2 text-center space-y-4">
                                    <div className="flex justify-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Heart className="w-10 h-10 text-rose-500 fill-current" />
                                        </motion.div>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-3xl lg:text-4xl text-gray-800 tracking-wide mb-1">
                                            a tue promise
                                        </h3>
                                        <p className="text-gray-500 font-sans text-xs tracking-widest uppercase">
                                            Forever & Always
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Card - Shinchan */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, rotate: 10 }}
                                animate={{ opacity: 1, x: 0, rotate: 5 }}
                                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                                className="bg-white p-3 shadow-2xl rounded-sm border border-gray-100 w-64 lg:w-72 transform hover:rotate-0 hover:scale-105 transition-all duration-500"
                            >
                                <div className="w-full aspect-square overflow-hidden rounded-sm bg-gray-50">
                                    <img
                                        src={shinchanImg}
                                        alt="Shinchan"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="pt-4 pb-2 text-center">
                                    <span className="font-script text-xl text-rose-400 opacity-80">Hehe, I knew it!</span>
                                </div>
                            </motion.div>

                        </div>

                        {/* Final Action Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            onClick={onClose}
                            className="px-12 py-4 bg-white text-rose-600 rounded-full font-bold tracking-widest text-xs uppercase hover:bg-rose-50 transition-all shadow-xl active:scale-95"
                        >
                            Close with Love
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PromisePopup;
