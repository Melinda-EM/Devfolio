import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Calculatory from "../components/calculatory"

describe("Calculatory", () => {
  it("doit afficher l'affichage initial à 0", () => {
    render(<Calculatory />)

    expect(screen.getByRole("status")).toHaveTextContent("0")
  })

  it("doit afficher tous les boutons de la calculatrice", () => {
    render(<Calculatory />)

    const buttons = [
      "C",
      "±",
      "%",
      "÷",
      "7",
      "8",
      "9",
      "×",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "0",
      ".",
      "=",
    ]

    for (const button of buttons) {
      expect(
        screen.getByRole("button", { name: button })
      ).toBeInTheDocument()
    }
  })

  it("doit mettre à jour l'affichage lorsqu'on saisit un nombre", async () => {
    const user = userEvent.setup()

    render(<Calculatory />)

    await user.click(screen.getByRole("button", { name: "7" }))
    await user.click(screen.getByRole("button", { name: "5" }))

    expect(screen.getByRole("status")).toHaveTextContent("75")
  })

  it("doit effectuer une addition depuis l'interface", async () => {
    const user = userEvent.setup()

    render(<Calculatory />)

    await user.click(screen.getByRole("button", { name: "7" }))
    await user.click(screen.getByRole("button", { name: "+" }))
    await user.click(screen.getByRole("button", { name: "5" }))
    await user.click(screen.getByRole("button", { name: "=" }))

    expect(screen.getByRole("status")).toHaveTextContent("12")
  })

  it("doit remettre l'affichage à 0 avec le bouton C", async () => {
    const user = userEvent.setup()

    render(<Calculatory />)

    await user.click(screen.getByRole("button", { name: "7" }))
    await user.click(screen.getByRole("button", { name: "C" }))

    expect(screen.getByRole("status")).toHaveTextContent("0")
  })
})