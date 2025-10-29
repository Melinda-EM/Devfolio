import { useState } from "react"

export function useCalculator() {
  const [display, setDisplay] = useState("0")
  const [prevValue, setPrevValue] = useState<string | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [resetDisplay, setResetDisplay] = useState(false)

  const handleInput = (input: string) => {
    if (!isNaN(Number(input)) || input === ".") {
      if (resetDisplay) {
        setDisplay(input === "." ? "0." : input)
        setResetDisplay(false)
      } else {
        setDisplay((prev) =>
          prev === "0" && input !== "." ? input : prev + input
        )
      }
    } else if (["+", "-", "×", "÷"].includes(input)) {
      setPrevValue(display)
      setOperator(input)
      setResetDisplay(true)
    } else if (input === "=") {
      if (operator && prevValue !== null) {
        const current = parseFloat(display)
        const previous = parseFloat(prevValue)
        let result = 0

        switch (operator) {
          case "+": result = previous + current; break
          case "-": result = previous - current; break
          case "×": result = previous * current; break
          case "÷": result = current !== 0 ? previous / current : NaN; break
        }
        setDisplay(result.toString())
        setPrevValue(null)
        setOperator(null)
      }
    } else if (input === "C") {
      setDisplay("0")
      setPrevValue(null)
      setOperator(null)
    } else if (input === "±") {
      setDisplay((prev) => (parseFloat(prev) * -1).toString())
    } else if (input === "%") {
      setDisplay((prev) => (parseFloat(prev) / 100).toString())
    }
  }

  return { display, handleInput }
}
