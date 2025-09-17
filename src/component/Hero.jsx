// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const Hero = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";
 
  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs (replace with your actual paths)
  const images = [
    "img1.jpeg",
    "img2.jpeg",
    "img3.jpeg",
    "img4.jpeg",
    "img5.jpeg",
    "img6.jpeg",
    "img7.jpeg",
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants for fade/slide
  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div
      className={`relative h-screen flex items-center justify-center overflow-hidden ${
        isArabic ? "rtl" : ""
      }`}
    >
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentSlide]})`,
          }}
        />
      </AnimatePresence>

      {/* Content on top */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary">
          {isArabic
            ? "منزل متنقل. بني بسرعة. بني ليدوم."
            : "Portable House. Built Fast. Built to Last."}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300">
          {isArabic
            ? "حياة ذكية معيارية - في أي وقت، في أي مكان"
            : "Smart Modular Living — Anytime, Anywhere"}
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
