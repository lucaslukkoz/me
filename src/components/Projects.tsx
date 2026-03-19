import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "L9Inbox",
    description:
      "I have a project similar to Outlook, where users can add and manage their emails directly in the app. It features sending, replying, forwarding, and organizing emails, as well as attachment previews, favorites, drafts, and a productivity dashboard.",
    techs: ["Node.js", "TypeScript", "Express", "MySQL", "BullMQ", "Docker", "Redis", "CI / CD", "Next.js"],
    live: "http://23.23.68.239/",

  },
  {
    title: "L9Orçamento",
    description:
      "I developed a budgeting application where users can manage their clients and create professional budgets (orçamentos). The app generates a PDF of each budget that can be shared with clients.",
    techs: ["Next.js", "React", "Tailwind CSS", "Node.js", "MySQL", "Sequelize"],
    github: "https://github.com/lucaslukkoz/dashboard-orcamento",
  },
  
  
];

export default function Projects() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          Projects
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-blue-200/70">
          A selection of personal projects that showcase my skills and interests.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blue-400/30 hover:bg-white/10"
            >
              <h3 className="mb-2 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-blue-100/60">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-200/70 transition-colors hover:text-white"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-200/70 transition-colors hover:text-white"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
