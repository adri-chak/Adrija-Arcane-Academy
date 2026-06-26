const projects = [
  {
    title: "ResearchPilot",
    type: "Agentic AI Artifact",
    link: "https://research-pilot-gilt.vercel.app",
  },
  {
    title: "Weather App",
    type: "Weather Divination System",
    link: "https://weather-app-wine-eight-79.vercel.app/",
  },
  {
    title: "SMS Spam Classifier",
    type: "Message Protection Spell",
    link: "https://sms-spam-classifier-wwn7.onrender.com",
  },
  {
    title: "Internship Agent",
    type: "Autonomous Opportunity Scout",
    link: "#",
  },
  {
    title: "Medical Chatbot",
    type: "Healing Assistant",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 py-32 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-emerald-400 uppercase tracking-[0.3em] mb-4">
          Magical Artifacts
        </p>

        <h2 className="text-5xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
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
                hover:-translate-y-3
                hover:border-emerald-400
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-8">
                {project.type}
              </p>

              <span className="text-emerald-300">
                Open Artifact →
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}