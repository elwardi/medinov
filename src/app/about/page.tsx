"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E6FFEF]">
      {/* Section Hero */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/about-hero.jpg"
            alt="Notre histoire"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18A5A7]/60 to-[#BFFFC7]/60 backdrop-blur-sm"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl">
              Notre Histoire
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Pionniers dans l&apos;innovation santé
            </p>
          </motion.div>
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
              <span className="text-[#18A5A7]">L&apos;ADN</span> Medex Innov
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Fondée par des passionnés de santé digitale, Medex Innov allie 
              expertise médicale et excellence technologique pour révolutionner 
              l&apos;accès aux soins.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#18A5A7]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#18A5A7]">⚡</span>
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

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#18A5A7]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#18A5A7]">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Expertise Sectorielle
                  </h3>
                  <p className="text-gray-600">
                    Une équipe de spécialistes santé aux compétences complémentaires
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#18A5A7]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-[#18A5A7]">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Approche Collaborative
                  </h3>
                  <p className="text-gray-600">
                    Partenariat étroit avec nos clients pour des solutions sur mesure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Chiffres clés */}
      <section className="bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] py-20">
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
              className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="text-5xl font-bold text-white mb-4">
                {item.number}
              </div>
              <div className="text-white text-lg">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Équipe */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Rencontrez notre <span className="text-[#18A5A7]">équipe</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Des experts passionnés qui révolutionnent la santé digitale
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Dr. Nadia Hermani", role: "CEO & Fondateur", image: "/team1.jpg" },
              { name: "Dr. Ahmed Benali", role: "Directeur Scientifique", image: "/team2.jpg" },
              { name: "Dr. Sofia Kadiri", role: "Directrice Innovation", image: "/team3.jpg" }
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18A5A7]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-6 left-6 text-left">
                  <h3 className="text-2xl text-white font-bold">{member.name}</h3>
                  <p className="text-white opacity-90">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-b from-[#E6FFEF] to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Prêt à transformer la santé avec nous ?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Link
                href="/contact"
                className="relative inline-block px-12 py-4 bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Prendre contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bouton WhatsApp mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href={`https://wa.me/212663216393?text=${encodeURIComponent("Bonjour MEDEX Innov, je souhaite obtenir plus d'informations sur vos services.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#128C7E] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8 text-white"
          >
            <path
              fill="currentColor"
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}