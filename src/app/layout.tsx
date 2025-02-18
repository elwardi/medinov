"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react"

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <html lang="fr">
      <head>
        <title>MEDEX INNOV</title>
      </head>
      <body className="bg-gray-100">
        {/* Navbar */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"}`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo Medex Innov"
                width={100}
                height={40}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            
            {/* Menu desktop */}
            <ul className="hidden md:flex space-x-6">
              {["Accueil", "Nos Services", "À Propos", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    href={
                      item === "Accueil" ? "/" :
                      item === "Nos Services" ? "/services" :
                      item === "À Propos" ? "/about" :
                      item === "Contact" ? "/contact" :
                      `/${item.toLowerCase().replace(/\s/g, "")}`
                    }
                    className="text-gray-700 hover:text-blue-500 transition-colors duration-300 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Menu burger pour mobile */}
            <button
              className="md:hidden text-gray-700 focus:outline-none text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Menu mobile plein écran */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50"
            >
              <motion.div className="relative w-80 bg-white rounded-lg shadow-xl p-6 space-y-4 text-center">
                <button
                  className="absolute top-4 right-4 text-gray-700 text-2xl"
                  onClick={() => setIsOpen(false)}
                >
                  ✕
                </button>
                <ul>
                  {["Accueil", "Nos Services", "À Propos", "Contact"].map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={
                          item === "Accueil" ? "/" :
                          item === "Nos Services" ? "/services" :
                          item === "À Propos" ? "/about" :
                          item === "Contact" ? "/contact" :
                          `/${item.toLowerCase().replace(/\s/g, "")}`
                        }
                        className="block p-3 text-gray-700 hover:text-blue-600 rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenu dynamique */}
        <main>{children}</main>
         {/* Footer */}
         <footer className="bg-gradient-to-br from-[#2D3748] via-[#4A5568] to-[#D4AF37] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo et description */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo"
              width={128}
              height={40}
              className="w-32 mx-auto md:mx-0"
            />
            <p className="mt-4 text-gray-400">
              &quot;Nous innovons pour une meilleure santé numérique.&quot;
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D4AF37]">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "Nos Services", path: "/services" },
                { label: "À Propos", path: "/about" },
                { label: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`${link.path}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#D4AF37]">
              Connectez-vous
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: <FaFacebookF />, color: "#3b5998" },
                { icon: <FaTwitter />, color: "#1DA1F2" },
                { icon: <FaLinkedinIn />, color: "#0077B5" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ color: social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          className="text-center text-gray-400 text-sm mt-10 pt-6 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Medex Innov. Tous droits réservés.<br />
          <span className="text-xs">Design by Elwardi Youssef</span>
        </motion.div>
      </div>
    </footer>
    <Analytics/>
      </body>
    </html>
    
  );
}
