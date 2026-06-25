export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="mb-4 text-emerald-400 tracking-[0.3em] text-sm uppercase">
          Arcane Academy of Artificial Intelligence
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Adrija Chakraborty
        </h1>

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
      </div>
    </main>
  );
}