"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

/* ----------------------------------------
   Footer Section
----------------------------------------- */
function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-teal-300 tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ----------------------------------------
   Social Link
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
      whileHover={{ scale: 1.15 }}
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
      <div className="container mx-auto max-w-7xl px-6 md:px-12 py-16">

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-14 items-start">

  {/* LEFT */}
  <div className="justify-self-start md:justify-self-center">
    <div className="max-w-md text-left">
      <FooterSection title="WANT TO WORK WITH ME">
        <p className="text-gray-300 leading-relaxed">
          Share your project ideas or collaboration details and let’s build
          something impactful together.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-2 rounded-lg bg-pink-600 px-6 py-2 font-semibold hover:bg-pink-700"
        >
          Message Me
        </motion.a>
      </FooterSection>
    </div>
  </div>

  {/* CONTACT */}
  <div className="justify-self-start md:justify-self-center">
    <div className="max-w-md text-left">
      <FooterSection title="CONTACT">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-pink-400" />
            <span className="text-gray-300">
              nandhini120904@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-pink-400" />
            <span className="text-gray-300">
              +91 99768 57298
            </span>
          </div>
        </div>
      </FooterSection>
    </div>
  </div>

  {/* CONNECT */}
  <div className="justify-self-start md:justify-self-center">
    <div className="max-w-md text-left">
      <FooterSection title="CONNECT">
        <p className="text-gray-400">
          © Nandhini Raghupathi
        </p>

        <div className="flex gap-6">
          <SocialLink href="https://github.com/Nandhini-priya-r" label="GitHub">
            <Github className="h-6 w-6 text-gray-300 hover:text-white" />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/nandhini-r-b340b1347/"
            label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-blue-500 hover:text-blue-400" />
          </SocialLink>

          <SocialLink href="mailto:nandhini120904@gmail.com" label="Email">
            <Mail className="h-6 w-6 text-red-400 hover:text-red-300" />
          </SocialLink>
        </div>
      </FooterSection>
    </div>
  </div>

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
