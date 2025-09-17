// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const Hero = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs from the brochure (replace with actual paths or URLs)
  const images = [
    "img1.jpeg", // House with windows (top-left image)
    "img2.jpeg", // House with debris (middle-left image)
    "img3.jpeg", // House with tree (middle-right image)
    "img4.jpeg", // House with patio (bottom-left image)
    "img5.jpeg", // House with lights (bottom-right image)
    "img6.jpeg", // Additional house (if available)
    "img7.jpeg", // Additional house (if available)
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Animation variants for smooth sliding
  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      key={currentSlide} // Key forces re-render on slide change
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }} // Smooth transition duration
      className={`h-screen flex items-center justify-center bg-cover bg-center ${
        isArabic ? "rtl" : ""
      }`}
      style={{
        backgroundImage: `url(${images[currentSlide]})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
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
    </motion.div>
  );
};

export default Hero;
