"use client";
import { motion } from "framer-motion";
import MagicalParticles from "@/components/MagicalParticles";
export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen text-white flex items-center justify-center bg-gradient-to-br from-black via-emerald-950 to-purple-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]"></div>
      <MagicalParticles />
      <motion.div
  className="relative z-10 text-center px-6"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
        <p className="mb-4 text-emerald-400 tracking-[0.3em] text-sm uppercase">
          Arcane Academy of Artificial Intelligence
        </p>

        <div className="relative inline-block mb-6">
  <div className="absolute inset-0 blur-3xl bg-emerald-500/30 rounded-full"></div>

  <h1
  className="relative font-[family-name:var(--font-cinzel)] text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_35px_rgba(16,185,129,1)]"
>
  Adrija Chakraborty
</h1>
</div>

        <h2 className="text-xl md:text-2xl text-emerald-300 mb-6">
          AI Witch & Machine Learning Enchantress
        </h2>

        <p className="max-w-2xl text-gray-400 mx-auto mb-10">
          Building intelligent artifacts using Machine Learning, Deep Learning,
          Agentic AI, Reinforcement Learning, Computer Vision and Data Science.
        </p>

        <button className="rounded-full border border-emerald-500 px-8 py-3 text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black">
          Begin The Journey
        </button>
      </motion.div>
    </main>
  );
}