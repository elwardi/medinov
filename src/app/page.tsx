"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];
const activities = [
  { title: "Faciliter l’accès aux produits et services de santé", image: "/telemedecine.jpg" },
  { title: "Offrir des services de consultation et formation", image: "/pharmacie.jpg" },
  { title: "Développer la recherche et l’innovation", image: "/suivi.jpg" },
  { title: "Promouvoir l’évaluation des technologies de santé", image: "/digital.jpg" },
  { title: "Organisation de séminaires, congrès scientifiques", image: "/network.jpg" },
  { title: "Conseil et d’accompagnement évènementiel", image: "/doctor.jpg" },
  { title: "Offrir des services de conseil stratégique", image: "/global.jpg" },
];
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <main>
      <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-gray-100 overflow-hidden">
      {/* Section Hero */}
      <div className="absolute inset-0 md:hidden">
        <AnimatePresence mode="wait">
          <Image
            key={images[currentImage]}
            src={images[currentImage]}
            alt="Illustration santé"
            fill
            className="object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      </div>

      {/* Conteneur principal */}
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center bg-white shadow-2xl rounded-3xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contenu textuel */}
        <div className="w-full md:w-1/2 text-center md:text-left p-10">
          <motion.h1
            className="text-6xl font-extrabold text-gray-900 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MEDEX INNOV
          </motion.h1>
          <motion.p
            className="mt-6 text-gray-800 text-justify text-lg leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Notre société est spécialisée dans le domaine de la santé &apos; faciliter l&apos;accès...
          </motion.p>

          {/* Bouton centré en dessous */}
          <motion.a
            href="#activities"
            className="mt-8 inline-block px-10 py-4 bg-[#D4AF37] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#B89E2E] hover:shadow-lg transition transform hover:-translate-y-1 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Découvrir nos services
          </motion.a>
        </div>

        {/* Image à droite en mode desktop */}
        <div className="w-full md:w-1/2 h-[450px] relative hidden md:block overflow-hidden">
          <AnimatePresence mode="wait">
            <Image
              key={images[currentImage]}
              src={images[currentImage]}
              alt="Illustration santé"
              fill
              className="object-cover"
            />
          </AnimatePresence>
        </div>
      </motion.div>
      </div>
      <section  id="activities" className="relative min-h-screen flex items-center justify-center py-16 px-6 mt-0 pt-30 bg-gray-100 overflow-hidden">
      <div  className="container mx-auto text-center">
        {/* Titre de la section */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nos Activités
        </motion.h2>
        <motion.p
          className="text-gray-700 mt-4 mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Découvrez nos principales activités et services innovants
        </motion.p>

        {/* Slider des activités */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          className="pb-10"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative bg-white/90 backdrop-blur-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full w-[90%] mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                {/* Image avec effet */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Texte de l’activité */}
                <div className="p-4 text-center flex-grow flex items-center justify-center bg-white rounded-b-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 drop-shadow-sm">
                    {activity.title}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Section CTA */}
        <motion.div
          className="mt-16 flex flex-col md:flex-row justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Bouton Services */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#B89E2E] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Link
              href={`/services`}
              className="relative px-12 py-4 bg-[#D4AF37] text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="text-xl">🔍</span>
              Voir tous nos services
            </Link>
          </motion.div>

          {/* Bouton Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <Link
              href={`/contact`}
              className="relative px-12 py-4 bg-gray-800 text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="text-xl">📧</span>
              Contactez notre équipe
            </Link>
          </motion.div>
        </motion.div>

        {/* Style personnalisé */}
        <style jsx>{`
          .swiper-pagination-bullet {
            display: none !important;
          }
          .swiper-button-next, .swiper-button-prev {
            color: rgba(128, 128, 128, 0.7) !important;
          }
          .group:hover .blur {
            animation: gradient-pulse 2s infinite;
          }
          @keyframes gradient-pulse {
            0% { opacity: 0.3; }
            50% { opacity: 0.6; }
            100% { opacity: 0.3; }
          }
        `}</style>
      </div>
      </section>
      
    </main>
    
  );
}