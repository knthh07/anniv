import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Apology() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-rose-50 to-gray-200 overflow-hidden font-sans px-6">
      {/* Main Card (Letter Style) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white p-10 rounded-2xl shadow-lg max-w-xl text-center border border-gray-200"
      >
        <h1 className="font-serif text-4xl text-rose-700 mb-6">
          I’m Sorry
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Baby, I messed up and I know you must’ve been really hurt.
          I said some very hurtful words. Doubting your love for me was the worst thing I could have done.
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
          Please forgive me. I don’t want this fight to stand between us.
          I love you, and I want to make things right. ❤️
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home")}
          className="mt-10 px-8 py-3 rounded-lg bg-rose-600 text-white text-lg font-medium shadow-md hover:bg-rose-700 transition"
        >
          Go to Our Anniversary Page
        </motion.button>
      </motion.div>
    </div>
  );
}
