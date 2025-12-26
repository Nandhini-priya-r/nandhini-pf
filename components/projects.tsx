"use client";

import Image from "next/image";
import Link from "next/link";

/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "QuickCart E-Commerce",
    slug: "quick-cart",
    desc: "A modern and responsive e-commerce platform built for fast shopping, dynamic cart management, and smooth checkout experience.",
    image: "/assets/projects/qcart.png",
    tech: ["React", "Next.js", "Tailwind", "MongoDB", "Clerk"],
    liveLink: "https://quick-cart-six-theta.vercel.app/",
  },
  {
    title: "BluBox Exports Website",
    slug: "bluebox",
    desc: "A premium export business website showcasing high-quality hardware products with professional branding.",
    image: "/assets/projects/bbox.png",
    tech: ["Next.js", "CSS"],
    liveLink: "https://www.bluboxexports.com/",
  },
  {
    title: "Smart Restaurant App",
    slug: "smart-restaurant",
    desc: "A smart restaurant management application designed with modern UI and smooth user experience.",
    image: "/assets/projects/smart.png",
    tech: ["Next.js", "Node.js", "TypeScript"],
    liveLink: "https://smarthours.in/",
  },
];

/* ================= COMPONENT ================= */
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto">
        {/* ✅ SAME PADDING AS OTHER SECTIONS */}
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-teal-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              UI Design • Interactive • Live Builds
            </p>
          </div>

          {/* PROJECT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

                  {/* TECH STACK */}
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

                  {/* ACTION BUTTONS */}
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
          </div>

        </div>
      </div>
    </section>
  );
}
