"use client"

import { useState, useEffect } from "react"

export default function RetroBootScreen() {
  const [loadingText, setLoadingText] = useState("")
  const [loadingPercentage, setLoadingPercentage] = useState(0)

  useEffect(() => {
    const bootMessages = [
      "Initialisation du système...",
      "Chargement du portfolio v1.0...",
      "Vérification de la mémoire...",
      "Chargement du visuel...",
      "Préparation de l'environnement...",
      "Tout est prêt!",
    ]

    let currentMessageIndex = 0
    let timer: NodeJS.Timeout

    const updateLoadingText = () => {
      if (currentMessageIndex < bootMessages.length) {
        setLoadingText(bootMessages[currentMessageIndex])
        setLoadingPercentage(Math.min(100, Math.round((currentMessageIndex / (bootMessages.length - 1)) * 100)))
        currentMessageIndex++
        timer = setTimeout(updateLoadingText, 500)
      }
    }

    updateLoadingText()
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen w-screen bg-[#000] flex flex-col items-center justify-center text-[#87CEFA] font-mono">
      <div className="text-5xl lg:text-6xl font-pixel font-bold mb-8 text-[#D8BFD8]">Portfolio MEM</div>
      <div className="w-70 h-10 bg-[#2a0044] border-2 border-[#8A2BE2] mb-4 lg:w-96 lg:h-10">
        <div className="h-full bg-[#8A2BE2]" style={{ width: `${loadingPercentage}%` }}>
          <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.3)_70%)] mix-blend-overlay"></div>
          <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_40%,_rgba(0,0,0,0.25)_60%)] bg-[length:100%_3px]"></div>
        </div>
      </div>
      <div className="h-10 font-orange text-2xl lg:text-3xl mb-4">{loadingText}</div>
      <div className="text-xl lg:text-2xl font-pixel text-[#D8BFD8]">Chargement... {loadingPercentage}%</div>
    </div>
  )
}
