// src/stores/useThemeStore.js
import { create } from "zustand";

export const useThemeStore = create((set, get) => {
  // Load theme from localStorage on initialization, default to 'light' if not found
  const savedTheme = localStorage.getItem("theme") || "light";

  return {
    theme: savedTheme,
    toggleTheme: () =>
      set((state) => {
        const newTheme = state.theme === "light" ? "dark" : "light";
        // Save the new theme to localStorage
        localStorage.setItem("theme", newTheme);
        return { theme: newTheme };
      }),
  };
});
