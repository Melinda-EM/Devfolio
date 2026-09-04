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
} from "lucide-react"

import type { WindowState } from "@/app/page"

import AboutWindow from "./windows/AboutWindow"
import ProjectsWindow from "./windows/ProjectsWindow"
import SkillsWindow from "./windows/SkillsWindow"
import CareerWindow from "./windows/CareerWindow"
import ContactWindow from "./windows/ContactWindow"
import CalculatorWindow from "./windows/CalculatorWindow"

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

  const [showStartMenu, setShowStartMenu] =
    useState(false)

  const [showPrograms, setShowPrograms] =
    useState(false)

  // HORLOGE

  const [currentTime, setCurrentTime] =
    useState(new Date())

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)

  }, [])

  // PROGRAMMES

  const programs = [
    {
      id: "about",
      name: "A propos",
      icon: <FileText size={18} />,
      content: <AboutWindow />,
    },

    {
      id: "projects",
      name: "Projets",
      icon: <Briefcase size={18} />,
      content: <ProjectsWindow />,
    },

    {
      id: "career",
      name: "Parcours",
      icon: <Route size={18} />,
      content: <CareerWindow />,
    },

    {
      id: "skills",
      name: "Compétences",
      icon: <Cpu size={18} />,
      content: <SkillsWindow />,
    },

    {
      id: "contact",
      name: "Contact",
      icon: <Mail size={18} />,
      content: <ContactWindow />,
    },

    {
      id: "calculator",
      name: "Calculatrice",
      icon: <Calculator size={18} />,
      content: <CalculatorWindow />,
    },
  ]

  return (
    <>

      {/* ================================= */}
      {/* MENU DEMARRER */}
      {/* ================================= */}

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
            z-50
          "
        >

          {/* TITRE */}

          <div
            className="
              p-4
              bg-[#8A2BE2]
              font-bold
              text-white
            "
          >
            Devfolio
          </div>

          <div className="p-2">

            {/* PROGRAMMES */}

            <button
              onClick={() =>
                setShowPrograms(!showPrograms)
              }

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

            {/* ================================= */}
            {/* SOUS MENU PROGRAMMES */}
            {/* ================================= */}

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
                        program.content
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

            {/* SEPARATEUR */}

            <div
              className="
                border-t
                border-[#8A2BE2]
                mt-2
                pt-2
              "
            >

              {/* FERMER */}

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

      {/* ================================= */}
      {/* TASKBAR */}
      {/* ================================= */}

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

        {/* DEMARRER */}

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

            ${
              showStartMenu
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

        {/* FENETRES OUVERTES */}

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

                ${
                  window.isMinimized
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

        {/* HORLOGE */}

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