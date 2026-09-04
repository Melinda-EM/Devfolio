"use client"

import type React from "react"
import { useState, useEffect } from "react"

import RetroBootScreen from "./components/retro-boot-screen"
import RetroDesktop from "./components/retro-desktop"
import RetroWindow from "./components/retro-window"
import RetroTaskbar from "./components/retro-taskbar"

import "./globals.css"

export interface WindowState {
  id: string
  title: string
  isOpen: boolean
  isMinimized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  content: React.ReactNode
}

export default function Home() {
  const [booting, setBooting] = useState(true)
  const [windows, setWindows] = useState<WindowState[]>([])
  const [nextZIndex, setNextZIndex] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const openWindow = (
    id: string,
    title: string,
    content: React.ReactNode
  ) => {
    setWindows((prev) => {
      const existingWindow = prev.find((w) => w.id === id)
      const isMobile = window.innerWidth < 1024

      if (existingWindow) {
        return prev.map((w) =>
          w.id === id
            ? {
                ...w,
                isMinimized: false,
                zIndex: nextZIndex,
              }
            : w
        )
      }

      const newWindow: WindowState = {
        id,
        title,
        isOpen: true,
        isMinimized: false,

        position: isMobile
          ? { x: 10, y: 10 }
          : {
              x: 50 + prev.length * 30,
              y: 50 + prev.length * 30,
            },

        size: isMobile
          ? {
              width: window.innerWidth - 20,
              height: window.innerHeight - 70,
            }
          : {
              width: 900,
              height: 450,
            },

        zIndex: nextZIndex,
        content,
      }

      return [...prev, newWindow]
    })

    setNextZIndex((prev) => prev + 1)
  }

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.filter((w) => w.id !== id)
    )
  }

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, isMinimized: true }
          : w
      )
    )
  }

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              position: { x: 0, y: 0 },
              size: {
                width: window.innerWidth,
                height: window.innerHeight - 40,
              },
              zIndex: nextZIndex,
            }
          : w
      )
    )

    setNextZIndex((prev) => prev + 1)
  }

  const focusWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              isMinimized: false,
              zIndex: nextZIndex,
            }
          : w
      )
    )

    setNextZIndex((prev) => prev + 1)
  }

  const updateWindowPosition = (
    id: string,
    position: { x: number; y: number }
  ) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, position }
          : w
      )
    )
  }

  if (booting) {
    return <RetroBootScreen />
  }

  return (
    <main className="h-screen w-screen overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[url('/img/champ.png')] before:bg-cover before:bg-center before:z-[-1] text-white font-mono relative">

      <div className="absolute inset-0 pointer-events-none z-50 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.3)_70%)] mix-blend-overlay" />

      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_40%,_rgba(0,0,0,0.25)_60%)] bg-[length:100%_2px]" />

      <RetroDesktop onOpenWindow={openWindow} />

      {windows.map(
        (window) =>
          !window.isMinimized && (
            <RetroWindow
              key={window.id}
              id={window.id}
              title={window.title}
              position={window.position}
              size={window.size}
              zIndex={window.zIndex}
              onClose={() => closeWindow(window.id)}
              onMinimize={() =>
                minimizeWindow(window.id)
              }
              onMaximize={() =>
                maximizeWindow(window.id)
              }
              onFocus={() =>
                focusWindow(window.id)
              }
              onPositionChange={(position) =>
                updateWindowPosition(
                  window.id,
                  position
                )
              }
            >
              {window.content}
            </RetroWindow>
          )
      )}

      <RetroTaskbar
        windows={windows}
        onWindowClick={focusWindow}
        onOpenWindow={openWindow}
      />
    </main>
  )
}