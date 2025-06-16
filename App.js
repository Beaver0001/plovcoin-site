
import React from "react";
import { motion } from "framer-motion";

export default function PlovCoinLanding() {
  return (
    <div className="bg-yellow-50 text-gray-900 font-sans">
      <section className="text-center py-24 bg-gradient-to-b from-orange-200 to-yellow-100">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          PlovCoin — Вкус хайпа
        </motion.h1>
        <p className="text-xl mb-6">Мемкойн с душой, казаном и блокчейном</p>
      </section>
    </div>
  );
}
