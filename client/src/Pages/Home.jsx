import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Home() {
    const images = [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo5.jpg",
        "/images/photo6.jpg",
        "/images/photo7.jpg",
        "/images/photo8.jpg",
        "/images/photo9.jpg",
        "/images/photo10.jpg",
        "/images/photo11.jpg",
        "/images/photo12.jpg",
        "/images/photo13.jpg",
        "/images/photo14.jpg",
        "/images/photo15.jpg",
        "/images/photo16.jpg",
        "/images/photo17.jpg",
        "/images/photo18.jpg",
        "/images/photo19.jpg",
        "/images/photo20.jpg",
        "/images/photo21.jpg",
        "/images/photo22.jpg",
        "/images/photo23.jpg",
        "/images/photo24.jpg",
        "/images/photo25.jpg",
        "/images/photo26.jpg",
        "/images/photo27.jpg",
        "/images/photo28.jpg",
        "/images/photo29.jpg",
    ];

    const [current, setCurrent] = useState(0);
    const [step, setStep] = useState(0); // controls forgiveness sequence

    const phrases = [
        "Will you forgive me?",
        "Please forgive me?",
        "Give me another chance?",
    ];

    const backgrounds = [
        "from-gray-900 via-gray-800 to-black", // darkest
        "from-gray-700 via-gray-600 to-gray-800", // medium
        "from-rose-100 via-pink-100 to-rose-200", // light (reveal)
    ];

    const revealed = step >= phrases.length;

    // start carousel auto-slide only after reveal
    useEffect(() => {
        if (!revealed) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length, revealed]);

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-1000 bg-gradient-to-br ${step < backgrounds.length ? backgrounds[step] : backgrounds[backgrounds.length - 1]
                } relative overflow-hidden font-sans`}
        >
            {/* subtle vignette for depth */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.35),rgba(0,0,0,0))]" />

            {/* Forgiveness sequence (dark -> lighter) */}
            {!revealed ? (
                <motion.div
                    key={`phrase-${step}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="relative z-20 flex flex-col items-center px-6"
                >
                    <motion.h2
                        initial={{ y: -6, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-2xl md:text-3xl font-medium text-white/95 max-w-lg"
                    >
                        {phrases[step]}
                    </motion.h2>

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep((s) => s + 1)}
                        className="mt-8 px-10 py-3 rounded-full bg-rose-500 text-white text-lg font-medium shadow-lg hover:bg-rose-600 transition"
                    >
                        {step === 0 ? "Say it" : step === 1 ? "I'm sorry" : "Please"}
                    </motion.button>

                    {/* hint */}
                    <p className="mt-4 text-sm text-white/80">Click to move forward</p>
                </motion.div>
            ) : (
                <>
                    {/* Soft floating hearts (subtle) */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-rose-300 text-xl opacity-70"
                            initial={{ y: "110vh", x: Math.random() * window.innerWidth }}
                            animate={{ y: "-15vh" }}
                            transition={{
                                duration: 9 + Math.random() * 6,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        >
                            ❤️
                        </motion.div>
                    ))}

                    {/* main content (fades in) */}
                    <motion.main
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center px-6 text-center max-w-3xl py-12"
                    >
                        {/* Header */}
                        <header className="mb-8">
                            <h1 className="font-['Great_Vibes'] text-5xl md:text-6xl text-rose-700 drop-shadow-sm">
                                Our First Anniversary
                            </h1>
                            <p className="mt-3 text-xl md:text-2xl font-medium text-gray-800">
                                Prince <span className="text-rose-500">&</span> Shaine
                            </p>
                            <p className="mt-1 text-sm md:text-base text-gray-600 italic">
                                September 13, 2025
                            </p>
                        </header>

                        {/* Invitation card: elegant, letter-like */}
                        <motion.section
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            className="w-full max-w-2xl bg-gradient-to-br from-white via-rose-50 to-white 
             backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border border-rose-100
             relative overflow-hidden"
                        >
                            {/* Decorative top accent */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full mt-2" />

                            {/* Message */}
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed italic text-center font-serif">
                                “You are warmly invited to a special dinner to celebrate our first year together.
                                We’d be honored if you could join us for an evening of quiet celebration and gratitude.”
                            </p>

                            {/* Divider */}
                            <div className="my-6 flex items-center justify-center">
                                <span className="h-px w-16 bg-rose-200" />
                                <span className="mx-3 text-rose-400">❦</span>
                                <span className="h-px w-16 bg-rose-200" />
                            </div>

                            {/* Details + Button */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-left font-serif">
                                    <h3 className="text-sm font-semibold tracking-wide text-rose-600 uppercase">Dinner Details</h3>
                                    <p className="text-sm text-gray-700 mt-1">📍 Blackbird at the Nelson Tower</p>
                                    <p className="text-sm text-gray-700">🕗 September 13, 2025 – 7:00 PM</p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-3 rounded-full bg-rose-600 text-white text-sm md:text-base font-medium 
                 shadow-md hover:bg-rose-700 transition tracking-wide"
                                >
                                    RSVP Now
                                </motion.button>
                            </div>
                        </motion.section>


                        {/* subtle divider */}
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent my-8" />

                        {/* Carousel */}
                        <div className="w-full max-w-3xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg relative">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={current}
                                    src={images[current]}
                                    alt={`memory-${current}`}
                                    className="absolute inset-0 w-full h-full object-contain bg-gray-50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                />
                            </AnimatePresence>

                            {/* dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-3 h-3 rounded-full transition ${i === current ? "bg-rose-600" : "bg-white/80"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.main>
                </>
            )}
        </div>
    );
}
