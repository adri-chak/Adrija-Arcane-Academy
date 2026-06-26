"use client";

export default function Navbar() {
  return (
  <nav className="fixed top-0 left-0 w-full z-50">
    <div className="w-full border-b border-emerald-500/20 bg-black/40 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-emerald-300">
            🏰 Arcane Academy
          </h1>

          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            Artificial Intelligence
          </p>
        </div>

        <div className="flex gap-8 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-emerald-300 transition-all">
            About
          </a>

          <a href="#skills" className="hover:text-emerald-300 transition-all">
            Spells
          </a>

          <a href="#projects" className="hover:text-emerald-300 transition-all">
            Artifacts
          </a>

          <a href="#contact" className="hover:text-emerald-300 transition-all">
            Owl Post
          </a>
        </div>
      </div>
    </div>
  </nav>
);
}