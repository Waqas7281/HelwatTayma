// src/stores/useLanguageStore.js
import { create } from "zustand";

export const useLanguageStore = create((set, get) => {
  // Load language from localStorage on initialization, default to 'en' if not found
  const savedLanguage = localStorage.getItem("language") || "en";

  return {
    language: savedLanguage,
    toggleLanguage: () =>
      set((state) => {
        const newLanguage = state.language === "en" ? "ar" : "en";
        // Save the new language to localStorage
        localStorage.setItem("language", newLanguage);
        return { language: newLanguage };
      }),
  };
});
