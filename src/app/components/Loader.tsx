"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.5 }}
      className="fixed inset-0 bg-gradient-to-b from-white to-[#E6FFEF] z-[9999] flex items-center justify-center"
    >
      <div className="relative w-32 h-32">
        {/* Cercle extérieur */}
        <motion.div
          className="absolute w-full h-full border-4 border-[#18A5A7] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
        
        {/* Cercle intérieur */}
        <motion.div
          className="absolute w-3/4 h-3/4 border-4 border-[#8BDDC9] rounded-full"
          style={{ top: "12.5%", left: "12.5%" }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.3
          }}
        />
        
        {/* Logo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className="text-2xl font-extrabold text-[#18A5A7]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            MEDEX
          </motion.span>
          <motion.span 
            className="text-lg font-bold text-[#8BDDC9]"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            INNOV
          </motion.span>
        </div>
        
        {/* Effet de pulsation */}
        <motion.div
          className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#18A5A7]/20 to-[#BFFFC7]/20 blur-md"
          animate={{
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
      </div>
    </motion.div>
  );
}