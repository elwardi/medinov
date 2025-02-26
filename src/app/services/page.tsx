"use client";

import { motion } from "framer-motion";
import { 
  FaMicroscope, 
  FaGlobe, 
  FaChartLine, 
  FaCalendarAlt, 
  FaBrain 
} from "react-icons/fa";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: <FaMicroscope className="text-4xl text-[#18A5A7]" />,
      title: "Recherche & Innovation",
      description: "Développement de solutions e-santé",
      image: "/suivi.jpg",
      details: [
        "Études cliniques et précliniques",
        "Développement de logiciels médicaux",
        "Recherche épidémiologique"
      ]
    },
    {
      icon: <FaGlobe className="text-4xl text-[#18A5A7]" />,
      title: "Réseau International",
      description: "Connexion des acteurs de santé mondiaux",
      image: "/network.jpg",
      details: [
        "Organisation de congrès scientifiques",
        "Think tanks stratégiques",
        "Partenariats transnationaux"
      ]
    },
    {
      icon: <FaChartLine className="text-4xl text-[#18A5A7]" />,
      title: "Évaluation Technologique",
      description: "Optimisation des innovations santé",
      image: "/digital.jpg",
      details: [
        "Analyses pharmaco-économiques",
        "Études d'impact stratégique",
        "Benchmarking international"
      ]
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-[#18A5A7]" />,
      title: "Management Évènementiel",
      description: "Gestion complète d'évènements médicaux",
      image: "/global.jpg",
      details: [
        "Planification stratégique",
        "Logistique clé en main",
        "Analyse des retombées"
      ]
    },
    {
      icon: <FaBrain className="text-4xl text-[#18A5A7]" />,
      title: "Conseil Stratégique",
      description: "Accompagnement sur mesure",
      image: "/doctor.jpg",
      details: [
        "Stratégies de financement",
        "Partenariats public-privé",
        "Optimisation R&D"
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-[#E6FFEF] pt-36 px-6">
      <div className="container mx-auto">
        {/* En-tête */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#18A5A7] drop-shadow-sm mb-6">
            Nos Services
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des solutions intégrées pour transformer l&apos;écosystème de santé
          </p>
        </motion.div>

        {/* Détails des services - optimisé pour les performances avec moins d'animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-gradient-to-r from-[#18A5A7]/10 to-[#BFFFC7]/10 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#18A5A7]">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          className="py-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-12 shadow-xl">
                <h2 className="text-3xl font-bold text-[#18A5A7] mb-4">
                  Prêt à transformer votre projet ?
                </h2>
                <p className="text-gray-600 mb-8">
                  Contactez nos experts pour une solution sur mesure
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition transform hover:-translate-y-1 active:scale-95"
                >
                  Planifier une consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}