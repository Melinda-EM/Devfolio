import { describe, expect, it } from "vitest"
import { skills } from "../data/skills"

describe("Skills data", () => {
  it("doit contenir au moins une catégorie", () => {
    expect(skills.length).toBeGreaterThan(0)
  })

  it("chaque catégorie doit avoir un titre", () => {
    skills.forEach((category) => {
      expect(category.title).toBeDefined()
      expect(category.title.trim()).not.toBe("")
    })
  })

  it("les titres des catégories doivent être uniques", () => {
    const titles = skills.map((category) => category.title)

    expect(new Set(titles).size).toBe(titles.length)
  })

  it("chaque catégorie doit avoir une icône", () => {
    skills.forEach((category) => {
      expect(category.icon).toBeDefined()
      expect(category.icon.trim()).not.toBe("")
    })
  })

  it("chaque catégorie doit avoir une couleur", () => {
    skills.forEach((category) => {
      expect(category.color).toBeDefined()
      expect(category.color.trim()).not.toBe("")
    })
  })

  it("chaque catégorie doit contenir au moins une compétence", () => {
    skills.forEach((category) => {
      expect(category.skills.length).toBeGreaterThan(0)
    })
  })

  it("chaque compétence doit avoir un nom et une icône", () => {
    skills.forEach((category) => {
      category.skills.forEach((skill) => {
        expect(skill.name).toBeDefined()
        expect(skill.name.trim()).not.toBe("")

        expect(skill.icon).toBeDefined()
        expect(skill.icon.trim()).not.toBe("")
      })
    })
  })

  it("aucune compétence ne doit être en double dans une catégorie", () => {
    skills.forEach((category) => {
      const names = category.skills.map((skill) => skill.name)

      expect(new Set(names).size).toBe(names.length)
    })
  })

  it("doit contenir les catégories principales", () => {
    const titles = skills.map((category) => category.title)

    expect(titles).toContain("Langages")
    expect(titles).toContain("Frameworks")
    expect(titles).toContain("Bases de données")
    expect(titles).toContain("Outils de développement")
    expect(titles).toContain("Soft Skills")
  })

  it("chaque catégorie doit respecter sa structure", () => {
    skills.forEach((category) => {
      expect(category).toHaveProperty("title")
      expect(category).toHaveProperty("icon")
      expect(category).toHaveProperty("color")
      expect(category).toHaveProperty("skills")

      expect(Array.isArray(category.skills)).toBe(true)
    })
  })
})