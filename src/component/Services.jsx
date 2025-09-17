// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const servicesEn = [
  "Rapid installation — ready within days",
  "Strong galvanized steel frame structure",
  "Thermal insulation for Saudi climate",
  "Customizable floor plans & finishes",
  "Easy transport and relocation",
  "Full technical support & after-sales service",
];

const servicesAr = [
  "تركيب سريع — جاهز خلال أيام قليلة",
  "هيكل قوي من الفولاذ المجلفن",
  "عزل حراري مناسب للمناخ السعودي",
  "مخططات داخلية ومساحات قابلة للتخصيص مع تشطيبات متنوعة",
  "سهولة النقل وإعادة التركيب في أي موقع",
  "دعم فني متكامل وخدمات ما بعد البيع",
];

const Services = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";
  const services = isArabic ? servicesAr : servicesEn;

  return (
    <section
      id="services"
      className={`py-16 bg-gray-100 dark:bg-gray-700 ${isArabic ? "rtl" : ""}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {isArabic ? "خدماتنا" : "Our Services"}
        </motion.h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition-shadow"
            >
              {service}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
