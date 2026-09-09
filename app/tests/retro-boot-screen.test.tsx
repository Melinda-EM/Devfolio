import { describe, expect, it, vi, afterEach } from "vitest"
import { act, render, screen } from "@testing-library/react"

import RetroBootScreen from "../components/retro-boot-screen"

describe("RetroBootScreen", () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it("doit afficher le titre du portfolio", () => {
    render(<RetroBootScreen />)

    expect(
      screen.getByText("Portfolio MimiStack OS")
    ).toBeInTheDocument()
  })

  it("doit commencer avec un chargement à 0%", () => {
    vi.useFakeTimers()

    render(<RetroBootScreen />)

    expect(
      screen.getByText("Chargement... 0%")
    ).toBeInTheDocument()

    expect(
      screen.getByText("Initialisation du système...")
    ).toBeInTheDocument()
  })

  it("doit faire progresser le chargement", () => {
    vi.useFakeTimers()

    render(<RetroBootScreen />)

    act(() => {
    vi.advanceTimersByTime(500)
    })

    expect(
      screen.getByText("Chargement du portfolio v1.0...")
    ).toBeInTheDocument()

    expect(
      screen.getByText("Chargement... 20%")
    ).toBeInTheDocument()
  })

  it("doit terminer le chargement à 100%", () => {
    vi.useFakeTimers()

    render(<RetroBootScreen />)

    act(() => {
        vi.advanceTimersByTime(2500)
    })

    expect(
        screen.getByText("Tout est prêt!")
    ).toBeInTheDocument()

    expect(
        screen.getByText("Chargement... 100%")
    ).toBeInTheDocument()
  })
})