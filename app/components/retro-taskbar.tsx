"use client"

import { useState } from "react"
import { Monitor, ChevronUp } from "lucide-react"
import type { WindowState } from "@/app/page"

interface RetroTaskbarProps {
  windows: WindowState[]
  onWindowClick: (id: string) => void
}

export default function RetroTaskbar({ windows, onWindowClick }: RetroTaskbarProps) {
  const [showStartMenu, setShowStartMenu] = useState(false)

  return (
    <>
      {showStartMenu && (
        <div className="absolute bottom-10 left-0 w-64 bg-[#2a0044] border-2 border-[#8A2BE2] z-50">
          <div className="p-4 bg-[#8A2BE2] font-bold text-white">Devfolio</div>
          <div className="p-2">
            <div className="flex items-center gap-3 p-2 hover:bg-[#8A2BE2] cursor-pointer text-[#D8BFD8]">
              <div className="w-6 h-6 flex items-center justify-center bg-[#D8BFD8] text-[#2a0044]">
                <Monitor size={16} />
              </div>
              <span>Programmes</span>
            </div>
            <div className="border-t border-[#8A2BE2] mt-2 pt-2">
              <div
                className="flex items-center gap-3 p-2 hover:bg-[#8A2BE2] cursor-pointer text-[#D8BFD8]"
                onClick={() => setShowStartMenu(false)}
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#FF5555] text-white">X</div>
                <span>Fermer</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[#2a0044] border-t-2 border-[#8A2BE2] flex items-center px-2 z-40">
        <button
          onClick={() => setShowStartMenu(!showStartMenu)}
          className={`px-6 py-1 flex items-center gap-2 font-bold border-2 ${
            showStartMenu
              ? "bg-[#8A2BE2] border-[#D8BFD8] text-white"
              : "bg-[#1a0033] border-[#8A2BE2] hover:bg-[#8A2BE2]/70 text-[#87CEFA]"
          }`}
        >
          <Monitor size={16} />
          <span>Démarrer</span>
        </button>

        <div className="flex-1 flex items-center gap-1 ml-2">
          {windows.map((window) => (
            <button
              key={window.id}
              onClick={() => onWindowClick(window.id)}
              className={`px-3 py-1 text-sm border-2 max-w-40 truncate ${
                window.isMinimized
                  ? "bg-[#1a0033] border-[#8A2BE2] text-[#D8BFD8]"
                  : "bg-[#8A2BE2] border-[#D8BFD8] text-white"
              } hover:bg-[#8A2BE2] hover:text-white`}
            >
              {window.title}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="px-2 py-1 bg-[#1a0033] border border-[#8A2BE2] text-[#87CEFA]">
            {new Date().toLocaleTimeString()}
          </div>
          <div className="w-6 h-6 flex items-center justify-center bg-[#1a0033] border border-[#8A2BE2] text-[#87CEFA]">
            <ChevronUp size={14} />
          </div>
        </div>
      </div>
    </>
  )
}
