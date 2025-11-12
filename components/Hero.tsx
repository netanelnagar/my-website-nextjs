'use client';

import Link from "next/link";
import myImage from "../public/my-img.png";
import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      <motion.div
        className="absolute top-20 right-10 hidden md:grid grid-cols-3 gap-2"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primary rounded-full opacity-60" />
        ))}
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 hidden md:grid grid-cols-3 gap-2"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-secondary rounded-full opacity-60" />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between z-20">
        <motion.div
          className="lg:w-1/2 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            DESIGN · DEVELOPMENT · MARKETING
          </div>

          <h2 className="text-gray-600 text-xl md:text-2xl font-medium">
            I can help your business to
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">Get online and
              grow fast</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Link
              href="/resume"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"

            >
              Resume
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border-2 border-gray-200 text-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Projects
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative min-h-64">
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-4xl transform rotate-6 opacity-20"
              animate={{ rotate: [4, 6, 4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              loading="lazy"
              src={myImage}
              alt={"my-img"}
              width={640}
              height={640}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4nGP4//8/AwAI/AL+7VSuVQAAAABJRU5ErkJggg=="
              className="relative rounded-4xl w-full max-w-lg mx-auto img-fade-in object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;