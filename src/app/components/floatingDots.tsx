"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingDots = ({ count = 20 }) => {
  const [dots, setDots] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generar puntos con posiciones y tamaños aleatorios
    const generateDots = () => {
      return Array.from({ length: count }).map(() => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 8 + 8, // Tamaño entre 30 y 50px
        delay: Math.random() * 2, // Retardo en la animación
      }));
    };

    setDots(generateDots());
  }, [count]);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-primary blur-xs opacity-50"
          style={{
            width: dot.size,
            height: dot.size,
            top: dot.y, // Ya no depende del scroll
            left: dot.x,
          }}
          animate={{
            scale: [1, 2, 1], // Escala entre 1 y 1.5 para simular crecimiento y decrecimiento
            opacity: [0.3, 3, 0.3], // Cambia la opacidad para simular iluminación
          }}
          transition={{
            duration: 6, // Duración de la animación
            repeat: Infinity, // Repetir infinitamente
            ease: "easeInOut", // Transición suave
            delay: dot.delay, // Retardo aleatorio en la animación de cada punto
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDots;
