"use client"

import type React from "react"
import { useEffect, useState } from "react"

import {
  Monitor,
  ChevronUp,
  FileText,
  Briefcase,
  Cpu,
  Mail,
  Calculator,
  Route,
  Award,
  File,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react"

import type { WindowState } from "@/app/page"

import AboutWindow from "./windows/AboutWindow"
import ProjectsWindow from "./windows/ProjectsWindow"
import SkillsWindow from "./windows/SkillsWindow"
import CareerWindow from "./windows/CareerWindow"
import ContactWindow from "./windows/ContactWindow"
import CalculatorWindow from "./windows/CalculatorWindow"
import CVWindow from "./windows/CVWindow"
import CertificationsWindow from "./windows/CertificationsWindow"

interface RetroTaskbarProps {
  windows: WindowState[]
  onWindowClick: (id: string) => void
  onOpenWindow: (
    id: string,
    title: string,
    content: React.ReactNode
  ) => void
}

export default function RetroTaskbar({
  windows,
  onWindowClick,
  onOpenWindow,
}: RetroTaskbarProps) {
  const [showStartMenu, setShowStartMenu] = useState(false)
  const [showPrograms, setShowPrograms] = useState(false)

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  const programs = [
    {
      id: "about",
      name: "A propos",
      icon: <FileText size={18} />,
      content: () => <AboutWindow />,
    },
    {
      id: "projects",
      name: "Projets",
      icon: <Briefcase size={18} />,
      content: () => <ProjectsWindow />,
    },
    {
      id: "career",
      name: "Parcours",
      icon: <Route size={18} />,
      content: () => <CareerWindow />,
    },
    {
      id: "cv",
      name: "CV",
      icon: <File size={18} />,
      content: () => <CVWindow />,
    },
    {
      id: "certifications",
      name: "Certifications",
      icon: <Award size={18} />,
      content: () => <CertificationsWindow />,
    },
    {
      id: "skills",
      name: "Compétences",
      icon: <Cpu size={18} />,
      content: () => <SkillsWindow />,
    },
    {
      id: "contact",
      name: "Contact",
      icon: <Mail size={18} />,
      content: () => <ContactWindow />,
    },
    {
      id: "calculator",
      name: "Calculatrice",
      icon: <Calculator size={18} />,
      content: () => <CalculatorWindow />,
    },
  ]

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")

    setShowStartMenu(false)
    setShowPrograms(false)
  }

  return (
    <>
      {showStartMenu && (
        <div
          className="
            absolute
            bottom-12
            left-0
            w-72
            bg-[#2a0044]
            border-2
            border-[#8A2BE2]
            shadow-[4px_4px_0px_#000]
            z-50
          "
        >


          <div
            className="
              p-4
              bg-[#8A2BE2]
              font-bold
              text-white
            "
          >
            MimiStack OS
          </div>

          <div className="p-2">


            <button
              onClick={() => setShowPrograms(!showPrograms)}
              className="
                w-full
                flex
                items-center
                justify-between
                p-2
                hover:bg-[#8A2BE2]
                cursor-pointer
                text-[#D8BFD8]
                text-left
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-6
                    h-6
                    flex
                    items-center
                    justify-center
                    bg-[#D8BFD8]
                    text-[#2a0044]
                  "
                >
                  <Monitor size={16} />
                </div>

                <span>
                  Programmes
                </span>
              </div>

              <span>
                {showPrograms ? "▼" : "▶"}
              </span>
            </button>


            {showPrograms && (
              <div
                className="
                  ml-3
                  border-l-2
                  border-[#8A2BE2]
                  pl-1
                "
              >
                {programs.map((program) => (
                  <button
                    key={program.id}
                   onClick={() => {
                      onOpenWindow(
                        program.id,
                        program.name,
                        program.content()
                      )

                      setShowPrograms(false)
                      setShowStartMenu(false)
                    }}

                    className="
                      w-full
                      flex
                      items-center
                      gap-3
                      p-2
                      hover:bg-[#8A2BE2]
                      cursor-pointer
                      text-[#D8BFD8]
                      text-left
                    "
                  >
                    <div
                      className="
                        w-6
                        h-6
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {program.icon}
                    </div>

                    <span>
                      {program.name}
                    </span>
                  </button>
                ))}
              </div>
            )}


            <div
              className="
                border-t
                border-[#8A2BE2]
                mt-2
                pt-2
              "
            >
              <div
                className="
                  px-2
                  py-1
                  text-xs
                  uppercase
                  text-[#9370DB]
                "
              >
                Liens
              </div>


              <button
                onClick={() =>
                  openExternalLink(
                    "https://github.com/Melinda-EM"
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  p-2
                  hover:bg-[#8A2BE2]
                  cursor-pointer
                  text-[#D8BFD8]
                  text-left
                "
              >
                <div
                  className="
                    w-6
                    h-6
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Github size={18} />
                </div>

                <span className="flex-1">
                  GitHub
                </span>

                <ExternalLink
                  size={13}
                  className="opacity-50"
                />
              </button>


              <button
                onClick={() =>
                  openExternalLink(
                    "https://www.linkedin.com/in/melinda-e-m/"
                  )
                }
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  p-2
                  hover:bg-[#8A2BE2]
                  cursor-pointer
                  text-[#D8BFD8]
                  text-left
                "
              >
                <div
                  className="
                    w-6
                    h-6
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Linkedin size={18} />
                </div>

                <span className="flex-1">
                  LinkedIn
                </span>

                <ExternalLink
                  size={13}
                  className="opacity-50"
                />
              </button>
            </div>


            <div
              className="
                border-t
                border-[#8A2BE2]
                mt-2
                pt-2
              "
            >
              <button
                disabled
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  p-2
                  text-[#6b5875]
                  text-left
                  cursor-not-allowed
                "
              >
                <span className="w-6 text-center">
                  ⚙
                </span>

                <span>
                  Paramètres
                </span>
              </button>

              <button
                disabled
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  p-2
                  text-[#6b5875]
                  text-left
                  cursor-not-allowed
                "
              >
                <span className="w-6 text-center">
                  ?
                </span>

                <span>
                  Aide
                </span>
              </button>
            </div>



            <div
              className="
                border-t
                border-[#8A2BE2]
                mt-2
                pt-2
              "
            >
              <button
                onClick={() => {
                  setShowStartMenu(false)
                  setShowPrograms(false)
                }}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  p-2
                  hover:bg-[#8A2BE2]
                  cursor-pointer
                  text-[#D8BFD8]
                  text-left
                "
              >
                <div
                  className="
                    w-6
                    h-6
                    flex
                    items-center
                    justify-center
                    bg-[#FF5555]
                    text-white
                  "
                >
                  X
                </div>

                <span>
                  Fermer
                </span>
              </button>
            </div>

          </div>
        </div>
      )}


      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-12
          bg-[#2a0044]
          border-t-2
          border-[#8A2BE2]
          flex
          items-center
          px-2
          z-40
        "
      >

        <button
          onClick={() => {
            setShowStartMenu(!showStartMenu)
            setShowPrograms(false)
          }}
          className={`
            px-6
            py-1
            flex
            items-center
            gap-2
            font-bold
            border-2
            ${showStartMenu
              ? "bg-[#8A2BE2] border-[#D8BFD8] text-white"
              : "bg-[#1a0033] border-[#8A2BE2] hover:bg-[#8A2BE2]/70 text-[#87CEFA]"
            }
          `}
        >
          <Monitor size={16} />

          <span>
            Démarrer
          </span>
        </button>


        <div
          className="
            flex-1
            flex
            items-center
            gap-1
            ml-2
          "
        >
          {windows.map((window) => (
            <button
              key={window.id}
              onClick={() =>
                onWindowClick(window.id)
              }
              className={`
                px-3
                py-1
                text-sm
                border-2
                max-w-40
                truncate

                ${window.isMinimized
                  ? "bg-[#1a0033] border-[#8A2BE2] text-[#D8BFD8]"
                  : "bg-[#8A2BE2] border-[#D8BFD8] text-white"
                }

                hover:bg-[#8A2BE2]
                hover:text-white
              `}
            >
              {window.title}
            </button>
          ))}
        </div>


        <div
          className="
            flex
            items-center
            gap-2
            text-xs
          "
        >
          <div
            className="
              px-2
              py-1
              bg-[#1a0033]
              border
              border-[#8A2BE2]
              text-[#87CEFA]
            "
          >
            {currentTime.toLocaleTimeString("fr-FR")}
          </div>

          <div
            className="
              w-6
              h-6
              flex
              items-center
              justify-center
              bg-[#1a0033]
              border
              border-[#8A2BE2]
              text-[#87CEFA]
            "
          >
            <ChevronUp size={14} />
          </div>
        </div>
      </div>
    </>
  )
}