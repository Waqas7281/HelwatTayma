// src/components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const Contact = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  return (
    <section
      id="contact"
      className={`py-16 bg-gray-100 dark:bg-gray-700 ${isArabic ? "rtl" : ""}`}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {isArabic ? "اتصل بنا" : "Contact Us"}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg space-y-2"
        >
          <p>
            {isArabic
              ? "الموقع: www.helwattayma.com"
              : "Website: www.helwattayma.com"}
          </p>
          <p>
            {isArabic
              ? "البريد الإلكتروني: helwattayma@gmail.com"
              : "Email: helwattayma@gmail.com"}
          </p>
          <p>
            {isArabic
              ? "العنوان: جدة، المملكة العربية السعودية"
              : "Address: Jeddah, Saudi Arabia"}
          </p>
          <p>
            {isArabic
              ? "الهاتف: +966 503570012 / +966 561861415"
              : "Phone: +966 503570012 / +966 561861415"}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
