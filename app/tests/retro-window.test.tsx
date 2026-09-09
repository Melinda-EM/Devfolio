import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import RetroWindow from "../components/retro-window"

describe("RetroWindow", () => {
  const renderWindow = (isMaximized = false) => {
    const onClose = vi.fn()
    const onMinimize = vi.fn()
    const onMaximize = vi.fn()
    const onFocus = vi.fn()
    const onPositionChange = vi.fn()

    render(
      <RetroWindow
        id="projects"
        title="Projets"
        position={{ x: 100, y: 100 }}
        size={{ width: 500, height: 400 }}
        zIndex={1}
        isMaximized={isMaximized}
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        onFocus={onFocus}
        onPositionChange={onPositionChange}
      >
        <div>Contenu de la fenêtre</div>
      </RetroWindow>
    )

    return {
      onClose,
      onMinimize,
      onMaximize,
      onFocus,
      onPositionChange,
    }
  }

    it("doit afficher le titre et le contenu", () => {
        renderWindow()

        expect(screen.getByText("Projets")).toBeInTheDocument()
        expect(screen.getByText("Contenu de la fenêtre")).toBeInTheDocument()
    })

    it("doit appeler onClose lorsqu'on clique sur le bouton fermer", async () => {
    const user = userEvent.setup()
    const { onClose } = renderWindow()

    await user.click(
        screen.getByRole("button", { name: "Fermer" })
    )

    expect(onClose).toHaveBeenCalledTimes(1)
    })

    it("doit appeler onMinimize lorsqu'on clique sur le bouton minimiser", async () => {
    const user = userEvent.setup()
    const { onMinimize } = renderWindow()

    await user.click(
        screen.getByRole("button", { name: "Minimiser" })
    )

    expect(onMinimize).toHaveBeenCalledTimes(1)
    })

    it("doit appeler onMaximize lorsqu'on clique sur le bouton maximiser", async () => {
    const user = userEvent.setup()
    const { onMaximize } = renderWindow()

    await user.click(
        screen.getByRole("button", { name: "Maximiser" })
    )

    expect(onMaximize).toHaveBeenCalledTimes(1)
    })

    it("doit afficher le bouton Restaurer lorsque la fenêtre est maximisée", () => {
    renderWindow(true)

    expect(
        screen.getByRole("button", { name: "Restaurer" })
    ).toBeInTheDocument()
    })
})