import { describe, expect, it } from "vitest"
import { projects } from "../data/project"

describe("Projects data", () => {
  it("contient des projets", () => {
    expect(projects.length).toBeGreaterThan(0)
  })

  it("chaque projet possède un id", () => {
    projects.forEach((project) => {
      expect(project.id).toBeDefined()
    })
  })

  it("chaque projet possède un id unique", () => {
    const ids = projects.map((project) => project.id)

    expect(new Set(ids).size).toBe(ids.length)
  })

  it("chaque projet possède un titre", () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy()
      expect(typeof project.title).toBe("string")
    })
  })

  it("chaque projet possède une description", () => {
    projects.forEach((project) => {
      expect(project.description).toBeTruthy()
      expect(typeof project.description).toBe("string")
    })
  })

  it("chaque projet possède une description longue", () => {
    projects.forEach((project) => {
      expect(project.longDescription).toBeTruthy()
      expect(typeof project.longDescription).toBe("string")
    })
  })

  it("chaque projet possède au moins une technologie", () => {
    projects.forEach((project) => {
      expect(project.tech.length).toBeGreaterThan(0)
    })
  })

  it("chaque technologie est une chaîne de caractères", () => {
    projects.forEach((project) => {
      project.tech.forEach((technology) => {
        expect(typeof technology).toBe("string")
        expect(technology.length).toBeGreaterThan(0)
      })
    })
  })

  it("chaque projet possède une équipe valide", () => {
    projects.forEach((project) => {
      expect(project.teamSize).toBeGreaterThan(0)
    })
  })

  it("la taille de l'équipe correspond au nombre de membres indiqués", () => {
    projects.forEach((project) => {
      if (project.team) {
        const totalMembers = project.team.reduce(
          (total, member) => total + member.count,
          0
        )

        expect(totalMembers).toBe(project.teamSize)
      }
    })
  })

  it("chaque rôle d'équipe possède un nombre valide", () => {
    projects.forEach((project) => {
      if (project.team) {
        project.team.forEach((member) => {
          expect(member.role).toBeTruthy()
          expect(member.count).toBeGreaterThan(0)
        })
      }
    })
  })

  it("chaque projet possède une durée", () => {
    projects.forEach((project) => {
      expect(project.duration).toBeTruthy()
      expect(typeof project.duration).toBe("string")
    })
  })

  it("les URLs GitHub sont valides lorsqu'elles existent", () => {
    projects.forEach((project) => {
      if (project.code) {
        expect(project.code).toMatch(/^https:\/\/github\.com\//)
      }
    })
  })

  it("les URLs de démonstration sont valides lorsqu'elles existent", () => {
    projects.forEach((project) => {
      if (project.view) {
        expect(project.view).toMatch(/^https:\/\//)
      }
    })
  })

  it("les titres des projets sont uniques", () => {
    const titles = projects.map((project) => project.title)

    expect(new Set(titles).size).toBe(titles.length)
  })

  it("les descriptions ne sont pas vides", () => {
    projects.forEach((project) => {
      expect(project.description.trim().length).toBeGreaterThan(0)
      expect(project.longDescription.trim().length).toBeGreaterThan(0)
    })
  })
})