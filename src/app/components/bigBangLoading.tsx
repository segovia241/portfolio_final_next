"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Definir el tipo para las props, especificando que onAnimationComplete es una función opcional
interface BigBangLoadingProps {
  duration?: number;
  onAnimationComplete?: () => void; // Tipo para la función de callback
}

const BigBangLoading: React.FC<BigBangLoadingProps> = ({
  duration = 1500,
  onAnimationComplete,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-background flex justify-center items-center overflow-hidden">
      {/* Fondo de la animación */}
      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: duration / 2000,
          ease: "easeInOut",
        }}
      />

      {/* Líneas o elementos flotantes */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-primary"
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) rotate(${index * 72}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.3, 0.6, 0.8, 0.2, 0],
            scale: [0, 0.6, 0.9, 1.2, 0.8, 0],
            rotate: [0, 10, -10, 20, -20, 360],
            x: [0, -40, 80, -100, 120, 0],
            y: [0, -40, 60, -80, 100, 0],
          }}
          transition={{
            duration: (duration / 1000) * (index + 1),
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Puntos que se desvanecen suavemente */}
      <motion.div
        className="absolute bg-primary"
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0, 0.2, 0.4, 0.6, 0.8, 0],
          scale: [0.5, 0.7, 1, 1.5, 1, 0],
        }}
        transition={{
          duration: duration / 1000,
          ease: "easeInOut",
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
};

export default BigBangLoading;
