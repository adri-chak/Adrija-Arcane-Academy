export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-32 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-emerald-400 uppercase tracking-[0.3em] mb-4">
          The Witch Behind The Magic
        </p>

        <h2 className="text-5xl font-bold mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          <div>
            <div className="h-[350px] w-[350px] mx-auto rounded-full border border-emerald-500/30 bg-black/30 backdrop-blur-md flex items-center justify-center">
              <div className="relative flex items-center justify-center">

                <div className="absolute h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"></div>

                    <div className="relative h-40 w-40 rounded-full border border-emerald-400/40 bg-gradient-to-br from-emerald-400/20 to-purple-500/20 backdrop-blur-md flex items-center justify-center">

                        <span className="text-7xl">
                          🔮
                        </span>

                    </div>

                </div>
            </div>
        </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-300">

            <p>
              I am a BTech engineering student passionate about Artificial
              Intelligence, Machine Learning, Deep Learning,
              Computer Vision, Agentic AI and Data Science.
            </p>

            <p>
              My goal is to build intelligent systems that solve
              real-world problems while combining research,
              creativity and engineering.
            </p>

            <p>
              From machine learning applications to autonomous AI agents,
              I enjoy transforming ideas into impactful digital products.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}