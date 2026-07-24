"use client"

import { useState, useEffect } from "react"
import { Monitor, Menu, X } from "lucide-react"
import { cn } from "../lib/utils"

export default function RetroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [currentTime, setCurrentTime] = useState<string>("")

  const menuItems = [
    { name: "HOME", path: "#" },
    { name: "ABOUT", path: "#about" },
    { name: "PROJECTS", path: "#projects" },
    { name: "SKILLS", path: "#skills" },
    { name: "CONTACT", path: "#contact" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="w-full font-mono relative z-50">
      <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,_rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px]"></div>

      <div className="bg-[#2a0044] border-b-2 border-[#8A2BE2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#D8BFD8] flex items-center justify-center">
                  <Monitor className="h-5 w-5 text-[#8A2BE2]" />
                </div>
                <span className="text-[#87CEFA] font-bold tracking-wider">C:\&gt;_</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="px-3 py-1 text-[#D8BFD8] hover:bg-[#8A2BE2] hover:text-white transition-colors"
                  >
                    {item.name}.EXE
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#87CEFA] hover:text-white hover:bg-[#8A2BE2] focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a0033] border-b-2 border-[#8A2BE2]">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="block px-3 py-2 text-[#D8BFD8] hover:bg-[#8A2BE2] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}.EXE
            </a>
          ))}
        </div>
      </div>

          <div className="px-2 py-1 bg-[#1a0033] border border-[#8A2BE2]">{currentTime}</div>
      {/* <div className="h-6 bg-[#1a0033] border-b-2 border-[#8A2BE2] text-[#87CEFA] text-xs px-4 flex items-center justify-between">
        {currentTime}
      </div> */}
    </nav>
  )
}
