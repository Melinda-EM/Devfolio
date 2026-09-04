"use client"

import type React from "react"
import { useState, useRef, useEffect, type ReactNode } from "react"

import { X, Minus, Square, Copy } from "lucide-react"

interface RetroWindowProps {
  id: string
  title: string
  children: ReactNode
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  isMaximized: boolean

  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  onFocus: () => void
  onPositionChange: (position: { x: number; y: number }) => void
}

export default function RetroWindow({
  title,
  children,
  position,
  size,
  zIndex,
  isMaximized,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
}: RetroWindowProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const windowRef = useRef<HTMLDivElement>(null)


  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) {
      onFocus()
      return
    }

    onFocus()

    setIsDragging(true)

    const rect = windowRef.current?.getBoundingClientRect()

    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return

      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y

      onPositionChange({
        x: Math.max(0, newX),
        y: Math.max(0, newY),
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset, onPositionChange])


  return (
    <div
      ref={windowRef}
      className="absolute bg-[#2a0044] border-2 border-[#8A2BE2] shadow-lg flex flex-col"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      }}
      onClick={onFocus}
    >

      <div
        className="bg-[#8A2BE2] px-2 py-1 flex items-center cursor-move select-none"
        onMouseDown={handleMouseDown}
      >

        <div className="flex-1 font-bold text-white truncate">
          {title}
        </div>


        <div className="flex gap-1">

          <button
            onClick={(e) => {
              e.stopPropagation()
              onMinimize()
            }}
            className="w-6 h-6 flex items-center justify-center bg-[#D8BFD8] hover:bg-[#C8AFD8] text-[#2a0044] border border-[#000]"
          >
            <Minus size={14} />
          </button>


          <button
            onClick={(e) => {
              e.stopPropagation()
              onMaximize()
            }}
            className="w-6 h-6 flex items-center justify-center bg-[#87CEFA] hover:bg-[#77BEFA] text-[#2a0044] border border-[#000]"
          >
            {isMaximized ? (
              <Copy size={13} />
            ) : (
              <Square size={14} />
            )}
          </button>


          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            className="w-6 h-6 flex items-center justify-center bg-[#FF5555] hover:bg-[#FF3333] text-white border border-[#000]"
          >
            <X size={14} />
          </button>
        </div>
      </div>


      <div className="flex-1 overflow-auto bg-[#1a0033] text-white">
        {children}
      </div>
    </div>
  )
}