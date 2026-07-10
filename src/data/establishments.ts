export type Plan = "free" | "vip";

export type Establishment = {
  id: string;
  slug: string;
  name: string;
  category: "pousada" | "hotel" | "restaurante";
  plan: Plan;
  shortDescription: string;
  description: string;
  address: string;
  whatsapp?: string;
  image: string;
  gallery: string[];
  amenities: string[];
  rating: number;
  views: number;
  clicks: number;
  clickGoal: number;
  viewGoal: number;
};

export const establishments: Establishment[] = [
  {
    id: "1",
    slug: "pousada-serra-azul",
    name: "Pousada Serra Azul",
    category: "pousada",
    plan: "vip",
    shortDescription: "Vista para as Serras Gerais e café da manhã regional.",
    description:
      "Aconchego no alto das Serras Gerais, com suítes amplas, café da manhã com produtos locais e acesso facilitado às trilhas do Catoá.",
    address: "Rodovia TO-373, Km 12 — Paranã, TO",
    whatsapp: "5563999990001",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Wi-Fi", "Piscina", "Estacionamento", "Café da manhã"],
    rating: 4.8,
    views: 842,
    clicks: 126,
    clickGoal: 150,
    viewGoal: 1000,
  },
  {
    id: "2",
    slug: "restaurante-beira-rio",
    name: "Restaurante Beira Rio",
    category: "restaurante",
    plan: "vip",
    shortDescription: "Peixe fresco e pratos do cerrado à beira do Paranã.",
    description:
      "Culinária tocantinense com peixes do rio e ingredientes do cerrado. Ambiente familiar com vista para o espelho d'água.",
    address: "Av. Beira Rio, 210 — Centro, Paranã",
    whatsapp: "5563999990002",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Wi-Fi", "Área externa", "Aceita cartão"],
    rating: 4.6,
    views: 1204,
    clicks: 210,
    clickGoal: 200,
    viewGoal: 1200,
  },
  {
    id: "3",
    slug: "hotel-cerrado-inn",
    name: "Hotel Cerrado Inn",
    category: "hotel",
    plan: "vip",
    shortDescription: "Conforto urbano com base para expedições 4x4.",
    description:
      "Ideal para grupos e famílias. Quartos climatizados, suporte a guias locais e transfer para atrativos naturais.",
    address: "Rua das Palmeiras, 45 — Paranã, TO",
    whatsapp: "5563999990003",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Wi-Fi", "Ar-condicionado", "Recepção 24h", "Lavanderia"],
    rating: 4.5,
    views: 610,
    clicks: 88,
    clickGoal: 120,
    viewGoal: 800,
  },
  {
    id: "4",
    slug: "cantina-da-praca",
    name: "Cantina da Praça",
    category: "restaurante",
    plan: "free",
    shortDescription: "Comida caseira no centro da cidade.",
    description: "Pratos do dia e lanches rápidos na praça central.",
    address: "Praça da Matriz, s/n — Paranã, TO",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    gallery: [],
    amenities: [],
    rating: 4.2,
    views: 190,
    clicks: 0,
    clickGoal: 50,
    viewGoal: 300,
  },
];

export function getEstablishment(slug: string) {
  return establishments.find((item) => item.slug === slug);
}

export function getVipEstablishments() {
  return establishments.filter((item) => item.plan === "vip");
}
