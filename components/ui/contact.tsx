"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // HANDLE FORM SUBMIT
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        setStatus("Message sent successfully ✔");
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[linear-gradient(135deg,#150f24,#2b1b3d,#4a3470)] flex flex-col items-center py-20 px-6 text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-teal-300 to-pink-300 bg-clip-text text-transparent">
        Contact Me
      </h2>

      {/* ✨ Short intro message */}
      <p className="text-center text-gray-300 max-w-xl mt-6 mb-12 leading-relaxed">
        Thank you for visiting my portfolio. If you're a recruiter or hiring
        manager, I would be happy to discuss how my skills could contribute to
        your team. For project inquiries or other questions, feel free to
        contact me anytime.
      </p>

      {/* Contact Form Wrapper */}
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white/20 text-white border border-white/30 outline-none focus:border-teal-300"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white/20 text-white border border-white/30 outline-none focus:border-teal-300"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 rounded-md bg-white/20 text-white border border-white/30 outline-none focus:border-teal-300"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && <p className="text-center text-sm mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
