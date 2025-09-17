// src/components/Header.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "../store/useThemeStore";
import { useLanguageStore } from "../store/useLanguageStore";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { language, toggleLanguage } = useLanguageStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-secondary"
        >
          {language === "en" ? "Helwat Tayma" : "حلوة تيماء"}
        </motion.div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-secondary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-4">
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
        {/* Theme and Language Toggles for Desktop */}
        <div className="hidden md:flex space-x-2">
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

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          >
            <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 p-4 shadow-lg z-30 transform transition-transform duration-300">
              <button
                onClick={toggleSidebar}
                className="text-secondary mb-4 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <nav className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="hover:text-secondary transition-colors"
                  onClick={toggleSidebar}
                >
                  {language === "en" ? "About" : "عننا"}
                </a>
                <a
                  href="#services"
                  className="hover:text-secondary transition-colors"
                  onClick={toggleSidebar}
                >
                  {language === "en" ? "Services" : "خدماتنا"}
                </a>
                <a
                  href="#deals"
                  className="hover:text-secondary transition-colors"
                  onClick={toggleSidebar}
                >
                  {language === "en" ? "Best Deals" : "أفضل العروض"}
                </a>
                <a
                  href="#contact"
                  className="hover:text-secondary transition-colors"
                  onClick={toggleSidebar}
                >
                  {language === "en" ? "Contact" : "اتصل بنا"}
                </a>
              </nav>
              <div className="mt-4 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    toggleLanguage();
                    toggleSidebar();
                  }}
                  className="px-2 py-1 bg-secondary text-white rounded"
                >
                  {language === "en" ? "AR" : "EN"}
                </button>
                <button
                  onClick={() => {
                    toggleTheme();
                    toggleSidebar();
                  }}
                  className="px-2 py-1 bg-secondary text-white rounded"
                >
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
