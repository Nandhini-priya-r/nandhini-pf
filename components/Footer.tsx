"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(135deg,#150f24,#2b1b3d,#4a3470)] text-white py-16 px-6 mt-20">

      {/* Main Layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Work With Me Section */}
        <div className="md:text-left text-left">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-teal-400 bg-clip-text text-transparent">
            WANT TO WORK WITH ME
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Then post your interest and information about the project to me.
          </p>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block mt-5 px-6 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow-lg"
          >
            Message Me
          </motion.a>
        </div>

        {/* Contact Section */}
        <div className="md:text-left text-left">
          <h3 className="text-xl font-semibold mb-3 text-teal-300">CONTACTS</h3>

          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5 text-pink-400" />
            <p className="text-gray-300">nandhini120904@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-pink-400" />
            <p className="text-gray-300">+91 9976857298</p>
          </div>
        </div>

        {/* Socials Section */}
        <div className="md:text-left text-left">
          <h3 className="text-xl font-semibold mb-3 text-teal-300">SUPPORT</h3>
          <p className="text-gray-400 mb-4">© Nandhini Raghupathi</p>

          <div className="flex items-center gap-6">
            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Nandhini-priya-r" target="_blank">
              <Github className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/nandhini-r-b340b34" target="_blank">
              <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-400 cursor-pointer" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.2 }} href="mailto:nandhini120904@gmail.com">
              <Mail className="w-6 h-6 text-red-400 hover:text-red-300 cursor-pointer" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 w-full h-[1px] bg-gray-700/40"></div>

      {/* Bottom Text */}
      <p className="text-center text-gray-400 mt-6 text-sm">
        Designed with ❤️ by Nandhini
      </p>

    </footer>
  );
}
