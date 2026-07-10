export type Attraction = {
  id: string;
  slug: string;
  name: string;
  type: "natureza" | "historia" | "trilha";
  shortDescription: string;
  description: string;
  difficulty?: "leve" | "moderada" | "dificil";
  distance?: string;
  whatToBring?: string[];
  image: string;
};

export const attractions: Attraction[] = [
  {
    id: "a1",
    slug: "cachoeira-do-catoa",
    name: "Cachoeira do Catoá",
    type: "natureza",
    shortDescription: "Poços esmeralda e o cartão-postal de Paranã.",
    description:
      "Formações de água cristalina em tons de verde esmeralda, cercadas pelo cerrado das Serras Gerais. Ideal para banho e fotografia.",
    difficulty: "moderada",
    distance: "4,2 km (ida e volta)",
    whatToBring: ["Tênis de trilha", "Protetor solar", "Água", "Lanche leve"],
    image:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "a2",
    slug: "serras-gerais",
    name: "Serras Gerais",
    type: "natureza",
    shortDescription: "Mirantes, cânions e horizonte infinito.",
    description:
      "Paisagens abertas do Tocantins com mirantes naturais, trilhas e pôr do sol memorável. Base perfeita para expedições 4x4.",
    difficulty: "leve",
    distance: "Vários roteiros",
    whatToBring: ["Chapéu", "Binóculo", "Câmera", "Repelente"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "a3",
    slug: "povoado-calunga",
    name: "Povoado Calunga",
    type: "historia",
    shortDescription: "Memória, cultura e raiz quilombola.",
    description:
      "Comunidade de forte identidade cultural, com histórias, saberes e hospitalidade que revelam outra face de Paranã.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "a4",
    slug: "historia-de-1904",
    name: "História de 1904",
    type: "historia",
    shortDescription: "As origens da cidade e do território.",
    description:
      "Percurso narrativo sobre a fundação e os marcos que moldaram Paranã desde 1904 — para quem quer entender o lugar antes de explorá-lo.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "a5",
    slug: "trilha-dos-mirantes",
    name: "Trilha dos Mirantes",
    type: "trilha",
    shortDescription: "Subida técnica com vista panorâmica.",
    description:
      "Trilha com trechos de pedra e exposição ao sol. Recompensa com mirantes abertos sobre o vale e o rio.",
    difficulty: "dificil",
    distance: "7,5 km",
    whatToBring: ["Bastão", "2L de água", "Lanche", "Kit primeiros socorros"],
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=80",
  },
];

export function getAttraction(slug: string) {
  return attractions.find((item) => item.slug === slug);
}
