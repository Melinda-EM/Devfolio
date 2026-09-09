import { test, expect } from "@playwright/test"

test("le portfolio doit démarrer correctement", async ({ page }) => {
  console.log("🧪 TEST : démarrage du portfolio")

  await page.goto("http://localhost:3000")

  await expect(
    page.getByText("Portfolio MimiStack OS")
  ).toBeVisible()

  console.log("✅ Portfolio chargé correctement")
})

test("doit permettre d'ouvrir la fenêtre Projets depuis le bureau", async ({ page }) => {
  console.log("🧪 TEST : ouverture de la fenêtre Projets")

  await page.goto("http://localhost:3000")

  const projectsIcon = page.getByRole("button", {
    name: "Projets",
  })

  await expect(projectsIcon).toBeVisible()
  console.log("  ✓ Icône Projets visible")

  await projectsIcon.click()
  console.log("  ✓ Clic sur Projets effectué")

  await expect(
    page.getByTestId("window-projects")
  ).toBeVisible()

  console.log("✅ Fenêtre Projets ouverte")
})

test("doit permettre de minimiser une fenêtre", async ({ page }) => {
  console.log("🧪 TEST : minimisation d'une fenêtre")

  await page.goto("http://localhost:3000")

  await page.getByRole("button", { name: "Projets" }).click()
  console.log("  ✓ Fenêtre Projets ouverte")

  const projectsWindow = page.getByTestId("window-projects")

  await expect(projectsWindow).toBeVisible()

  await projectsWindow.getByRole("button", {
    name: "Minimiser",
  }).click()

  console.log("  ✓ Clic sur Minimiser effectué")

  await expect(projectsWindow).not.toBeVisible()

  console.log("✅ Fenêtre minimisée")
})

test("doit permettre de restaurer une fenêtre depuis la barre des tâches", async ({ page }) => {
  console.log("🧪 TEST : restauration depuis la Taskbar")

  await page.goto("http://localhost:3000")

  await page.getByRole("button", { name: "Projets" }).click()

  const projectsWindow = page.getByTestId("window-projects")

  await expect(projectsWindow).toBeVisible()
  console.log("  ✓ Fenêtre Projets ouverte")

  await projectsWindow.getByRole("button", {
    name: "Minimiser",
  }).click()

  await expect(projectsWindow).not.toBeVisible()
  console.log("  ✓ Fenêtre minimisée")

  await page.getByRole("button", { name: /Projets/ }).last().click()
  console.log("  ✓ Clic sur Projets dans la Taskbar")

  await expect(projectsWindow).toBeVisible()

  console.log("✅ Fenêtre restaurée depuis la Taskbar")
})

test("doit permettre de maximiser et restaurer une fenêtre", async ({ page }) => {
  console.log("🧪 TEST : maximisation et restauration")

  await page.goto("http://localhost:3000")

  await page.getByRole("button", { name: "Projets" }).click()

  const projectsWindow = page.getByTestId("window-projects")

  await expect(projectsWindow).toBeVisible()
  console.log("  ✓ Fenêtre Projets ouverte")

  await projectsWindow.getByRole("button", {
    name: "Maximiser",
  }).click()

  console.log("  ✓ Clic sur Maximiser")

  await expect(
    projectsWindow.getByRole("button", {
      name: "Restaurer",
    })
  ).toBeVisible()

  console.log("  ✓ Fenêtre maximisée")

  await projectsWindow.getByRole("button", {
    name: "Restaurer",
  }).click()

  console.log("  ✓ Clic sur Restaurer")

  await expect(projectsWindow).toBeVisible()

  console.log("✅ Fenêtre restaurée à sa taille précédente")
})

test("doit permettre de fermer une fenêtre", async ({ page }) => {
  console.log("🧪 TEST : fermeture d'une fenêtre")

  await page.goto("http://localhost:3000")

  await page.getByRole("button", { name: "Projets" }).click()

  const projectsWindow = page.getByTestId("window-projects")

  await expect(projectsWindow).toBeVisible()
  console.log("  ✓ Fenêtre Projets ouverte")

  await projectsWindow.getByRole("button", {
    name: "Fermer",
  }).click()

  console.log("  ✓ Clic sur Fermer")

  await expect(projectsWindow).not.toBeVisible()

  console.log("✅ Fenêtre fermée")
})

test("doit permettre de rouvrir une fenêtre après fermeture", async ({ page }) => {
  console.log("🧪 TEST : réouverture après fermeture")

  await page.goto("http://localhost:3000")

  const projectsIcon = page.getByRole("button", {
    name: "Projets",
  })

  await projectsIcon.click()

  const projectsWindow = page.getByTestId("window-projects")

  await expect(projectsWindow).toBeVisible()
  console.log("  ✓ Première ouverture")

  await projectsWindow.getByRole("button", {
    name: "Fermer",
  }).click()

  await expect(projectsWindow).not.toBeVisible()
  console.log("  ✓ Fenêtre fermée")

  await projectsIcon.click()
  console.log("  ✓ Deuxième clic sur Projets")

  await expect(
    page.getByTestId("window-projects")
  ).toBeVisible()

  console.log("✅ Fenêtre correctement rouverte")
})

test("doit effectuer un calcul avec la calculatrice", async ({ page }) => {
  console.log("🧪 TEST : calculatrice")

  await page.goto("http://localhost:3000")

  await page.getByRole("button", {
    name: "Calculatrice",
  }).click()

  const calculatorWindow = page.getByTestId("window-calculator")

  await expect(calculatorWindow).toBeVisible()
  console.log("  ✓ Calculatrice ouverte")

  await calculatorWindow.getByRole("button", { name: "7" }).click()
  await calculatorWindow.getByRole("button", { name: "+" }).click()
  await calculatorWindow.getByRole("button", { name: "3" }).click()
  await calculatorWindow.getByRole("button", { name: "=" }).click()

  await expect(
    calculatorWindow.getByRole("status")
  ).toHaveText("10")

  console.log("✅ Calculatrice : 7 + 3 = 10")
})

test("doit permettre d'ouvrir plusieurs fenêtres", async ({ page }) => {
  console.log("🧪 TEST : plusieurs fenêtres")

  await page.goto("http://localhost:3000")

  await page.getByTestId("desktop-icon-projects").click()

  const projectsWindow = page.getByTestId("window-projects")

  await expect(projectsWindow).toBeVisible()
  console.log("  ✓ Projets ouverte")

  await page.getByRole("button", {
    name: "Démarrer",
  }).click()

  console.log("  ✓ Menu Démarrer ouvert")

  await page.getByRole("button", {
    name: /Programmes/,
  }).click()

  console.log("  ✓ Menu Programmes ouvert")

  await page.getByRole("button", {
    name: "Compétences",
  }).last().click()

  const skillsWindow = page.getByTestId("window-skills")

  await expect(skillsWindow).toBeVisible()

  console.log("  ✓ Compétences ouverte")
  console.log("✅ Les deux fenêtres sont ouvertes simultanément")
})

test("doit permettre d'ouvrir une application depuis Programmes", async ({ page }) => {
  console.log("🧪 TEST : menu Programmes")

  await page.goto("http://localhost:3000")

  await page.getByRole("button", {
    name: "Démarrer",
  }).click()

  console.log("  ✓ Menu Démarrer ouvert")

  const programsButton = page.getByRole("button", {
    name: /Programmes/,
  })

  await expect(programsButton).toBeVisible()

  await programsButton.click()

  console.log("  ✓ Menu Programmes ouvert")

  const projectsProgram = page.getByRole("button", {
    name: "Projets",
  }).last()

  await expect(projectsProgram).toBeVisible()

  await projectsProgram.click()

  console.log("  ✓ Programme Projets sélectionné")

  await expect(
    page.getByTestId("window-projects")
  ).toBeVisible()

  console.log("✅ Application ouverte depuis Programmes")
})