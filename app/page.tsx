"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const roles = [
    "Software Developer",
    "React Developer",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const current = roles[index];

    const typing = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1200);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white overflow-hidden relative">

      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px] opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >

        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Praveer Kumar Yadav
        </motion.h1>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-2"
        >
          Computer Science Undergraduate &{" "}
          <span className="text-indigo-400">{text}|</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-indigo-400 mb-6"
        >
          Building scalable and impactful web solutions
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button className="bg-indigo-500 px-6 py-3 rounded-lg hover:bg-indigo-600 transition transform hover:scale-110 shadow-lg shadow-indigo-500/30">
            Hire Me
          </button>

          <button className="border px-6 py-3 rounded-lg hover:bg-white hover:text-black transition transform hover:scale-110">
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}