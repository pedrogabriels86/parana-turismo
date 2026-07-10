export type ClassifiedCategory =
  | "aluguel"
  | "equipamentos"
  | "servicos"
  | "terceiros";

export type Classified = {
  id: string;
  title: string;
  category: ClassifiedCategory;
  price?: string;
  description: string;
  author: string;
  publishedHoursAgo: number;
  featured: boolean;
  featuredDaysLeft?: number;
  image: string;
};

export const classifieds: Classified[] = [
  {
    id: "c1",
    title: "Chácara com rio — feriado prolongado",
    category: "aluguel",
    price: "R$ 450 / diária",
    description: "Casa completa para 8 pessoas, churrasqueira e acesso ao rio.",
    author: "Maria S.",
    publishedHoursAgo: 2,
    featured: true,
    featuredDaysLeft: 5,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c2",
    title: "Guia 4x4 — Serras Gerais e Catoá",
    category: "terceiros",
    price: "R$ 350 / dia",
    description: "Expedições com veículo preparado, seguro e roteiro personalizado.",
    author: "João Guia",
    publishedHoursAgo: 5,
    featured: true,
    featuredDaysLeft: 12,
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c3",
    title: "Aluguel de barracas e varas de pesca",
    category: "equipamentos",
    price: "A partir de R$ 40",
    description: "Kit camping completo e equipamentos de pesca para o fim de semana.",
    author: "Pedro Equipamentos",
    publishedHoursAgo: 8,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c4",
    title: "Barqueiro — passeio no Rio Paranã",
    category: "terceiros",
    price: "R$ 180 / passeio",
    description: "Passeios de até 3 horas com parada para banho e fotos.",
    author: "Carlos Barqueiro",
    publishedHoursAgo: 14,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c5",
    title: "Cozinheira para grupos e acampamentos",
    category: "servicos",
    price: "Sob consulta",
    description: "Cardápio regional para grupos de até 20 pessoas.",
    author: "Ana Cozinha",
    publishedHoursAgo: 20,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c6",
    title: "Casa de temporada no centro",
    category: "aluguel",
    price: "R$ 280 / diária",
    description: "2 quartos, Wi-Fi e perto da praça. Ideal para famílias.",
    author: "Roberto L.",
    publishedHoursAgo: 30,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
];

export const categoryLabels: Record<ClassifiedCategory, string> = {
  aluguel: "Aluguel de Temporada",
  equipamentos: "Equipamentos",
  servicos: "Serviços Rápidos",
  terceiros: "Terceiros / Autônomos",
};
