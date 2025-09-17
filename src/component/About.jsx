// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const About = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  return (
    <section id="about" className={`py-16 ${isArabic ? "rtl" : ""}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {isArabic ? "عننا" : "About Us"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg"
        >
          {isArabic
            ? "شركة هلوات تيماء تتخصص في تصميم وتصنيع المنازل المتنقلة في مختلف أنحاء المملكة العربية السعودية. نقدم وحدات سكنية عالية الجودة، متينة، وقابلة للتخصيص، ومالئمة للاحتياجات المناخ المحلي، لتوفر الراحة والاستدامة في جميع الاستخدامات السكنية والتجارية."
            : "Helwat Tayma specializes in modular and portable housing solutions across Saudi Arabia. We design and manufacture durable, customizable, and climate-ready homes for residential, commercial, and emergency use."}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
