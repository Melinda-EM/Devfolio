import { describe, expect, it } from "vitest"
import { act, renderHook } from "@testing-library/react"

import { useCalculator } from "../hooks/useCalculator"

describe("useCalculator", () => {
  const input = (
    result: {
      current: ReturnType<typeof useCalculator>
    },
    value: string
  ) => {
    act(() => {
      result.current.handleInput(value)
    })
  }

  it("doit commencer avec un affichage à 0", () => {
    const { result } = renderHook(() => useCalculator())

    expect(result.current.display).toBe("0")
  })

  it("doit permettre de saisir un nombre", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "7")
    input(result, "5")

    expect(result.current.display).toBe("75")
  })

  it("doit effectuer une addition", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "7")
    input(result, "+")
    input(result, "5")
    input(result, "=")

    expect(result.current.display).toBe("12")
  })

  it("doit effectuer les quatre opérations principales", () => {
    const operations = [
      { operator: "+", a: "8", b: "2", expected: "10" },
      { operator: "-", a: "8", b: "2", expected: "6" },
      { operator: "×", a: "8", b: "2", expected: "16" },
      { operator: "÷", a: "8", b: "2", expected: "4" },
    ]

    for (const operation of operations) {
      const { result } = renderHook(() => useCalculator())

      input(result, operation.a)
      input(result, operation.operator)
      input(result, operation.b)
      input(result, "=")

      expect(result.current.display).toBe(operation.expected)
    }
  })

  it("doit gérer les nombres décimaux", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "2")
    input(result, ".")
    input(result, "5")

    expect(result.current.display).toBe("2.5")
  })

  it("doit remettre la calculatrice à zéro avec C", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "7")
    input(result, "C")

    expect(result.current.display).toBe("0")
  })

  it("doit changer le signe avec ±", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "5")
    input(result, "±")

    expect(result.current.display).toBe("-5")
  })

  it("doit convertir un nombre en pourcentage avec %", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "5")
    input(result, "0")
    input(result, "%")

    expect(result.current.display).toBe("0.5")
  })

  it("doit retourner NaN en cas de division par zéro", () => {
    const { result } = renderHook(() => useCalculator())

    input(result, "8")
    input(result, "÷")
    input(result, "0")
    input(result, "=")

    expect(result.current.display).toBe("NaN")
  })
})