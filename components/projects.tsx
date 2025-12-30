"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "QuickCart E-Commerce",
    slug: "quick-cart",
    desc: "A modern and responsive e-commerce platform built for fast shopping, dynamic cart management, and smooth checkout experience.",
    image: "/assets/projects/qcart.png",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "JavaScript"],
    liveLink: "https://quick-cart-six-theta.vercel.app/",
  },
  {
    title: "BluBox Exports Website",
    slug: "bluebox",
    desc: "A premium export business website showcasing high-quality hardware products with professional branding.",
    image: "/assets/projects/bbox.png",
    tech: ["Next.js", "CSS", "TypeScript", "Framer Motion"],
    liveLink: "https://www.bluboxexports.com/",
  },
  {
    title: "Smart Hours",
    slug: "smart-hours",
    desc: "A smart restaurant management application designed with modern UI and smooth user experience.",
    image: "/assets/projects/smart.png",
    tech: ["Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    liveLink: "https://smarthours.in/",
  },
];

/* ================= COMPONENT ================= */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  /* --------- OBSERVER (SHOW / HIDE ON SCROLL) --------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
          });
        } else {
          controls.start({
            opacity: 0,
            y: 80,
          });
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">

          {/* ---------- HEADER ---------- */}
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              UI Design • Interactive • Live Builds
            </p>
          </div>

          {/* ---------- CARD GROUP ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={controls}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {projects.map((project) => (
              <div
                key={project.slug}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* IMAGE */}
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm">
                    {project.desc}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-3 mt-6">
                    <Link href={`/projects/${project.slug}`} className="w-full">
                      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Case Study
                      </button>
                    </Link>

                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="w-full"
                    >
                      <button className="w-full border border-black py-2 rounded-lg hover:bg-gray-100 transition">
                        Live
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
