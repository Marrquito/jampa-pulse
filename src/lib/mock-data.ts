import brasaImg from "@/assets/brasa-83.jpg";
import cafeImg from "@/assets/cafe-aurora.jpg";
import casaImg from "@/assets/casa-porto.jpg";
import studioImg from "@/assets/studio-flow.jpg";
import vivaImg from "@/assets/viva-fitness.jpg";

export type Badge = "Em destaque" | "Novo" | "Subindo";

export type Business = {
  name: string;
  category: string;
  neighborhood: string;
  image: string;
  badges: Badge[];
  awards: number[];
  trend?: string;
};

export const businesses: Business[] = [
  { name: "Casa do Porto", category: "Restaurante", neighborhood: "Tambaú", image: casaImg, badges: ["Em destaque"], awards: [2025, 2023], trend: "Em alta" },
  { name: "Brasa 83", category: "Bar & Restaurante", neighborhood: "Manaíra", image: brasaImg, badges: ["Em destaque", "Subindo"], awards: [2025, 2022], trend: "Em alta" },
  { name: "Café Aurora", category: "Café", neighborhood: "Cabo Branco", image: cafeImg, badges: ["Em destaque", "Novo"], awards: [2025, 2023], trend: "Novidade" },
  { name: "Studio Flow", category: "Beleza", neighborhood: "Altiplano", image: studioImg, badges: ["Em destaque"], awards: [2025, 2024, 2023, 2022], trend: "Mais procurado" },
  { name: "Viva Fitness", category: "Academia", neighborhood: "Bessa", image: vivaImg, badges: ["Em destaque", "Subindo"], awards: [2025, 2024, 2023, 2022], trend: "Subindo" },
  { name: "Maré Alta", category: "Restaurante", neighborhood: "Cabo Branco", image: casaImg, badges: ["Em destaque"], awards: [2024, 2022], trend: "Em alta" },
  { name: "Ponto 21", category: "Bar", neighborhood: "Bancários", image: brasaImg, badges: ["Em destaque", "Novo"], awards: [2024, 2023], trend: "Novidade" },
  { name: "Casa Verde", category: "Café", neighborhood: "Torre", image: cafeImg, badges: ["Em destaque"], awards: [2024, 2022], trend: "Mais procurado" },
];

export const categories = [
  ["Restaurantes", "Utensils"], ["Bares", "Martini"], ["Cafés", "Coffee"],
  ["Academias", "Dumbbell"], ["Beleza", "Sparkles"], ["Lojas", "ShoppingBag"],
  ["Hotéis", "BedDouble"], ["Eventos", "PartyPopper"], ["Serviços", "Wrench"],
] as const;

export const neighborhoods = ["Tambaú", "Manaíra", "Cabo Branco", "Bessa", "Altiplano", "Centro", "Torre", "Bancários"];

export const awardYears = [2025, 2024, 2023, 2022];

export const winnersOf = (year: number) => businesses.filter((b) => b.awards.includes(year));

export const winners: Record<number, Business[]> = Object.fromEntries(awardYears.map((y) => [y, winnersOf(y)]));

export const latestAward = (business: Business) => (business.awards.length ? Math.max(...business.awards) : undefined);
