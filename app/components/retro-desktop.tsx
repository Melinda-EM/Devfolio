"use client"

import type React from "react"
import Image from "next/image"
import { FileText, Briefcase, Cpu, Mail, Calculator, Route } from "lucide-react"
import Calculatory from "./calculatory"
import { career } from "../data/career"
import CareerSlider from "./careerSlider";
import { projects } from "../data/project"

interface RetroDesktopProps {
  onOpenWindow: (id: string, title: string, content: React.ReactNode) => void
}

export default function RetroDesktop({ onOpenWindow }: RetroDesktopProps) {
  const desktopIcons = [
    {
      id: "about",
      name: "A propos.exe",
      icon: <FileText size={40} className="[image-rendering:pixelated]" />,
      content: (
        <div className="p-4 h-full overflow-auto">
          <h2 className="text-2xl text-[#87CEFA] mb-4 font-bold">A propos de moi</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-40 h-40 flex items-center justify-center">
              <Image src="/img/moi.png" alt="Profile" width={150} height={150} />
            </div>
            <div>
              <h3 className="text-[#87CEFA] text-xl">Melinda Esteves Mendes</h3>
              <p className="text-[#D8BFD8]">Développeuse Web Front-End</p>
            </div>
          </div>
          <p className="text-[#D8BFD8] mb-4">
            Développeuse Web diplômée d&#39;un BAC +2 à la Web@cadémie by Epitech, je continue mon trajet en tant qu&#39;Accompagnatrice Pédagogique pour partager mon savoir et faire grandir la communauté de développeurs.
          </p>
          <p className="text-[#D8BFD8]">
            Pour vous parler un peu de moi :
              <br /><br />
              Passionnée d&#39;informatique et de jeux vidéo comme Call Of Duty, Final Fantasy, Dead Or Alive ou encore Les Sims, et avec un esprit créatif, 
              j&#39;ai décidé, après trois ans dans le milieu hôtelier, de me reconvertir dans le développement web.
              <br /><br />
              Cette nouvelle aventure m&#39;a amenée à la Web@cadémie by Epitech, d&#39;où je suis aujourd&#39;hui diplômée, pour assouvir ma curiosité pour l&#39;informatique et perfectionner mes compétences.
              Ce qui me motive, c&#39;est de pouvoir donner vie aux idées en créant des expériences interactives et innovantes.
              <br /><br />
              L&#39;informatique est pour moi un terrain de créativité, où chaque ligne de code me rapproche d&#39;un résultat concret et utile.
              <br /><br />
              <span className="italic">Comme j&#39;aime à dire, je ne suis pas là pour chasser des papillons.</span>
          </p>
        </div>
      ),
    },
    {
      id: "projects",
      name: "Projets.exe",
      icon: <Briefcase size={40} />,
      content: (
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
                <a href={project.view} target="_blank">
                  <button className="px-4 py-2 bg-[#8A2BE2] text-white text-sm">
                    VIEW
                  </button>
                </a>

                <a href={project.code} target="_blank">
                  <button className="px-4 py-2 bg-[#0000FF] text-white text-sm">
                    CODE
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "career",
      name: "Parcours.exe",
      icon: <Route size={40} />,
      content: <CareerSlider career={career} />,
    },
    {
      id: "skills",
      name: "Compétences.exe",
      icon: <Cpu size={40} />,
      content: (
       <div className="p-4 h-full overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-2">
            <div className="border-2 border-white p-2">
              <div className="bg-purple text-white p-1 mb-2 font-consolas text-xl">
                <span className="mr-2">💻</span>
                Langages
              </div>
              <ul className="space-y-1 font-windows text-xl">
                <li className="flex items-center"><span className="mr-2">📄</span>HTML</li>
                <li className="flex items-center"><span className="mr-2">🎨</span>CSS</li>
                <li className="flex items-center"><span className="mr-2">⚡</span>JavaScript</li>
                <li className="flex items-center"><span className="mr-2">🐘</span>PHP</li>
                <li className="flex items-center"><span className="mr-2">🐍</span>Python</li>
                <li className="flex items-center"><span className="mr-2">💎</span>Ruby</li>
                <li className="flex items-center"><span className="mr-2">🐹</span>Golang</li>
                <li className="flex items-center"><span className="mr-2">♨️</span>Java</li>
              </ul>
            </div>

            <div className="border-2 border-white p-2">
              <div className="bg-purple text-white p-1 mb-2 font-consolas text-xl">
                <span className="mr-2">🛠️</span>
                Frameworks
              </div>
              <ul className="space-y-1 font-windows text-xl">
                <li className="flex items-center"><span className="mr-2">⚛️</span>React</li>
                <li className="flex items-center"><span className="mr-2">🎵</span>Symfony</li>
                <li className="flex items-center"><span className="mr-2">🚂</span>Express.js</li>
                <li className="flex items-center"><span className="mr-2">🎯</span>Django</li>
                <li className="flex items-center"><span className="mr-2">🎮</span>Phaser.js</li>
                <li className="flex items-center"><span className="mr-2">📦</span>Next.js</li>
                <li className="flex items-center"><span className="mr-2">🛤️</span>Ruby on Rails</li>
                <li className="flex items-center"><span className="mr-2">🧪</span>Flask</li>
              </ul>
            </div>

            <div className="border-2 border-white p-2">
              <div className="bg-purple text-white p-1 mb-2 font-consolas text-xl">
                <span className="mr-2">🔧</span>
                Env. Technique
              </div>
              <ul className="space-y-1 font-windows text-xl">
                <li className="flex items-center"><span className="mr-2">🐳</span>Docker</li>
                <li className="flex items-center"><span className="mr-2">🐧</span>Linux</li>
                <li className="flex items-center"><span className="mr-2">📝</span>VSCode</li>
                <li className="flex items-center"><span className="mr-2">🐱</span>GitHub</li>
                <li className="flex items-center"><span className="mr-2">🎨</span>Figma</li>
                <li className="flex items-center"><span className="mr-2">🔄</span>Insomnia</li>
                <li className="flex items-center"><span className="mr-2">🌐</span>Apache</li>
                <li className="flex items-center"><span className="mr-2">🛢️</span>SQL</li>
              </ul>
            </div>

            <div className="border-2 border-white p-2">
              <div className="bg-purple text-white p-1 mb-2 font-consolas text-xl">
                <span className="mr-2">🎯</span>
                Soft-skills
              </div>
              <ul className="space-y-1 font-windows text-xl">
                <li className="flex items-center"><span className="mr-2">👑</span>Leadership</li>
                <li className="flex items-center"><span className="mr-2">📊</span>Organisation</li>
                <li className="flex items-center"><span className="mr-2">🤝</span>Travail d&#39;équipe</li>
                <li className="flex items-center"><span className="mr-2">🎨</span>Créativité</li>
                <li className="flex items-center"><span className="mr-2">💡</span>Initiative</li>
                <li className="flex items-center"><span className="mr-2">🔄</span>Adaptabilité</li>
                <li className="flex items-center"><span className="mr-2">🔍</span>Curiosité</li>
                <li className="flex items-center"><span className="mr-2">🎯</span>Résolution</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      name: "Contact.exe",
      icon: <Mail size={40} />,
      content: (
       <div className="p-4 h-full overflow-auto">
          <h2 className="text-2xl font-orange text-[#87CEFA] mb-4 font-bold">
            [SYSTEM] Initialisation du formulaire de contact...
          </h2>

          <p className="text-[#D8BFD8] mb-6">
            Veuillez entrer vos informations pour établir une connexion.  
            Toute proposition de contrat, mission ou renseignement sera traitée en priorité 🚀
          </p>

          <form className="space-y-4 font-mono text-sm">
            <div>
              <label className="block text-[#D8BFD8] mb-1">Nom complet:</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              />
              <p className="text-xs text-[#87CEFA] mt-1">* Exemple : Poulpi.exe</p>
            </div>
            <div>
              <label className="block text-[#D8BFD8] mb-1">Email:</label>
              <input
                type="email"
                placeholder="john.doe@mail.fr"
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              />
              <p className="text-xs text-[#87CEFA] mt-1">Astuce : utilisez un vrai email, pas hotmail_1999@hotmail.com 😅</p>
            </div>
            <div>
              <label className="block text-[#D8BFD8] mb-1">Numéro:</label>
              <input
                type="tel"
                placeholder="0606060606"
                pattern="[0-9]{10}"
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              />
              <p className="text-xs text-[#87CEFA] mt-1">Optionnel mais recommandé 📟</p>
            </div>
            <div>
              <label className="block text-[#D8BFD8] mb-1">Message:</label>
              <textarea
                rows={4}
                placeholder="Bonjour, je vous contacte au sujet de ..."
                className="w-full p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-white focus:border-[#87CEFA] outline-none"
              ></textarea>
              <p className="text-xs text-[#87CEFA] mt-1">Tapez votre requête comme si vous étiez sous MS-DOS...</p>
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-[#8A2BE2] text-white hover:bg-[#6A1CB2] border-2 border-[#D8BFD8] font-bold"
            >
              ► ENVOYER
            </button>
          </form>

          <div className="mt-6 text-[#D8BFD8] border-t border-[#8A2BE2] pt-4">
            <p>[INFO] Canaux alternatifs de connexion :</p>
            <ul className="mt-2 space-y-1">
              {/* <li>📧 Email : <a href="mailto:tonmail@mail.com" className="underline hover:text-[#87CEFA]">tonmail@mail.com</a></li> */}
              <li>💼 LinkedIn : <a href="https://www.linkedin.com/in/melinda-e-m/" target="_blank" className="underline hover:text-[#87CEFA]">linkedin.com/in/melinda-e-m</a></li>
              <li>👩‍💻 GitHub : <a href="https://github.com/Melinda-EM" target="_blank" className="underline hover:text-[#87CEFA]">github.com/Melinda-EM</a></li>
            </ul>
          </div>

          <p className="text-sm text-[#D8BFD8] mt-6">
            [INFO] Vos données resteront confidentielles.  
            Stockage local : <span className="text-[#87CEFA]">C:\Users\Poulpi\Formulaires\2025</span>
          </p>

          <p className="mt-6 text-[#87CEFA] font-bold text-center font-mono">
            --- FIN DE TRANSMISSION --- <br/> Poulpi.exe 🐙
          </p>
       </div>
      ),
    },
    {
      id: "calculator",
      name: "Calculatrice.exe",
      icon: <Calculator size={40} />,
      content: (
        <div className="p-4 h-full">
          <Calculatory />
        </div>
      ),
    },
  ]

  return (
    <div className="h-[calc(120vh-60px)] w-full p-4">
      <div className="grid grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-2 lg:h-full">
        {desktopIcons.map((icon) => (
          <div
              key={icon.id}
              className="flex flex-col lg:items-center gap-2 cursor-pointer p-2 rounded"
              onDoubleClick={() => onOpenWindow(icon.id, icon.name, icon.content)}
            >
              <div className="relative h-14 w-14 lg:h-20 lg:w-20">
 
                <div className="absolute -top-0.5 left-0 w-9 h-9 bg-[#D8BFD8] border-2 border-[#8A2BE2] rounded-t"></div>

                <div className="absolute top-2 left-0 w-24 h-18 lg:w-26 lg:h-18 bg-[#D8BFD8] border-2 border-[#8A2BE2] rounded-sm flex items-center justify-center hover:bg-[#C8AFD8] transition-colors">
                  <div className="text-[#8A2BE2]">{icon.icon}</div>
                </div>
              </div>

              <span className="text-[#ffffff] text-sm lg:text-lg mt-4 lg:mt-0 font-bold lg:text-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                {icon.name}
              </span>
            </div>
        ))}
      </div>
    </div>
  )
}
