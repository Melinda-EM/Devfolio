import { describe, expect, it } from "vitest"
import { career } from "../data/career"

describe("Career data", () => {
  it("contient des entrées", () => {
    expect(career.length).toBeGreaterThan(0)
  })

  it("chaque entrée possède une période", () => {
    career.forEach((item) => {
      expect(item.period).toBeTruthy()
      expect(typeof item.period).toBe("string")
    })
  })

  it("chaque entrée possède un titre", () => {
    career.forEach((item) => {
      expect(item.title).toBeTruthy()
      expect(typeof item.title).toBe("string")
    })
  })

  it("chaque entrée possède une description", () => {
    career.forEach((item) => {
      expect(item.description).toBeTruthy()
      expect(typeof item.description).toBe("string")
    })
  })

  it("chaque entrée possède une image", () => {
    career.forEach((item) => {
      expect(item.image).toBeDefined()
    })
  })

  it("chaque entrée possède un type valide", () => {
    career.forEach((item) => {
      expect(["formation", "experience"]).toContain(item.type)
    })
  })

  it("contient au moins une formation", () => {
    const formations = career.filter(
      (item) => item.type === "formation"
    )

    expect(formations.length).toBeGreaterThan(0)
  })

  it("contient au moins une expérience", () => {
    const experiences = career.filter(
      (item) => item.type === "experience"
    )

    expect(experiences.length).toBeGreaterThan(0)
  })

  it("les titres sont uniques", () => {
    const titles = career.map((item) => item.title)

    expect(new Set(titles).size).toBe(titles.length)
  })

  it("les périodes ne sont pas vides", () => {
    career.forEach((item) => {
      expect(item.period.trim().length).toBeGreaterThan(0)
    })
  })

  it("les descriptions ne sont pas vides", () => {
    career.forEach((item) => {
      expect(item.description.trim().length).toBeGreaterThan(0)
    })
  })

  it("les formations ont uniquement le type formation", () => {
    const formations = career.filter(
      (item) => item.type === "formation"
    )

    formations.forEach((item) => {
      expect(item.type).toBe("formation")
    })
  })

  it("les expériences ont uniquement le type experience", () => {
    const experiences = career.filter(
      (item) => item.type === "experience"
    )

    experiences.forEach((item) => {
      expect(item.type).toBe("experience")
    })
  })

  it("les périodes contiennent au moins une année", () => {
    career.forEach((item) => {
      expect(item.period).toMatch(/\d{4}/)
    })
  })

  it("les entrées possèdent une structure cohérente", () => {
    career.forEach((item) => {
      expect(item).toHaveProperty("period")
      expect(item).toHaveProperty("image")
      expect(item).toHaveProperty("title")
      expect(item).toHaveProperty("description")
      expect(item).toHaveProperty("type")
    })
  })
})