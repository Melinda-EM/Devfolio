import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import RetroDesktop from "../components/retro-desktop"

describe("RetroDesktop", () => {
  const renderDesktop = () => {
    const onOpenWindow = vi.fn()

    render(
      <RetroDesktop
        onOpenWindow={onOpenWindow}
      />
    )

    return {
      onOpenWindow,
    }
  }

  it("doit afficher les icônes du bureau", () => {
    renderDesktop()

    expect(
      screen.getByRole("button", { name: "A propos" })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: "Projets" })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: "Parcours" })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: "Compétences" })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: "Contact" })
    ).toBeInTheDocument()

    expect(
      screen.getByRole("button", { name: "Calculatrice" })
    ).toBeInTheDocument()
  })

  it("doit ouvrir la fenêtre Projets", async () => {
    const user = userEvent.setup()
    const { onOpenWindow } = renderDesktop()

    await user.click(
      screen.getByRole("button", { name: "Projets" })
    )

    expect(onOpenWindow).toHaveBeenCalledTimes(1)
    expect(onOpenWindow).toHaveBeenCalledWith(
      "projects",
      "Projets",
      expect.anything()
    )
  })

  it("doit ouvrir la fenêtre Parcours", async () => {
    const user = userEvent.setup()
    const { onOpenWindow } = renderDesktop()

    await user.click(
      screen.getByRole("button", { name: "Parcours" })
    )

    expect(onOpenWindow).toHaveBeenCalledWith(
      "career",
      "Parcours",
      expect.anything()
    )
  })

  it("doit ouvrir la fenêtre Compétences", async () => {
    const user = userEvent.setup()
    const { onOpenWindow } = renderDesktop()

    await user.click(
      screen.getByRole("button", { name: "Compétences" })
    )

    expect(onOpenWindow).toHaveBeenCalledWith(
      "skills",
      "Compétences",
      expect.anything()
    )
  })

  it("doit ouvrir la fenêtre Contact", async () => {
    const user = userEvent.setup()
    const { onOpenWindow } = renderDesktop()

    await user.click(
      screen.getByRole("button", { name: "Contact" })
    )

    expect(onOpenWindow).toHaveBeenCalledWith(
      "contact",
      "Contact",
      expect.anything()
    )
  })

  it("doit ouvrir la calculatrice", async () => {
    const user = userEvent.setup()
    const { onOpenWindow } = renderDesktop()

    await user.click(
      screen.getByRole("button", { name: "Calculatrice" })
    )

    expect(onOpenWindow).toHaveBeenCalledWith(
      "calculator",
      "Calculatrice",
      expect.anything()
    )
  })
})