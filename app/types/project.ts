import { StaticImageData } from "next/image";

export type TeamMember = {
  role: string;
  count: number;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  teamSize: number;
  team?: TeamMember[];
  duration: string;
  image?: string | StaticImageData;
  view?: string;
  code?: string;
};