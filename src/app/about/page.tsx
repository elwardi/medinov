
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Section Hero */}
      <section className="relative h-[60vh] bg-gradient-to-r from-[#2D3748] to-[#4A5568]">
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#D4AF37] mb-6 drop-shadow-2xl">
              Notre Histoire
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Pionniers dans l'innovation santé depuis 2015
            </p>
          </motion.div>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* Section Notre ADN */}
      <section className="py-24 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/about-dna.jpg"
              alt="Notre équipe"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              <span className="text-[#D4AF37]">L'ADN</span> Medex Innov
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Fondée par des passionnés de santé digitale, Medex Innov allie 
              expertise médicale et excellence technologique pour révolutionner 
              l'accès aux soins.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#D4AF37]">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Innovation Continue
                  </h3>
                  <p className="text-gray-600">
                    Développement de solutions avant-gardistes pour la santé de demain
                  </p>
                </div>
              </div>
              {/* Répéter le même pattern pour les autres valeurs */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Chiffres clés */}
      <section className="bg-[#2D3748] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "7+", label: "Ans d'expérience" },
            { number: "150+", label: "Projets réalisés" },
            { number: "98%", label: "Satisfaction clients" },
            { number: "40+", label: "Partenaires stratégiques" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6"
            >
              <div className="text-5xl font-bold text-[#D4AF37] mb-4">
                {item.number}
              </div>
              <div className="text-gray-300 text-lg">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-16"
          >
            Rencontrez notre <span className="text-[#D4AF37]">équipe</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Nadia hermani", role: "CEO & Fondateur", image: "/team1.jpg" },
              { name: "Dr. ....", role: "Directeur Scientifique", image: "/" },
              { name: "Dr. ......", role: "Directrice Innovation", image: "/" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 text-left">
                  <h3 className="text-2xl text-white font-bold">{member.name}</h3>
                  <p className="text-[#D4AF37]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Prêt à transformer la santé avec nous ?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-12 py-4 bg-[#D4AF37] text-white text-lg font-semibold rounded-full hover:bg-[#B89E2E] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Prendre contact
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );}