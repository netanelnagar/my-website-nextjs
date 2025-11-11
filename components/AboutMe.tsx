'use client';

import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { motion } from "motion/react";


const aboutMe = {
  header: process.env.NEXT_PUBLIC_ABOUT_HEADER ?? "",
  body: process.env.NEXT_PUBLIC_ABOUT_BODY ?? "",
  linkedIn: process.env.NEXT_PUBLIC_ABOUT_LINKEDIN ?? "",
  gitHub: process.env.NEXT_PUBLIC_ABOUT_GITHUB ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "",
};

const AboutMe = () => {
  return (
    <section className="py-4 bg-white">
      <motion.div
        className="container mx-auto px-4 max-w-3xl text-center"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
            About Me
          </span>
        </motion.h2>

        <motion.h3
          className="text-2xl md:text-3xl text-gray-700 font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          {aboutMe.header}
        </motion.h3>

        <motion.p
          className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
        >
          {aboutMe.body}
        </motion.p>

        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href={aboutMe.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-secondary transition-colors"
          >
            <FaLinkedinIn size={32} />
          </a>
          <a
            href={aboutMe.gitHub}
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
            aria-label="GitHub"
          >
            <IoLogoGithub size={32} />
          </a>
          <a
            href={aboutMe.whatsapp}
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
            aria-label="Twitter"
          >
            <FaWhatsapp size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;