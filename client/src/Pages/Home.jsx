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
    const [step, setStep] = useState(0);

    const phrases = [
        "Will you forgive me?",
        "Please forgive me?",
        "Give me another chance?",
    ];

    // Background gradient colors
    const backgrounds = [
        "linear-gradient(to bottom right, #111827, #1f2937, #000000)", // Darkest
        "linear-gradient(to bottom right, #7f1d1d, #9f1239, #be185d)", // Deep rose
        "linear-gradient(to bottom right, #ffe4e6, #fecdd3, #fbcfe8, #fda4af)", // Romantic pink
    ];

    const revealed = step >= phrases.length;

    // Auto-slide carousel
    useEffect(() => {
        if (!revealed) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length, revealed]);

    return (
        <motion.div
            initial={{ background: backgrounds[0] }}
            animate={{
                background:
                    step < backgrounds.length
                        ? backgrounds[step]
                        : backgrounds[backgrounds.length - 1],
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden font-sans"
        >
            {/* Spotify Playlist (shows after forgiveness sequence) */}
            {revealed && (
                <div className="absolute top-6 right-6 z-50">
                    <div className="bg-white/80 backdrop-blur-lg border border-rose-200 shadow-2xl rounded-2xl overflow-hidden">
                        <iframe
                            className="rounded-2xl"
                            src="https://open.spotify.com/embed/playlist/7gva5xxlRXedWjpsy4Gq9b?utm_source=generator&theme=0"
                            width="320"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Vignette (fades away when revealed) */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: revealed ? 0 : 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.35),rgba(0,0,0,0))]"
            />

            {/* Forgiveness sequence */}
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

                    <p className="mt-4 text-sm text-white/80">
                        Click to move forward
                    </p>
                </motion.div>
            ) : (
                <>
                    {/* Floating hearts */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-rose-300 text-xl opacity-70"
                            initial={{
                                y: "110vh",
                                x: Math.random() * window.innerWidth,
                            }}
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

                    {/* Main content */}
                    <motion.main
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10 flex flex-col items-center px-6 text-center max-w-3xl py-12"
                    >
                        <header className="mb-8">
                            <h1 className="font-['Great_Vibes'] text-5xl md:text-6xl text-rose-700 drop-shadow-sm">
                                Our First Anniversary
                            </h1>
                            <p className="mt-3 text-xl md:text-2xl font-medium text-gray-800">
                                Kenneth <span className="text-rose-500">&</span> Shaine
                            </p>
                            <p className="mt-1 text-sm md:text-base text-gray-600 italic">
                                September 13, 2025
                            </p>
                        </header>

                        {/* Invitation card */}
                        <motion.section
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                            className="w-full max-w-4xl bg-gradient-to-br from-white via-rose-50 to-white 
             backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-xl border border-rose-100
             relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1 
                  bg-gradient-to-r from-transparent via-rose-400 to-transparent 
                  rounded-full mt-2" />

                            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic text-center font-serif">
                                “Join me in a special dinner to celebrate our first year together.
                                It would mean everything to me if you're with me on that night.”
                            </p>

                            <div className="my-8 flex items-center justify-center">
                                <span className="h-px w-20 bg-rose-200" />
                                <span className="mx-3 text-rose-400">❦</span>
                                <span className="h-px w-20 bg-rose-200" />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="text-left font-serif">
                                    <h3 className="text-sm font-semibold tracking-wide text-rose-600 uppercase">
                                        Dinner Details
                                    </h3>
                                    <p className="text-base text-gray-700 mt-1">
                                        📍 Blackbird at the Neilson Tower
                                    </p>
                                    <p className="text-base text-gray-700">
                                        🕗 September 13, 2025 – 7:00 PM
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        Departure time from home: 3:00 PM; We will go to Greenbelt 5 first to engrave the Guerlain Lippie
                                    </p>
                                </div>

                                <a
                                    href="https://www.blackbird.com.ph/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-12 py-2 rounded-full bg-rose-600 text-white text-sm md:text-base font-medium 
    shadow-md hover:bg-rose-700 transition tracking-wide"
                                    >
                                        Sneak Peek
                                    </motion.button>
                                </a>
                            </div>
                        </motion.section>

                        <div className="w-32 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent my-10" />

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

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`w-3 h-3 rounded-full transition ${i === current
                                            ? "bg-rose-600"
                                            : "bg-white/80"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.main>
                </>
            )}
        </motion.div>
    );
}
