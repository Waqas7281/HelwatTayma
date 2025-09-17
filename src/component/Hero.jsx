// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const Hero = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  // State to manage the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs from the brochure
  const images = [
    "https://example.com/image1.jpg", // Replace with actual URL of the first image (e.g., the house with windows)
    "https://example.com/image2.jpg", // Replace with actual URL of the second image (e.g., the house with debris)
    "https://example.com/image3.jpg", // Replace with actual URL of the third image (e.g., the house with a tree)
    "https://example.com/image4.jpg", // Replace with actual URL of the fourth image (e.g., the house with a patio)
    "https://example.com/image5.jpg", // Replace with actual URL of the fifth image (e.g., the house with lights)
  ];

  // Auto-slide every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000); // Change slide every 1 second
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section
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
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {isArabic
            ? "منزل متنقل. بني بسرعة. بني ليدوم."
            : "Portable House. Built Fast. Built to Last."}
        </h1>
        <p className="text-xl md:text-2xl">
          {isArabic
            ? "حياة ذكية معيارية - في أي وقت، في أي مكان"
            : "Smart Modular Living — Anytime, Anywhere"}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
