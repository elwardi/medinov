"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react"
import Loader from "./components/Loader";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
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
  
  useEffect(() => {
    // Simulation du temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="fr">
      <head>
        <title>MEDEX INNOV</title>
        <style jsx global>{`
          :root {
            --primary-color: #18A5A7;
            --secondary-color: #BFFFC7;
          }
        `}</style>
      </head>
      <body className="bg-gray-50">
        {isLoading && <Loader />}
        {/* Navbar */}
        <nav 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
              ? "bg-white/95 backdrop-blur-md shadow-md" 
              : "bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7]"
          }`}
        >
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo Medex Innov"
                  width={130}
                  height={50}
                  className={`cursor-pointer transition-all duration-300 ${
                    isScrolled ? "brightness-100" : "brightness-[1.15] contrast-[1.1]"
                  }`}
                />
              </div>
            </Link>
            
            {/* Menu desktop */}
            <ul className="hidden md:flex space-x-8">
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
                    className={`font-medium transition-colors duration-300 relative group ${
                      isScrolled ? "text-gray-700 hover:text-[#18A5A7]" : "text-white hover:text-white"
                    }`}
                  >
                    {item}
                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-[#18A5A7]" : "bg-white"
                    }`}></span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/rendez-vous"
                  className={`ml-6 px-4 py-2 rounded-full transition-colors duration-300 ${
                    isScrolled 
                      ? "bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] text-white hover:shadow-md" 
                      : "bg-white text-[#18A5A7] hover:bg-opacity-90 hover:shadow-md"
                  }`}
                >
                  Prendre RDV
                </Link>
              </li>
            </ul>

            {/* Menu burger pour mobile */}
            <button
              className={`md:hidden focus:outline-none text-2xl ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
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
              <motion.div 
                className="relative w-80 bg-white rounded-2xl shadow-xl p-8 space-y-6 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-[#18A5A7] to-[#BFFFC7] rounded-t-2xl flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Logo Medex Innov"
                    width={100}
                    height={40}
                    className="brightness-[1.15] contrast-[1.1]"
                  />
                  <button
                    className="absolute top-4 right-4 text-white text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    ✕
                  </button>
                </div>
                <ul className="mt-12">
                  {["Accueil", "Nos Services", "À Propos", "Contact"].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="py-2"
                    >
                      <Link
                        href={
                          item === "Accueil" ? "/" :
                          item === "Nos Services" ? "/services" :
                          item === "À Propos" ? "/about" :
                          item === "Contact" ? "/contact" :
                          `/${item.toLowerCase().replace(/\s/g, "")}`
                        }
                        className="block p-3 text-gray-700 hover:text-[#18A5A7] font-medium rounded-lg transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6"
                  >
                    <Link
                      href="/rendez-vous"
                      className="block w-full p-3 bg-gradient-to-r from-[#18A5A7] to-[#8BDDC9] text-white font-medium rounded-full transition-all duration-300 hover:shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Prendre RDV
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenu dynamique */}
        <main className="pt-16">{children}</main>
        
        {/* Footer */}
        <footer className="bg-gradient-to-br from-[#18A5A7] to-[#BFFFC7] text-white py-12">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              {/* Logo et description */}
              <div>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={150}
                  height={55}
                  className="w-36 mx-auto md:mx-0 brightness-[1.15] contrast-[1.1]"
                />
                <p className="mt-4 text-white/80">
                  &quot;Nous innovons pour une meilleure santé numérique.&quot;
                </p>
              </div>

              {/* Liens rapides */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Navigation
                </h3>
                <ul className="space-y-3">
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
                        className="text-white/80 hover:text-white transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Connectez-vous
                </h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  {[
                    { icon: <FaFacebookF />, label: "Facebook" },
                    { icon: <FaTwitter />, label: "Twitter" },
                    { icon: <FaLinkedinIn />, label: "LinkedIn" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      aria-label={social.label}
                      className="p-3 rounded-full bg-white text-[#18A5A7] shadow-sm hover:shadow-md hover:bg-white/90 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <motion.div
              className="text-center text-white/80 text-sm mt-10 pt-6 border-t border-white/20"
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