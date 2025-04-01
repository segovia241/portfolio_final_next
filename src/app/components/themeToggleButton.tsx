"use client";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (!storedTheme) {
      storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    document.documentElement.classList.add(storedTheme);
    setTheme(storedTheme);
  }, []);

  if (!theme) return null;

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-6 py-3 bg-primary text-secondary rounded-xl hover:bg-primary/80 transition duration-300 ease-in-out shadow-md shadow-primary"
    >
      Cambiar a {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
