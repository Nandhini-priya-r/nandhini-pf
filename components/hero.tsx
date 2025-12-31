"use client";

import Image from "next/image";
import Header from "@/components/Header";
import bgImg from "@/public/assets/hero.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  /* -------- SCROLL VISIBILITY OBSERVER -------- */
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
            y: 60,
          });
        }
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <main className="relative">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        ref={heroRef}
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

        {/* TEXT CONTENT (GROUP ANIMATION) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto text-center text-white px-4"
        >
          <p className="text-xl opacity-90">Hi, I'm</p>

          <h1 className="text-6xl md:text-7xl font-extrabold my-4">
            Nandhini
          </h1>

          <h3 className="text-2xl md:text-3xl font-light">
           Front-End & Back-End Developer
          </h3>
        </motion.div>
      </section>
    </main>
  );
}
