import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Home() {
    // Carousel state
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
    ]; // 👈 replace with your actual image paths in /public/images/
    const [current, setCurrent] = useState(0);

    // Auto slide every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 relative overflow-hidden font-sans">

            {/* Floating Hearts */}
            {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-rose-400 text-3xl"
                    initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
                    animate={{ y: "-20vh" }}
                    transition={{
                        duration: 8 + Math.random() * 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                >
                    ❤️
                </motion.div>
            ))}

            {/* Main Content Wrapper */}
            <div className="relative z-10 flex flex-col items-center px-4 text-center max-w-2xl">
                {/* Header Section */}
                <header className="text-center mt-16">
                    <h1 className="font-['Great_Vibes'] text-6xl md:text-8xl text-rose-700 drop-shadow-lg">
                        Our First Anniversary
                    </h1>
                    <div className="mt-4">
                        <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                            Prince <span className="text-rose-500">&</span> Shaine
                        </p>
                        <p className="mt-2 text-lg text-gray-600 tracking-wide italic">
                            September 13, 2025
                        </p>
                    </div>
                </header>

                {/* Invitation Card */}
                <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl text-center mt-10 border border-rose-200">
                    <p className="text-2xl italic text-gray-800">
                        “You are invited to a romantic dinner to celebrate our first year together.”
                    </p>
                </div>

                {/* Details */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold text-rose-600">Dinner Details</h2>
                    <p className="mt-2">📍 Blackbird at the Nelson Tower</p>
                    <p>🕗 September 13, 2025 – 7:00 PM</p>
                </div>

                {/* RSVP Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-4 rounded-full bg-rose-600 text-white text-lg font-medium shadow-lg hover:bg-rose-700 transition"
                >
                    RSVP Now
                </motion.button>
            </div>

            {/* Carousel Section */}
            <div className="relative z-10 w-full max-w-3xl aspect-[16/9] mt-20 mb-16 overflow-hidden rounded-2xl shadow-xl">
                {images.map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt={`memory-${index}`}
                        className="absolute top-0 left-0 w-full h-full object-contain bg-black/5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === current ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    />
                ))}

                {/* Dots Indicator */}
                <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full ${index === current ? "bg-rose-600" : "bg-white/70"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
