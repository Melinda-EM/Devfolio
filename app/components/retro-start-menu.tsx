"use client"

import { motion } from "framer-motion"
import { FileText, Briefcase, Cpu, Mail } from "lucide-react"

interface RetroStartMenuProps {
  onItemClick: (item: string) => void
  onClose: () => void
}

export default function RetroStartMenu({ onItemClick, onClose }: RetroStartMenuProps) {
  const menuItems = [
    { id: "about", label: "About", icon: <FileText size={16} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={16} /> },
    { id: "skills", label: "Skills", icon: <Cpu size={16} /> },
    { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  ]

  return (
    <motion.div
      className="absolute bottom-10 left-0 w-64 bg-[#2a0044] border-2 border-[#8A2BE2] z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="p-4 bg-[#8A2BE2] font-bold">Portfolio OS v1.0</div>
      <div className="p-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-2 hover:bg-[#8A2BE2] cursor-pointer"
            onClick={() => onItemClick(item.id)}
          >
            <div className="w-6 h-6 flex items-center justify-center bg-[#D8BFD8] text-[#2a0044]">{item.icon}</div>
            <span>{item.label}.exe</span>
          </div>
        ))}

        <div className="border-t border-[#8A2BE2] mt-2 pt-2">
          <div className="flex items-center gap-3 p-2 hover:bg-[#8A2BE2] cursor-pointer" onClick={onClose}>
            <div className="w-6 h-6 flex items-center justify-center bg-[#FF5555] text-white">X</div>
            <span>Close</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
