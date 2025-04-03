"use client";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  // Initialize state based on the current HTML lang attribute
  const [language, setLanguage] = useState<"en" | "es">(() => {
    // This will run only on the client side during component initialization
    if (typeof document !== "undefined") {
      return document.documentElement.lang === "es" ? "es" : "en";
    }
    return "en"; // Default fallback
  });

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  // Update the HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 bg-secondary/20 text-foreground rounded-full hover:bg-secondary/30 transition duration-300 ease-in-out"
      aria-label={`Switch to ${
        language === "en" ? "Spanish" : "English"
      } language`}
    >
      <span className="text-xs font-medium">
        {language === "en" ? "ES" : "EN"}
      </span>
    </button>
  );
}
