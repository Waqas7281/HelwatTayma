// src/App.jsx
import React, { useEffect } from "react";
import "./index.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import BestDeals from "./component/BestDeals";
import Contact from "./component/Contact";
import ErrorBoundary from "./component/ErrorBoundary";
import { useThemeStore } from "./store/useThemeStore";
import { useLanguageStore } from "./store/useLanguageStore";

function App() {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (language === "ar") {
      document.body.classList.add("rtl");
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    } else {
      document.body.classList.remove("rtl");
      document.documentElement.setAttribute("dir", "ltr");
      document.documentElement.setAttribute("lang", "en");
    }
  }, [language]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Hero />
          <About />
          <Services />
          <BestDeals />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
