"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import MagicalParticles from "@/components/MagicalParticles";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import AcceptanceLetter from "@/components/AcceptanceLetter";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-black via-emerald-950 to-purple-950 text-white">

      <Navbar />

      <MagicalParticles />

      {/* HERO */}

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">

        <motion.div
          className="text-center max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >

          <p className="mb-6 text-emerald-400 tracking-[0.35em] text-sm uppercase">
            Arcane Academy of Artificial Intelligence
          </p>

          <div className="relative inline-block mb-8">

            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-3xl"></div>

            <h1 className="relative font-[family-name:var(--font-cinzel)] text-6xl md:text-8xl lg:text-9xl font-bold text-white drop-shadow-[0_0_35px_rgba(16,185,129,1)]">
              Adrija
              <br />
              Chakraborty
            </h1>

          </div>

          <h2 className="text-2xl md:text-4xl text-emerald-300 mb-8">
            AI Witch & Machine Learning Enchantress
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-10">
            Building intelligent artifacts using Machine Learning,
            Deep Learning, Agentic AI, Computer Vision,
            Data Science and Artificial Intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <AcceptanceLetter />

            <button className="rounded-full border border-emerald-500 px-8 py-4 text-emerald-300 transition-all duration-300 hover:bg-emerald-500 hover:text-black">
              ⚡ Enter Academy
            </button>

          </div>

        </motion.div>

      </section>

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />

    </main>
  );
}