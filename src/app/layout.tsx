"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./globals.css";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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
      </body>
    </html>
  );
}
