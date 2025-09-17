// src/components/Header.jsx
import React from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import { useLanguageStore } from "../store/useLanguageStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-secondary"
        >
          Helwat Tayma
        </motion.div>
        <nav className="flex space-x-4">
          <a href="#about" className="hover:text-secondary transition-colors">
            {language === "en" ? "About" : "عننا"}
          </a>
          <a
            href="#services"
            className="hover:text-secondary transition-colors"
          >
            {language === "en" ? "Services" : "خدماتنا"}
          </a>
          <a href="#deals" className="hover:text-secondary transition-colors">
            {language === "en" ? "Best Deals" : "أفضل العروض"}
          </a>
          <a href="#contact" className="hover:text-secondary transition-colors">
            {language === "en" ? "Contact" : "اتصل بنا"}
          </a>
        </nav>
        <div className="flex space-x-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 bg-secondary text-white rounded"
          >
            {language === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="px-2 py-1 bg-secondary text-white rounded"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
