"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

/* ----------------------------------------
   Reusable Footer Section
----------------------------------------- */
function FooterSection({
  title,
  align = "left",
  children,
}: {
  title: string;
  align?: "left" | "right";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`space-y-4 ${
        align === "right"
          ? "md:ml-auto md:text-right"
          : "text-left"
      }`}
    >
      <h3 className="text-xl font-semibold text-teal-300 tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ----------------------------------------
   Reusable Social Link
----------------------------------------- */
function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2 }}
      className="transition"
    >
      {children}
    </motion.a>
  );
}

/* ----------------------------------------
   Footer Component
----------------------------------------- */
export default function Footer() {
  return (
    <footer className="mt-24 bg-[linear-gradient(135deg,#150f24,#2b1b3d,#4a3470)] text-white">

      <div className="container mx-auto max-w-7xl px-6 py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* LEFT — WORK WITH ME */}
          <FooterSection title="WANT TO WORK WITH ME">
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Share your project ideas or collaboration details and let’s build
              something impactful together.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 w-fit rounded-lg bg-pink-600 px-6 py-2 font-semibold shadow-lg hover:bg-pink-700"
            >
              Message Me
            </motion.a>
          </FooterSection>

          {/* CENTER — CONTACT */}
          <FooterSection title="CONTACT" align="right">
            <div className="space-y-3">
              <div className="flex items-center gap-3 md:justify-end">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">
                  nandhini120904@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3 md:justify-end">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">
                  +91 99768 57298
                </span>
              </div>
            </div>
          </FooterSection>

          {/* RIGHT — CONNECT */}
          <FooterSection title="CONNECT" align="right">
            <p className="text-gray-400 mb-3">
              © Nandhini Raghupathi
            </p>

            <div className="flex gap-6 md:justify-end">
              <SocialLink
                href="https://github.com/Nandhini-priya-r"
                label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-300 hover:text-white" />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/nandhini-r-b340b1347/"
                label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-blue-500 hover:text-blue-400" />
              </SocialLink>

              <SocialLink
                href="mailto:nandhini120904@gmail.com"
                label="Email"
              >
                <Mail className="h-6 w-6 text-red-400 hover:text-red-300" />
              </SocialLink>
            </div>
          </FooterSection>

        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-gray-700/40" />

        {/* BOTTOM */}
        <p className="text-center text-sm text-gray-400">
          Designed with ❤️ by Nandhini
        </p>

      </div>
    </footer>
  );
}
