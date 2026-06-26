const skills = [
  {
    icon: "🪄",
    title: "Machine Learning",
    subtitle: "Advanced Enchantment",
  },
  {
    icon: "🔮",
    title: "Deep Learning",
    subtitle: "Neural Invocation",
  },
  {
    icon: "⚡",
    title: "Agentic AI",
    subtitle: "Autonomous Summoning",
  },
  {
    icon: "📊",
    title: "Data Science",
    subtitle: "Predictive Divination",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    subtitle: "Visual Perception Charm",
  },
  {
    icon: "🤖",
    title: "Natural Language Processing",
    subtitle: "Language Manipulation",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative z-10 py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 uppercase tracking-[0.3em] mb-4">
          Spells & Disciplines
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Arcane Skillbook
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                group
                rounded-3xl
                border
                border-emerald-500/20
                bg-black/30
                backdrop-blur-md
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-emerald-400
              "
            >
              <div className="text-5xl mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {skill.title}
              </h3>

              <p className="text-gray-400">
                {skill.subtitle}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}