"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PortfolioLanding() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  const controls = useAnimation();
  const imageControls = useAnimation();

  /* ---------------- SECTION OBSERVER ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 60 });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  /* ---------------- IMAGE OBSERVER ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageControls.start({ opacity: 1, scale: 1, y: 0 });
        } else {
          imageControls.start({ opacity: 0, scale: 0.85, y: 40 });
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    return () => observer.disconnect();
  }, [imageControls]);

  return (
    <motion.section
      id="skills"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-[linear-gradient(135deg,#150f24,#2b1b3d,#4a3470)] py-20"
    >
      <div className="container mx-auto">
        <div className="section-inner px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* ---------------- LEFT CONTENT ---------------- */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-10"
              >
                <h2 className="text-white text-4xl font-bold mb-3">
                  I Build Powerful Web Applications
                </h2>

                <div className="w-24 h-[4px] bg-teal-400 rounded-full mt-2 mb-8" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="text-gray-300 leading-relaxed mb-6"
              >
                I have strong frontend and full-stack development skills, with
                hands-on experience creating responsive and user-focused web
                applications. My frontend expertise includes HTML, CSS,
                JavaScript, TypeScript, React.js, and Next.js.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-300 leading-relaxed mb-4"
              >
                On the full-stack side, I work with Node.js, Express, MongoDB,
                and Git/GitHub to develop scalable APIs and manage databases.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ delay: 0.55, duration: 0.6 }}
                className="text-gray-300 leading-relaxed"
              >
                With a strong programming foundation in C and Java, I improve
                my problem-solving and system-level understanding.
              </motion.p>
            </div>

            {/* ---------------- RIGHT IMAGE ---------------- */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={imageControls}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex justify-center"
            >
              <img
                src="/assets/skillBanner.png"
                alt="Laptop showing code and UI"
                className="w-[480px] md:w-[580px] drop-shadow-2xl"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}
