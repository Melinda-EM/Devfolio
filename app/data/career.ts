import art from "../../public/img/art.png";
import ecole from "../../public/img/ecole.png";
import reception from "../../public/img/reception.png";
import webac from "../../public/img/webac.jpg";
import reflectiv from "../../public/img/reflectiv.jpg";
import epitech from "../../public/img/epitech.jpg";
import { StaticImageData } from "next/image";

export interface Slide {
  period: string;
  image: StaticImageData;
  title: string;
  description: string;
}

export const career: Slide[] = [
  {
    period: "2016",
    image: art,
    title: "Bac STD2A",
    description:
      "Études de lycée en Arts Appliqués orientées vers les différents domaines du design et de la création.",
  },
  {
    period: "2016 - 2017",
    image: ecole,
    title: "Formation Réceptionniste",
    description:
      "Formation professionnelle en gestion de l'accueil, relation client et organisation administrative.",
  },
  {
    period: "2017 - 2020",
    image: reception,
    title: "Réceptionniste",
    description:
      "Réceptionniste durant 3 ans chez Séjours & Affaires à Vitry-sur-Seine.",
  },
  {
    period: "2023 - 2025",
    image: webac,
    title: "Web@cadémie",
    description:
      "Formation Développeur Intégrateur Web à la Web@cadémie by Epitech.",
  },
  {
    period: "2025 - Aujourd'hui",
    image: reflectiv,
    title: "Alternante Développeuse Web",
    description:
      "Alternance chez Reflectiv Windows Films à Bonneuil-sur-Marne.",
  },
  {
    period: "2026 - Aujourd'hui",
    image: epitech,
    title: "Accompagnatrice pédagogique",
    description:
      "Accompagnement des étudiants de 1re et 2e année à la Web@cadémie.",
  },
];