"use client"

import type React from "react"
import Image from "next/image"
import { FileText, Briefcase, Cpu, Mail, Calculator, Route } from "lucide-react"
import AboutWindow from "./windows/AboutWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import SkillsWindow from "./windows/SkillsWindow";
import CareerWindow from "./windows/CareerWindow";
import ContactWindow from "./windows/ContactWindow";
import CalculatorWindow from "./windows/CalculatorWindow";

interface RetroDesktopProps {
  onOpenWindow: (id: string, title: string, content: React.ReactNode) => void
}

export default function RetroDesktop({ onOpenWindow }: RetroDesktopProps) {

    const desktopIcons = [
    {
        id: "about",
        name: "A propos",
        icon: <FileText size={40} />,
        content: <AboutWindow />,
    },
    {
        id: "projects",
        name: "Projets",
        icon: <Briefcase size={40} />,
        content: <ProjectsWindow />,
    },
    {
        id: "career",
        name: "Parcours",
        icon: <Route size={40} />,
        content: <CareerWindow />,
    },
    {
        id: "skills",
        name: "Compétences",
        icon: <Cpu size={40} />,
        content: <SkillsWindow />,
    },
    {
        id: "contact",
        name: "Contact",
        icon: <Mail size={40} />,
        content: <ContactWindow />,
    },
    {
        id: "calculator",
        name: "Calculatrice",
        icon: <Calculator size={40} />,
        content: <CalculatorWindow />,
    },
];

  return (
    <div className="h-[calc(120vh-60px)] w-full p-4">
      <div className="grid grid-cols-3 lg:grid-cols-6 lg:gap-4 gap-2 lg:h-full">
        {desktopIcons.map((icon) => (
          <div
              key={icon.id}
              className="flex flex-col lg:items-center gap-2 cursor-pointer p-2 rounded"
              onClick={() => onOpenWindow(icon.id, icon.name, icon.content)}
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
