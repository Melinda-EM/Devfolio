import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import RetroTaskbar from "../components/retro-taskbar"

describe("RetroTaskbar", () => {
  const renderTaskbar = () => {
    const onWindowClick = vi.fn()
    const onOpenWindow = vi.fn()

    render(
      <RetroTaskbar
        windows={[]}
        onWindowClick={onWindowClick}
        onOpenWindow={onOpenWindow}
      />
    )

    return {
      onWindowClick,
      onOpenWindow,
    }
  }

  it("doit afficher le bouton Démarrer", () => {
    renderTaskbar()

    expect(
      screen.getByRole("button", { name: /démarrer/i })
    ).toBeInTheDocument()
  })

  it("doit ouvrir le menu Démarrer", async () => {
    const user = userEvent.setup()

    renderTaskbar()

    await user.click(
      screen.getByRole("button", { name: /démarrer/i })
    )

    expect(screen.getByText("MimiStack OS")).toBeInTheDocument()
  })

  it("doit afficher les programmes lorsqu'on clique sur Programmes", async () => {
    const user = userEvent.setup()

    renderTaskbar()

    await user.click(
      screen.getByRole("button", { name: /démarrer/i })
    )

    await user.click(
      screen.getByRole("button", { name: /programmes/i })
    )

    expect(screen.getByText("A propos")).toBeInTheDocument()
    expect(screen.getByText("Projets")).toBeInTheDocument()
    expect(screen.getByText("Parcours")).toBeInTheDocument()
    expect(screen.getByText("CV")).toBeInTheDocument()
    expect(screen.getByText("Certifications")).toBeInTheDocument()
    expect(screen.getByText("Compétences")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
    expect(screen.getByText("Calculatrice")).toBeInTheDocument()
  })

  it("doit appeler onOpenWindow lorsqu'un programme est sélectionné", async () => {
    const user = userEvent.setup()

    const { onOpenWindow } = renderTaskbar()

    await user.click(
      screen.getByRole("button", { name: /démarrer/i })
    )

    await user.click(
      screen.getByRole("button", { name: /programmes/i })
    )

    await user.click(screen.getByText("Projets"))

    expect(onOpenWindow).toHaveBeenCalledTimes(1)

    expect(onOpenWindow).toHaveBeenCalledWith(
      "projects",
      "Projets",
      expect.anything()
    )
  })

  it("doit fermer le menu après l'ouverture d'un programme", async () => {
    const user = userEvent.setup()

    renderTaskbar()

    await user.click(
      screen.getByRole("button", { name: /démarrer/i })
    )

    await user.click(
      screen.getByRole("button", { name: /programmes/i })
    )

    expect(screen.getByText("Projets")).toBeInTheDocument()

    await user.click(screen.getByText("Projets"))

    expect(screen.queryByText("MimiStack OS")).not.toBeInTheDocument()
  })

  it("doit afficher les fenêtres actuellement ouvertes", () => {
    const onWindowClick = vi.fn()
    const onOpenWindow = vi.fn()

    render(
      <RetroTaskbar
        windows={[
          {
            id: "projects",
            title: "Projets",
            content: <div>Contenu</div>,
            position: { x: 100, y: 100 },
            size: { width: 500, height: 400 },
            zIndex: 1,
            isMinimized: false,
            isMaximized: false,
          },
        ]}
        onWindowClick={onWindowClick}
        onOpenWindow={onOpenWindow}
      />
    )

    expect(screen.getByText("Projets")).toBeInTheDocument()
  })
})