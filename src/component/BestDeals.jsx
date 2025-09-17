// src/components/BestDeals.jsx
import React from "react";
import { motion } from "framer-motion";
import { useLanguageStore } from "../store/useLanguageStore";

const BestDeals = () => {
  const { language } = useLanguageStore();
  const isArabic = language === "ar";

  return (
    <section id="deals" className={`py-16 ${isArabic ? "rtl" : ""}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          {isArabic ? "أفضل العروض" : "Best Deals"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg"
        >
          {isArabic
            ? "في شركة هلوات تيماء نقدم لكم أفضل العروض على حلول المنازل المتنقلة والمحمولة. منازلنا بأسعار مناسبة، سهلة التركيب، ومصممة لتدوم وتتحمل ظروف المناخ السعودي. سواء كنتم بحاجة إلى وحدة متنقلة واحدة أو إعداد مخيم كامل، نحرص على أن يتم تسليم كل مشروع مع راحة وجودة عالية ومرونة. معنا، توفرون الوقت، تحصلون على بناء موثوق، وتستمتعون بأفضل قيمة لاستثماركم."
            : "At Helwat Tayma, we bring you the best deals on portable and mobile housing solutions. Our homes are affordable, quickly installed, and built to last in the Saudi climate. From a single portable unit to a complete camp setup, we make sure every project is delivered with comfort, quality, and flexibility in mind. With us, you save time, get reliable construction, and enjoy great value for your investment."}
        </motion.p>
      </div>
    </section>
  );
};

export default BestDeals;
