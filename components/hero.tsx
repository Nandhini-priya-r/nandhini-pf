"use client";
import Image from "next/image";
import bgImg from "@/public/assets/hero.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative">

      {/* HEADER */}
      <header className="absolute top-0 left-0 w-full z-20 py-5">

        {/* NAV BAR */}
        <div className="container mx-auto flex justify-between items-center px-4">

          <h2 className="text-white text-2xl font-bold">Nandhini R</h2>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-white font-medium">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="/contact">Contact</a></li> {/* Updated */}
            </ul>
          </nav>

          {/* Desktop Resume */}
          <a
            href="/assets/Nandhini CV.pdf"
            className="hidden md:inline-block bg-[#ff255b] text-white px-5 py-2 rounded-full text-sm"
          >
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE SLIDE MENU */}
        <div
          className={`
            fixed top-0 right-0 h-full w-[65%]
            bg-black/80 backdrop-blur-xl shadow-xl
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <X
              size={28}
              className="text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-start px-6 space-y-6">

            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full font-medium text-white"
            >
              HOME
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full font-medium text-white"
            >
              ABOUT
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full font-medium text-white"
            >
              PROJECTS
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full font-medium text-white"
            >
              SKILLS
            </a>

            {/* UPDATED CONTACT LINK */}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 rounded-full font-medium text-white"
            >
              CONTACT
            </a>

            {/* Smaller Resume Button */}
            <a
              href="/assets/Nandhini CV.pdf"
              onClick={() => setIsOpen(false)}
              className="bg-[#ff255b] mt-4 px-8 py-2 rounded-full font-semibold shadow-md text-white text-lg"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen w-full flex justify-center items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={bgImg}
            alt="Portfolio Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        {/* Text Content */}
        <div className="container mx-auto text-center text-white px-4">
          <p className="text-xl opacity-90">Hi, I'm</p>
          <h1 className="text-6xl md:text-7xl font-extrabold my-4">Nandhini</h1>
          <h3 className="text-2xl md:text-3xl font-light">
            Front-end Developer & Back-end Developer
          </h3>
        </div>
      </section>

    </main>
  );
}
