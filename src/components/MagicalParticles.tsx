"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "20%", size: 4 },
  { left: "25%", top: "75%", size: 6 },
  { left: "40%", top: "30%", size: 3 },
  { left: "60%", top: "80%", size: 5 },
  { left: "75%", top: "25%", size: 4 },
  { left: "90%", top: "60%", size: 6 },
  { left: "15%", top: "50%", size: 5 },
  { left: "50%", top: "15%", size: 3 },
  { left: "70%", top: "45%", size: 4 },
  { left: "85%", top: "10%", size: 5 },
];

export default function MagicalParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-emerald-400"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}