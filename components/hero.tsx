"use client";
import Image from "next/image";
import Header from "@/components/Header";
import bgImg from "@/public/assets/hero.png";

export default function Home() {
  return (
    <main className="relative">
      {/* HEADER */}
      <Header />

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
