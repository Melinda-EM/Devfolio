import connect from '../../public/img/connect_four.png'

export const projects = [
  {
    id: 1,
    title: "Pictioble.io",
    description: "Jeu de dessin multijoueur inspiré de Scribble.io, où les joueurs doivent deviner un mot à partir d’un dessin réalisé en temps réel.",
    longDescription: "Développez un jeu multijoueur dynamique basé sur le principe de Scribble.io. Un joueur reçoit un mot secret et doit le représenter en dessinant sur une toile interactive. Pendant ce temps, les autres participants observent le dessin évoluer en direct et tentent de deviner le mot le plus rapidement possible. Le jeu combine créativité, rapidité et déduction, avec un système de points, des manches successives, des mots de difficulté variable, et la possibilité de jouer entre amis ou avec des joueurs aléatoires. Idéal pour des sessions fun, compétitives et pleines de surprises.",
    
    tech: ["Golang"],
    
    teamSize: 3,
    team: [
        { role: "Frontend", count: 1 },
        { role: "Backend", count: 2 }
        ],
    duration: "1 mois",
    // image: "/img/projects/portfolio.png",
    // view: "https://...",
    // code: "https://github.com/...",
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
    // image: "/img/projects/portfolio.png",
    // view: "https://www.rezotop.com/",
  },
  {
    id: 3,
    title: "Connect Four",
    description: "Reproduction du puissance 4",
    longDescription: "Puissance 4 réalisé en Javascript, se joue au tour par tour, dans l'ambiance de l'espace",
    
    tech: ["Javascript", "HTML", "Tailwind"],
    
    teamSize: 1,
    // team: [
    //     { role: "Frontend", count: 1 },
    //     { role: "Backend", count: 2 }
    //     ],
    duration: "2 semaines",
    image: connect,
    view: "https://me-connect-four.netlify.app/",
  },
  {
    id: 4,
    title: "Seculendar",
    description: "Application mobile tout‑en‑un pour organiser sa journée, gérer ses tâches, consulter son calendrier et stocker ses mots de passe en toute sécurité.",
    longDescription: "Seculendar est une application mobile conçue pour centraliser l’organisation personnelle et renforcer la sécurité numérique. Elle combine un gestionnaire de tâches intuitif, un calendrier complet pour planifier ses journées, ainsi qu’un coffre‑fort sécurisé pour stocker et gérer ses mots de passe. Pensée pour simplifier le quotidien, Seculendar offre une interface fluide, des rappels intelligents, une synchronisation entre appareils et des fonctionnalités de protection avancées pour garantir la confidentialité de vos données sensibles. Que ce soit pour organiser votre emploi du temps, suivre vos objectifs ou sécuriser vos informations, Seculendar devient votre compagnon fiable pour une gestion efficace et sereine.",
    
    tech: ["React Native", "Tailwind"],
    
    teamSize: 1,
    // team: [
    //     { role: "Frontend", count: 1 },
    //     { role: "Backend", count: 2 }
    //     ],
    duration: "🚧 En cours de conception 🚧",
    // image: connect,
    // view: "https://me-connect-four.netlify.app/",
  },
]