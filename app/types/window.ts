import type React from "react"

export interface WindowState {
  id: string
  title: string
  content: React.ReactNode
  position: { x: number; y: number }
  size: { width: number; height: number }
  zIndex: number
  isMinimized: boolean
  isMaximized: boolean
  previousPosition?: { x: number; y: number }
  previousSize?: { width: number; height: number }
}