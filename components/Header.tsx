"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-20 py-5">
      <div className="container mx-auto flex justify-between items-center px-4">

        <h2 className="text-white text-2xl font-bold">Nandhini R</h2>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-white font-medium">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <a
          href="/assets/NandhiniCV.pdf"
          className="hidden md:inline-block bg-[#ff255b] text-white px-5 py-2 rounded-full text-sm"
        >
          Resume
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[65%] bg-black/80 backdrop-blur-xl shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <X size={28} className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <div className="flex flex-col items-start px-6 space-y-6">
          <a href="/" onClick={() => setIsOpen(false)} className="text-white text-lg">HOME</a>
          <a href="/#about" onClick={() => setIsOpen(false)} className="text-white text-lg">ABOUT</a>
          <a href="/#projects" onClick={() => setIsOpen(false)} className="text-white text-lg">PROJECTS</a>
          <a href="/#skills" onClick={() => setIsOpen(false)} className="text-white text-lg">SKILLS</a>
          <a href="/contact" onClick={() => setIsOpen(false)} className="text-white text-lg">CONTACT</a>

          <a
            href="/assets/NandhiniCV.pdf"
            className="bg-[#ff255b] mt-4 px-8 py-2 rounded-full text-white font-semibold"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
