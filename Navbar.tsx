"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-white font-bold text-lg cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Praveer.dev
        </motion.h1>

        {/* LINKS */}
        <div className="space-x-6 hidden md:flex text-sm">

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#about"
            className="hover:text-indigo-400 transition"
          >
            About
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#projects"
            className="hover:text-indigo-400 transition"
          >
            Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact"
            className="hover:text-indigo-400 transition"
          >
            Contact
          </motion.a>
        </div>

        {/* BUTTON */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/30"
        >
          Hire Me
        </motion.a>
      </div>
    </motion.nav>
  );
}