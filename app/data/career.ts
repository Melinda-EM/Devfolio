import art from '../../public/img/art.png';
import ecole from '../../public/img/ecole.png';
import reception from '../../public/img/reception.png';
import webac from '../../public/img/webac.jpg';
import reflectiv from '../../public/img/reflectiv.jpg';
import epitech from '../../public/img/epitech.jpg'
import { StaticImageData } from 'next/image';

export interface Slide {
    image: StaticImageData;
    title: string;
    description: string;
}

export const career: Slide[] = [
  {
    image: art,
    title: 'Bac_STD2A',
    description: 'Études de lycée en Arts Appliqués orientées sur les divers domaines qui composent l\'art.',
  },
  {
    image: ecole,
    title: 'Formation_Receptionniste',
    description: 'Formation professionnelle en gestion de l’accueil, service client, et organisation administrative.',
  },
  {
    image: reception,
    title: 'Receptionniste',
    description: 'Fonction de réceptionniste prise durant 3 ans au Séjours & Affaires à Vitry s/Seine',
  },
  {
    image: webac,
    title: 'Formation_Web@cadémie',
    description: 'Formation professionnelle en tant que Développeur Intégrateur Web.',
  },
  {
    image: reflectiv,
    title: 'Alternante_Développeuse_Web',
    description: 'Alternance à Réflectiv Windows Films à Bonneuil s/Marne.',
  },
  {
    image: epitech,
    title: 'Accompagnatrice_pédagogique',
    description: 'Encadrement des étudiants en 1ere et 2e année à la Web@cadémie.',
  }
]