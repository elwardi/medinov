"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 bg-white z-[9999] flex items-center justify-center"
    >
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute w-full h-full border-4 border-[#D4AF37] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.5,
            ease: "linear",
            repeat: Infinity
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-[#2D3748]">MEDEX</span>
        </div>
      </div>
    </motion.div>
  );
}