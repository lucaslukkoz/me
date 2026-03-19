import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-50 via-white to-blue-100" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Photo */}
        <div className="relative mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-primary shadow-lg ring-4 ring-blue-100 md:h-52 md:w-52">
          <Image
            src="/minha-foto.jpg"
            alt="Lucas — profile photo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name & tagline */}
        <h1 className="text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Lucas
        </h1>
        <p className="mt-3 max-w-lg text-center text-lg text-muted md:text-xl">
          Full-Stack Developer building modern, scalable web applications that solve real-world problems.
        </p>

        {/* Social links */}
        <div className="mt-6 flex items-center gap-5">
          <a
            href="https://github.com/lucaslukkoz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full bg-foreground p-3 text-white transition-all hover:scale-110 hover:bg-primary"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-linss/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full bg-foreground p-3 text-white transition-all hover:scale-110 hover:bg-primary"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
