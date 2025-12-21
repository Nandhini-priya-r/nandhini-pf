"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PortfolioLanding() {
  const ref = useRef(null);
  const imageRef = useRef(null);

  const controls = useAnimation();
  const imageControls = useAnimation();

  // Text Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
        else controls.start("hidden");
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  // Image Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) imageControls.start("visible");
        else imageControls.start("hidden");
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [imageControls]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="w-full bg-[linear-gradient(135deg,#150f24,#2b1b3d,#4a3470)] py-20"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>

          {/* Heading + Underline Together */}
          <div className="mb-10">
            <h2 className="text-white text-4xl font-bold mb-3">
              I Build Powerful Web Applications
            </h2>

            <div className="w-24 h-[4px] bg-teal-400 rounded-full mt-2 mb-8"></div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            I have strong frontend and full-stack development skills, with
            hands-on experience creating responsive and user-focused web
            applications. My frontend expertise includes HTML, CSS, JavaScript,
            TypeScript, React.js, and Next.js.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            On the full-stack side, I work with Node.js, Express, MongoDB, and
            Git/GitHub to develop scalable APIs, manage databases, and implement
            application workflows.
          </p>

          <p className="text-gray-300 leading-relaxed">
            With a strong programming foundation in C and Java, I improve my
            problem-solving and system-level understanding.
          </p>
        </div>

        {/* RIGHT IMAGE WITH FADE-IN */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={{
            hidden: { opacity: 0, scale: 0.85, y: 40 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
          className="flex justify-center"
        >
          <img
            src="/assets/responsive.png"
            alt="Laptop showing code and UI"
            className="w-[480px] md:w-[580px] drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
