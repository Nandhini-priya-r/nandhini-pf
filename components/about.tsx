"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import profileImg from "@/public/assets/profile.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AboutSection() {
  return (
    <>
      {/* TOP COLOR STRIP */}
      <div className="w-full h-15 bg-[#ffffff]"></div>

      {/* MAIN SECTION */}
      <section
        id="about"
        className="py-28 bg-[linear-gradient(135deg,#150f24,#2b1b3d,#4a3470)] 
             relative overflow-hidden px-6 text-white border-t border-white/20"
      >
        {/* FLOATING GLOWS */}
        <div className="absolute top-16 left-16 w-72 h-72 bg-pink-300/25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-72 h-72 bg-pink-300/25 blur-3xl rounded-full"></div>

        {/* HEADING */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-center 
                     bg-gradient-to-r from-teal-300 to-pink-300 bg-clip-text text-transparent mb-16"
        >
          About Me
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div
                className="
  w-[260px] h-[260px]
  sm:w-[300px] sm:h-[300px]
  md:w-[380px] md:h-[380px]
  rounded-full shadow-[0_25px_80px_rgba(0,0,0,0.35)] 
  bg-black border border-gray-300 
  overflow-hidden relative mx-auto
"
              >
                <Image
                  src={profileImg}
                  alt="Profile"
                  className="
      absolute bottom-0 left-1/2 -translate-x-1/2
      w-[85%] sm:w-[80%] md:w-[80%]
      object-contain
    "
                />
              </div>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nandhini120904@gmail.com"
                className="flex items-center gap-2 px-5 py-2 border border-gray-300 
                           rounded-lg shadow-md hover:bg-white hover:text-black transition"
              >
                Email
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/CV.pdf"
                className="flex items-center gap-2 px-5 py-2 bg-teal-500 text-white 
                           rounded-lg shadow-md hover:bg-teal-600 transition"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-white"
          >
            <span className="px-4 py-1 text-sm rounded-full bg-white/20 text-white font-semibold">
              Full Stack Developer
            </span>

            <h3 className="text-4xl md:text-5xl font-bold leading-tight mt-4 text-white">
              Building innovative <br /> web experiences
            </h3>

            <div className="w-24 h-[3px] bg-teal-400 rounded-full mt-4"></div>

            <p className="mt-6 leading-8 text-white/90">
              I am a dedicated Full Stack Developer skilled in building
              responsive front-end interfaces using{" "}
              <strong>React, Node.js, TypeScript</strong>.
            </p>

            <p className="mt-4 leading-8 text-white/90">
              I specialize in reusable components, API integrations, and
              scalable code.
            </p>

            <p className="mt-4 leading-8 text-white/90">
              I love building interactive user experiences with smooth
              animations.
            </p>

            {/* SKILL TAGS */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "React",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Next.js",
                "JavaScript",
                "C",
                "Java",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-white/20 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
