// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const Footer = () => {
  const { language } = useLanguageStore();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {language === "en"
            ? "© 2025 Helwat Tayma. All rights reserved."
            : "© 2025 هلوات تيماء. جميع الحقوق محفوظة."}
        </motion.p>
        <p>
          {language === "en"
            ? "Jeddah, Saudi Arabia"
            : "جدة، المملكة العربية السعودية"}
        </p>
        <p>Email: helwattayma@gmail.com</p>
        <p>Phone: +966 503570012 / +966 561861415</p>
      </div>
    </footer>
  );
};

export default Footer;
