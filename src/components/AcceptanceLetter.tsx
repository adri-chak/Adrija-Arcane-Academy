"use client";

import { useState } from "react";

export default function AcceptanceLetter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-amber-400 px-8 py-4 text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-black"
      >
        📜 Acceptance Letter
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6">

          <div className="relative max-w-3xl rounded-2xl bg-[#f5e6c8] text-black p-10 shadow-2xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 text-2xl"
            >
              ✕
            </button>

            <div className="text-center">

              <h2 className="text-4xl font-bold mb-4">
                Arcane Academy
              </h2>

              <p className="uppercase tracking-[0.3em] mb-8">
                Artificial Intelligence Division
              </p>

            </div>

            <div className="space-y-6 text-lg leading-relaxed">

              <p>Dear Visitor,</p>

              <p>
                We are pleased to inform you that you have been granted
                admission to the Arcane Academy of Artificial Intelligence.
              </p>

              <p>
                Within these halls you shall discover:
              </p>

              <ul className="space-y-2 pl-6">
                <li>✦ Agentic AI Artifacts</li>
                <li>✦ Machine Learning Spellbooks</li>
                <li>✦ Deep Learning Enchantments</li>
                <li>✦ Data Science Research Scrolls</li>
              </ul>

              <p>
                Headmistress:
                <br />
                <strong>Adrija Chakraborty</strong>
              </p>

            </div>

          </div>

        </div>
      )}
    </>
  );
}