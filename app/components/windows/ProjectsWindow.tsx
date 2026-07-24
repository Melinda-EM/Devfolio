import Image from "next/image";
import { projects } from "../../data/project";

export default function ProjectsWindow() {
    return (
        <div className="p-4 h-full overflow-auto">
          <h2 className="text-xl text-[#87CEFA] mb-4 font-bold">Mes Projets</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-4 border-2 border-[#8A2BE2] p-3 bg-[#1a0033]">
              
              <h3 className="text-[#D8BFD8] font-bold">{project.title}</h3>

              <p className="text-sm text-[#87CEFA] mb-2">
                {project.description}
              </p>

              <p className="text-xs text-[#D8BFD8] mb-3 italic">
                {project.longDescription}
              </p>
              <div className="flex gap-1 flex-wrap mb-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-[#8A2BE2] px-2 py-1 border border-white">
                    {t}
                  </span>
                ))}
              </div>

              <div className="text-xs text-[#87CEFA] mb-2">
                👥 {project.teamSize} personne{project.teamSize > 1 && "s"}{" "}
                
                {project.team && (
                  <span>
                    (
                    {project.team.map((member, index) => (
                      <span key={index}>
                        {member.count} {member.role}
                        {index < project.team.length - 1 && " / "}
                      </span>
                    ))}
                    )
                  </span>
                )}
                {" "}⏱️ {project.duration}
              </div>

                {project.image && (
                  <div className="mb-3">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="border-2 border-[#8A2BE2] object-cover w-full h-auto"
                    />
                  </div>
                )}
              <div className="flex gap-2">
                {project.view && (
                  <a
                    href={project.view}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 py-2 bg-[#8A2BE2] text-white text-sm">
                      VIEW
                    </button>
                  </a>
                )}

                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 py-2 bg-[#0000FF] text-white text-sm">
                      CODE
                    </button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
    );
}