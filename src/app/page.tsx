"use client";

import Hero from "@components/hero";
import About from "@components/about";
import Skills from "@components/skills";
import Projects from "@components/projects";
import Contact from "@components/contact";
import BigBangLoading from "@components/bigBangLoading";
import { useEffect, useState } from "react";
import FloatingDots from "@components/floatingDots";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"; // Bloquea el scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Restaurar el scroll cuando se desmonta
    };
  }, [loading]);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setLoading(false); // Oculta el loading después de la animación
      setTimeout(() => {
        setFadeIn(true); // Activa el fade después de un pequeño retraso
      }, 100); // Ajusta el delay según sea necesario
    }, 300); // Añade un pequeño retraso para suavizar la transición
  };

  return (
    <main className="min-h-screen relative">
      {loading && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-background flex justify-center items-center z-50"
          style={{ pointerEvents: "none" }} // Bloquea la interacción con la página
        >
          <BigBangLoading
            duration={2000}
            onAnimationComplete={handleAnimationComplete}
          />
        </div>
      )}
      <div
        className={`transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <FloatingDots count={20} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
