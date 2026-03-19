import {
  SiNodedotjs,
  SiTypescript,
  SiDocker,
  SiKubernetes,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGithubactions,
  SiExpress,
  SiRedis,
  SiRabbitmq,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { GiBull } from "react-icons/gi";
import type { IconType } from "react-icons";

interface Tech {
  name: string;
  icon: IconType;
}

interface Category {
  title: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    title: "Frontend",
    techs: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Express", icon: SiExpress },
      { name: "Redis", icon: SiRedis },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "BullMQ", icon: GiBull },
    ],
  },
  {
    title: "Databases",
    techs: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "DevOps / Infrastructure",
    techs: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "CI / CD", icon: SiGithubactions },
      { name: "AWS", icon: FaAws },
    ],
  },
  {
    title: "Testing",
    techs: [
      { name: "Jest", icon: SiJest },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-blue-50/50 to-white" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Tech Stack
        </h2>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-lg font-semibold text-foreground md:text-xl">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <tech.icon className="text-xl" />
                    </div>
                    <p className="font-medium text-foreground">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
