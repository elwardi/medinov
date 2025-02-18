"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Section Hero */}
      <div className="w-full h-screen relative overflow-hidden">
        {/* Image de fond pour mobile */}
        <div className="absolute inset-0 w-full h-full md:hidden">
          <Image
            src={images[currentImageIndex]}
            alt={`Hero Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div> {/* Overlay sombre */}
        </div>

        {/* Contenu de la section Hero */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-full relative z-10">
          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center md:text-left mb-8 md:mb-0 text-white md:text-gray-900"
          >
            <h1 className="text-5xl font-bold mb-6">
              Bienvenue chez Nom de la Société
            </h1>
            <p className="text-xl mb-8">
              Nous sommes une entreprise innovante spécialisée dans la santé numérique. Découvrez nos services et solutions pour améliorer votre bien-être.
            </p>
            <Link
              href="/services"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Découvrir nos services
            </Link>
          </motion.div>

          {/* Carrousel d'images à droite (visible uniquement sur desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg hidden md:block"
          >
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Hero Image ${index + 1}`}
                fill
                className={`absolute inset-0 object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}