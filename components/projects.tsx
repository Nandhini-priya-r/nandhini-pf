"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// PROJECT DATA WITH LINKS
const projects = [
  {
    title: "QuickCart E-Commerce",
    desc: "A modern and responsive e-commerce platform built for fast shopping and smooth checkout includes dynamic cart management, product UI, and seamless user experience",
    image: "/assets/projects/qcart.png",
    tech: ["React", "Next.js", "Tailwind", "API", "MongoDB", "Clerk", "Vercel"],
    link: "https://quick-cart-six-theta.vercel.app/",
  },
  {
    title: "BluBox Exports Website",
    desc: "A premium export business website showcasing top-quality hardware and fittings. Designed for global clients with a clean product catalog and professional branding.",
    image: "/assets/projects/bbox.png",
    tech: ["Next.js", "Framer Motion", "CSS"],
    link: "https://www.bluboxexports.com/",
  },
  {
    title: "Smart Restaurant App",
    desc: "A live learning & internship platform providing real-time online classes, project-based programs, and job-ready skill development.",
    image: "/assets/projects/smart.png",
    tech: ["Next.js", "Node.js", "TypeScript", "Framer Motion"],
    link: "https://smarthours.in/",
  },
];

// ✔ CLEAN VARIANTS (NO TRANSITION INSIDE)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.22 },
  },
};

const smoothCard = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function ProjectsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  useEffect(() => {
    controls.start(inView ? "show" : "hidden");
  }, [inView, controls]);

  return (
    <section id="projects" ref={ref} className="py-24 bg-gray-50 overflow-hidden">

      {/* HEADER */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="container mx-auto text-center mb-14"
      >
        <motion.h2
          variants={smoothCard}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={smoothCard}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="w-0 h-[4px] mx-auto mt-3 rounded-full bg-gradient-to-r from-teal-400 to-pink-500 shadow-lg"
          animate={{ width: "120px" }}
        />

        <motion.p
          variants={smoothCard}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-gray-600 mt-4 text-lg tracking-wide"
        >
          UI Design • Interactive • Live Builds
        </motion.p>
      </motion.div>

      {/* PROJECT CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
      >
        {projects.map((p, index) => (
          <motion.div
            key={index}
            variants={smoothCard}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl"
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0px 12px 40px rgba(0,0,0,0.15)",
              transition: { duration: 0.45, ease: "easeOut" },
            }}
          >
            {/* IMAGE */}
            <div className="relative w-full h-56 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{p.desc}</p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <Link href={p.link} target="_blank">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="mt-5 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                >
                  View Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
