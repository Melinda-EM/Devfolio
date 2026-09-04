"use client"

import { projects } from "../../data/project"
import { skills } from "../../data/skills"
import { career } from "../../data/career"

export default function CVWindow() {
   const experiences = career
   .filter((item) => item.type === "experience")
   .reverse()

    const formations = career
    .filter((item) => item.type === "formation")
    .reverse()

  return (
    <div className="p-5 h-full overflow-auto font-mono text-[#D8BFD8]">

      <div className="border-2 border-[#8A2BE2] bg-[#1a0033] p-4 mb-5">
        <h1 className="text-2xl font-bold text-white">
          Melinda
        </h1>

        <h2 className="text-xl font-bold text-[#87CEFA]">
          ESTEVES MENDES
        </h2>

        <p className="text-[#D8BFD8] mt-1">
          Développeuse Web Full-Stack
        </p>

        <p className="text-sm leading-relaxed mt-4">
          Développeuse Full-Stack diplômée de la Web@cadémie et
          Accompagnatrice Pédagogique, à transmettre mon savoir et
          guider les étudiants. Spécialisée dans la création
          d’interfaces intuitives et robustes, j’allie compétences
          techniques et vision produit pour participer à la création
          d’expériences innovantes.
        </p>
      </div>


      <section className="border-2 border-[#8A2BE2] p-4 mb-5">
        <h2 className="text-lg font-bold text-[#87CEFA] mb-4">
          COMPÉTENCES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((category) => (
            <div key={category.title}>
              <h3
                className="text-white font-bold mb-2"
                style={{ color: category.color }}
              >
                {category.icon} {category.title}
              </h3>

              <ul className="space-y-1 text-sm">
                {category.skills.map((skill) => (
                  <li key={skill.name}>
                    {skill.icon} {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      <section className="border-2 border-[#8A2BE2] p-4 mb-5">
        <h2 className="text-lg font-bold text-[#87CEFA] mb-4">
          EXPÉRIENCES
        </h2>

        <div className="space-y-4 text-sm">
          {experiences.map((item) => (
            <div key={`${item.period}-${item.title}`}>
              <h3 className="text-white font-bold">
                {item.title} — {item.period}
              </h3>

              <p className="mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="border-2 border-[#8A2BE2] p-4 mb-5">
        <h2 className="text-lg font-bold text-[#87CEFA] mb-4">
          FORMATION
        </h2>

        <div className="space-y-4 text-sm">
          {formations.map((item) => (
            <div key={`${item.period}-${item.title}`}>
              <h3 className="text-white font-bold">
                {item.title}
              </h3>

              <p className="text-[#87CEFA]">
                {item.period}
              </p>

              <p className="mt-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="border-2 border-[#8A2BE2] p-4 mb-5">
        <h2 className="text-lg font-bold text-[#87CEFA] mb-4">
          PROJETS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a0033] border border-[#8A2BE2] p-3"
            >
              <h3 className="text-white font-bold">
                {project.title}
              </h3>

              <p className="text-xs text-[#87CEFA] mt-1">
                {project.tech.join(" / ")}
              </p>

              <p className="text-sm mt-2">
                {project.description}
              </p>

              <p className="text-xs text-[#aaa] mt-2">
                Durée : {project.duration}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="border-2 border-[#8A2BE2] p-4 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <h2 className="text-lg font-bold text-[#87CEFA] mb-3">
              LANGUES
            </h2>

            <p className="text-sm">
              Anglais — B2
            </p>

            <p className="text-sm">
              Espagnol — A2
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#87CEFA] mb-3">
              CENTRES D’INTÉRÊT
            </h2>

            <p className="text-sm">
              Jeux vidéos · Cuisine · Photographie · Lecture
            </p>
          </div>

        </div>
      </section>


      <div className="flex justify-center py-3">
        <a
          href="/img/cv-melinda.pdf"
          download
          className="
            px-5
            py-2
            bg-[#8A2BE2]
            border-2
            border-[#D8BFD8]
            text-white
            font-bold
            hover:bg-[#6f1bb5]
            transition-colors
          "
        >
          ↓ TÉLÉCHARGER MON CV
        </a>
      </div>

      <p className="text-xs text-center text-[#87CEFA] mt-3">
        CV - Melinda.exe 🐙
      </p>

    </div>
  )
}