"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Praveer Kumar Yadav
        </h1>

        {/* Role */}
        <p className="text-lg md:text-xl text-gray-300 mb-2">
          Computer Science Undergraduate & Aspiring Software Developer
        </p>

        {/* Tagline */}
        <p className="text-indigo-400 mb-6">
          Building scalable and impactful web solutions
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition transform hover:scale-105">
            Hire Me
          </button>

          <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition transform hover:scale-105">
            Download Resume
          </button>
        </div>
      </motion.div>

    </main>
  );
}