"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-900 text-white">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Praveer Kumar Yadav
          </h1>
          <p className="text-gray-300">
            Building scalable and impactful web solutions
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 text-center bg-black text-white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Computer Science undergraduate passionate about building scalable 
            applications and solving real-world problems.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 bg-gradient-to-b from-black to-slate-900 text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-10"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {["Java", "Python", "JavaScript", "React", "Node.js", "DSA"].map(
            (skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/10"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Weather App",
              desc: "Real-time weather using API & geolocation",
            },
            {
              title: "Dice Game",
              desc: "Interactive JavaScript game with animations",
            },
            {
              title: "E-commerce Frontend",
              desc: "Login, cart, product listing UI",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:shadow-xl hover:shadow-indigo-500/20 transition"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-2">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center bg-gradient-to-b from-slate-900 to-black text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400">praveeryadav0@gmail.com</p>
          <p className="text-gray-400">github.com/praveeryadav0-source</p>
        </motion.div>
      </section>
    </>
  );
}