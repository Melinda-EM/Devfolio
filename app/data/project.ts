export const projects = [
  {
    id: 1,
    title: "Pictioble.io",
    description: "Reproduction d'un scribble.io",
    longDescription: "Création d’un jeu de dessin où il faut deviner ce qui est crée.",
    
    tech: ["Golang"],
    
    teamSize: 3,
    team: [
        { role: "Frontend", count: 1 },
        { role: "Backend", count: 2 }
        ],
    duration: "1 mois",
    // image: "/img/projects/portfolio.png",
    view: "https://...",
    code: "https://github.com/...",
  },
  {
    id: 2,
    title: "Rezotop",
    description: "Mise en relation poseur de film/client pour la société Réflectiv",
    longDescription: "Site mettant en relation des clients qui ont besoin de poser du film pour vitrage et les poseurs certifiés",
    
    tech: ["Symfony", "React", "Tailwind"],
    
    teamSize: 3,
    team: [
        { role: "Frontend", count: 1 },
        { role: "Backend", count: 2 }
        ],
    duration: "2 mois",
    image: "/img/projects/portfolio.png",
    view: "https://www.rezotop.com/",
  },
]