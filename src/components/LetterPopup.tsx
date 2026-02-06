import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

import shinchanWall from "@/assets/shinchan-wall.jpeg";
import shinchanGif from "@/assets/shinchan.gif";
import sadImage from "@/assets/sad.jpeg";

interface LetterPopupProps {
    onClose: () => void;
}

const LetterPopup = ({ onClose }: LetterPopupProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(onClose, 500); // Wait for animation to finish
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-white/20 backdrop-blur-3xl"
                >
                    {/* Animated colorful background light */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-pink-300/30 blur-[120px]"
                        />
                        <motion.div
                            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-300/30 blur-[120px]"
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0.8, y: 50, rotate: -3 }}
                        animate={{ scale: 1, y: 0, rotate: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                        className="relative max-w-6xl w-[95%] bg-white p-6 md:p-10 shadow-[0_20px_80px_rgba(255,182,193,0.4)] rounded-2xl border-4 border-white"
                    >
                        {/* ... existing backgrounds ... */}
                        <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-pink-400 via-rose-300 to-purple-400 -z-10" />
                        <div className="absolute inset-0 bg-white rounded-2xl" />
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `radial-gradient(#ff6b6b 0.5px, transparent 0.5px), radial-gradient(#4ecdc4 0.5px, transparent 0.5px)`,
                                backgroundSize: "20px 20px",
                                backgroundPosition: "0 0, 10px 10px"
                            }}
                        />

                        {/* Sparkles, Flap, and Watermark ... */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-400 to-purple-400 z-20" />

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 0.08, scale: 1.2 }}
                                transition={{ delay: 0.5, duration: 2 }}
                                className="text-rose-400"
                            >
                                <Heart className="w-64 h-64 fill-current" />
                            </motion.div>
                        </div>

                        <div className="relative z-20 h-[70vh] flex flex-col items-center">
                            {/* Scrollable Content Container */}
                            <div className="w-full flex-1 overflow-y-auto pr-6 custom-scrollbar scroll-smooth">
                                <div className="max-w-4xl mx-auto space-y-8 pb-10">
                                    <motion.p
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="font-script text-5xl text-rose-500 mb-8 not-italic text-left pb-4"
                                    >
                                        Hey Snupyyyy💖,
                                    </motion.p>

                                    {/* First para with Shinchan Image beside it */}
                                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.7 }}
                                            className="font-serif text-[21px] text-slate-800 italic leading-relaxed text-justify flex-1"
                                        >
                                            I know you may not even want to see my face right now, and you might not be in a place where you feel like listening to my words. Still, I created this letter as a <span className="text-rose-500 font-semibold not-italic">promise — a promise I will never break</span> — and as a reflection of the love I truly have for you.
                                        </motion.p>

                                        {/* Shinchan Polaroid inside content - Reduced Size */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                            animate={{ opacity: 1, scale: 1, rotate: -2 }}
                                            transition={{ delay: 1, duration: 0.8 }}
                                            className="flex-shrink-0 flex flex-col p-2.5 bg-white shadow-xl rounded-sm border border-gray-100 w-44 transform hover:rotate-0 transition-transform duration-500"
                                        >
                                            <div className="w-full h-52 overflow-hidden rounded-sm bg-gray-50 mb-2.5">
                                                <img
                                                    src={shinchanWall}
                                                    alt="Shinchan"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="font-script text-center text-rose-400 text-base">I cant show my face </div>
                                        </motion.div>
                                    </div>

                                    {/* Second para with Shinchan GIF beside it */}
                                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                        {/* Shinchan GIF inside content - Small Frame */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 2 }}
                                            transition={{ delay: 1.2, duration: 0.8 }}
                                            className="flex-shrink-0 flex flex-col p-2 bg-white shadow-lg rounded-sm border border-gray-100 w-40 transform hover:rotate-0 transition-transform duration-500 order-2 lg:order-1"
                                        >
                                            <div className="w-full h-40 overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center">
                                                <img
                                                    src={shinchanGif}
                                                    alt="Shinchan Animation"
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.9 }}
                                            className="font-serif text-[19px] text-slate-800 italic leading-relaxed text-justify flex-1 order-1 lg:order-2"
                                        >
                                            At this moment, you might feel like closing this tab, but I gently ask you not to. This website is my <span className="text-cyan-600 font-semibold not-italic">complete effort</span>… built with sleepless nights, patience, and a heart full of hope. It was created during the time I used to spend with you, because every moment with you has always mattered to me.
                                        </motion.p>
                                    </div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.1 }}
                                        className="font-serif text-[21px] text-slate-800 italic leading-relaxed text-justify"
                                    >
                                        Please don’t close it just yet. Give me one chance to make you smile, even if it is just for a few minutes. This is one of the many ways I am trying to show how much you mean to me.
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.3 }}
                                        className="font-serif text-[21px] text-slate-800 italic leading-relaxed text-justify"
                                    >
                                        Even if there is distance between us right now, my feelings still keep you <span className="text-rose-500 font-semibold not-italic">very close to my heart</span>.
                                    </motion.p>

                                    {/* Final Plea with Sad Image beside it */}
                                    <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 pt-6">
                                        <div className="flex-1 w-full">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.5 }}
                                                className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100 text-lg not-italic font-sans text-slate-600 leading-relaxed shadow-sm italic"
                                            >
                                                <span className="font-bold text-rose-400 uppercase tracking-widest text-xs block mb-2 not-italic">Personal Note:</span>
                                                I understand that you may not feel like viewing this because it’s from me, and you might still be upset with me. But if you can… please take just one look. That is all I ask.
                                            </motion.div>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.7 }}
                                                className="font-script text-4xl text-rose-500 pt-6 text-left lg:text-right"
                                            >
                                                Pleaseeeeeeee
                                            </motion.p>
                                        </div>

                                        {/* Sad Image - Polaroid Case */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 2 }}
                                            transition={{ delay: 1.9, duration: 0.8 }}
                                            className="flex-shrink-0 flex flex-col p-2.5 bg-white shadow-xl rounded-sm border border-gray-100 w-48 transform hover:rotate-0 transition-transform duration-500 mb-2"
                                        >
                                            <div className="w-full h-56 overflow-hidden rounded-sm bg-gray-50 flex items-center justify-center">
                                                <img
                                                    src={sadImage}
                                                    alt="Thinking of you"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="font-script text-center text-slate-400 text-base pt-1">One last look...</div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Sticky Button at bottom of card */}
                            <div className="w-full pt-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(244, 63, 94, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleClose}
                                    className="w-full py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-bold shadow-lg transition-all uppercase tracking-[0.3em] text-sm"
                                >
                                    Open Your Letter
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LetterPopup;
