export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-emerald-400 uppercase tracking-[0.3em] mb-4 text-center">
          Owl Post
        </p>

        <h2 className="text-5xl font-bold mb-16 text-center">
          Contact The Enchantress
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="rounded-3xl border border-emerald-500/20 bg-black/30 backdrop-blur-md p-8">

            <h3 className="text-2xl font-bold mb-8 text-emerald-300">
              Communication Portal
            </h3>

            <div className="space-y-6 text-lg text-gray-300">

              <p>
                📧 06adrija@gmail.com
              </p>

              <p>
                📱 7003464458
              </p>

              <p>
                📍 Kolkata
              </p>

            </div>

          </div>

          <div className="rounded-3xl border border-purple-500/20 bg-black/30 backdrop-blur-md p-8">

            <h3 className="text-2xl font-bold mb-8 text-purple-300">
              Arcane Links
            </h3>

            <div className="flex flex-col gap-4">

              <a
                href="https://github.com/adri-chak"
                target="_blank"
                className="rounded-xl border border-emerald-500/30 p-4 transition-all hover:border-emerald-400 hover:bg-emerald-500/10"
              >
                💻 GitHub Repository Vault
              </a>

              <a
                href="https://www.linkedin.com/in/adrija-chakraborty-b62a73247/"
                target="_blank"
                className="rounded-xl border border-blue-500/30 p-4 transition-all hover:border-blue-400 hover:bg-blue-500/10"
              >
                🔗 LinkedIn Network
              </a>

              <a
                href="https://drive.google.com/file/d/1zayALc0VIZHdDHbmUEqv4RUK8uwaf6HJ/view?usp=sharing"
                target="_blank"
                className="rounded-xl border border-amber-500/30 p-4 transition-all hover:border-amber-400 hover:bg-amber-500/10"
              >
                📄 Wizard's Dossier (Resume)
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}