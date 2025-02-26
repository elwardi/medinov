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
  { title: "Offrir des services de consultation et formation", image: "/pharmacie.jpg" },
  { title: "Développer la recherche et l'innovation", image: "/suivi.jpg" },
  { title: "Promouvoir l'évaluation des technologies de santé", image: "/digital.jpg" },
  { title: "Organisation de séminaires, congrès scientifiques", image: "/network.jpg" },
  { title: "Accompagnement évènementiel", image: "/doctor.jpg" },
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
      {/* Section Hero */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-white to-[#E6FFEF] overflow-hidden">
        {/* Image de fond pour mobile */}
        <div className="absolute inset-0 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={images[currentImage]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full"
            >
              <Image
                src={images[currentImage]}
                alt="Illustration santé"
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#18A5A7]/60 to-[#BFFFC7]/60 backdrop-blur-sm"></div>
        </div>

        {/* Conteneur principal */}
        <motion.div
          className="container mx-auto flex flex-col md:flex-row items-center bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl overflow-hidden relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Contenu textuel */}
          <div className="w-full md:w-1/2 text-center md:text-left p-10">
            <motion.h1
              className="text-5xl md:text-5xl font-extrabold text-[#62999a] drop-shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              MEDEX INNOV
            </motion.h1>
            <motion.div
              className="mt-6 text-gray-700 text-justify text-lg leading-relaxed"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-normal md:font-bold text-[#18A5A7]">Votre expert en consulting pour les services et produits de santé :</p>
              <p className="mt-2">Chez MEDEX INNOV Consulting, nous mettons notre expertise au service
               des entreprises et des professionnels du secteur de la santé. Spécialisés dans le conseil stratégique, nous vous accompagnons dans l&apos;optimisation de vos services de santé et la sélection de produits de qualité, afin d&apos;améliorer les performances, la sécurité et le bien-être des patients ou de vos clients.</p>
            </motion.div>

            {/* Bouton */}
            <motion.a
              href="#activities"
              className="mt-8 inline-block px-10 py-4 bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-1 active:scale-95"
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
              <motion.div
                key={images[currentImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="h-full w-full"
              >
                <Image
                  src={images[currentImage]}
                  alt="Illustration santé"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#18A5A7]/20 to-[#BFFFC7]/20"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Section Activités */}
      <section id="activities" className="relative min-h-screen flex items-center justify-center py-16 px-6 mt-0 pt-30 bg-gradient-to-b from-[#E6FFEF] to-white overflow-hidden">
        <div className="container mx-auto text-center">
          {/* Titre de la section */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#18A5A7] drop-shadow-sm">
              Nos Activités
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 mb-8 text-lg max-w-2xl mx-auto">
              Découvrez nos principales activités et services innovants pour améliorer votre écosystème de santé
            </p>
          </motion.div>

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
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {activities.map((activity, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative bg-white rounded-2xl overflow-hidden shadow-md transition duration-300 hover:shadow-xl flex flex-col h-full w-[90%] mx-auto"
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Image avec effet */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18A5A7]/70 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>
                  </div>

                  {/* Texte de l'activité */}
                  <div className="p-6 text-center flex-grow flex items-center justify-center bg-gradient-to-br from-white to-[#F4FFF8] rounded-b-2xl">
                    <h3 className="text-lg font-semibold text-[#18A5A7]">
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Link
                href={`/services`}
                className="relative px-12 py-4 bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] text-white text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#18A5A7]/30 to-[#BFFFC7]/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Link
                href={`/contact`}
                className="relative px-12 py-4 bg-white border border-[#18A5A7] text-[#18A5A7] text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-xl">📧</span>
                Contactez notre équipe
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Style personnalisé */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #18A5A7;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #18A5A7;
          opacity: 1;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #18A5A7 !important;
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
    </main>
  );
}