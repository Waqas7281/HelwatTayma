// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const Hero = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  return (
    <section
      className={`h-screen flex items-center justify-center bg-cover bg-center ${
        isArabic ? "rtl" : ""
      }`}
      style={{
        backgroundImage:
          "ur[](https://placehold.co/1920x1080?text=Portable+House)",
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
