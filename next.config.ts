import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: 'export'
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    domains: ['inkscape.app'], // Añadimos el dominio de la imagen
  },
};

export default nextConfig;
