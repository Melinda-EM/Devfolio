"use client"

import { useCalculator } from "../hooks/useCalculator"

export default function Calculatory() {
  const { display, handleInput } = useCalculator()

  const buttons = [
    "C", "±", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ]

  return (
    <div className="bg-[#1a0033] border-2 border-[#8A2BE2] p-4 max-w-xs mx-auto">
      <div className="bg-[#000] text-[#87CEFA] p-2 mb-4 text-right text-xl font-mono border border-[#D8BFD8]">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleInput(btn)}
            className="p-2 bg-[#2a0044] border-2 border-[#8A2BE2] text-[#D8BFD8] hover:text-white"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}
