import React from "react";
import { motion } from "framer-motion";

export default function PlovCoinLanding() {
  return (
    <div className="bg-yellow-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-b from-orange-200 to-yellow-100">
        <motion.img
          src="/logo.png"
          alt="PlovCoin logo"
          className="mx-auto w-32 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          PlovCoin — Вкус хайпа
        </motion.h1>
        <p className="text-xl mb-6">Мемкойн с душой, казаном и блокчейном</p>
        <div className="flex justify-center gap-4">
          <a href="#whitepaper" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-2xl shadow transition">Whitepaper</a>
          <a href="#buy" className="border border-orange-500 hover:bg-orange-100 px-6 py-2 rounded-2xl transition">Купить $PLOV</a>
        </div>
      </section>
      
    </div>
  );
}
