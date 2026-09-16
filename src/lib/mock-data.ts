import brasaImg from "@/assets/brasa-83.jpg";
import cafeImg from "@/assets/cafe-aurora.jpg";
import casaImg from "@/assets/casa-porto.jpg";
import studioImg from "@/assets/studio-flow.jpg";
import vivaImg from "@/assets/viva-fitness.jpg";

export type Business = {
  name: string;
  category: string;
  neighborhood: string;
  image: string;
  badge?: "Em destaque" | "Novo" | "Subindo" | "Patrocinado";
  trend?: string;
};

export const businesses: Business[] = [
  { name: "Casa do Porto", category: "Restaurante", neighborhood: "Tambaú", image: casaImg, badge: "Em destaque", trend: "Em alta" },
  { name: "Brasa 83", category: "Bar & Restaurante", neighborhood: "Manaíra", image: brasaImg, badge: "Subindo", trend: "Em alta" },
  { name: "Café Aurora", category: "Café", neighborhood: "Cabo Branco", image: cafeImg, badge: "Novo", trend: "Novidade" },
  { name: "Studio Flow", category: "Beleza", neighborhood: "Altiplano", image: studioImg, badge: "Patrocinado", trend: "Mais procurado" },
  { name: "Viva Fitness", category: "Academia", neighborhood: "Bessa", image: vivaImg, badge: "Em destaque", trend: "Subindo" },
  { name: "Maré Alta", category: "Restaurante", neighborhood: "Cabo Branco", image: casaImg, trend: "Em alta" },
  { name: "Ponto 21", category: "Bar", neighborhood: "Bancários", image: brasaImg, trend: "Novidade" },
  { name: "Casa Verde", category: "Café", neighborhood: "Torre", image: cafeImg, trend: "Mais procurado" },
];

export const categories = [
  ["Restaurantes", "Utensils"], ["Bares", "Martini"], ["Cafés", "Coffee"],
  ["Academias", "Dumbbell"], ["Beleza", "Sparkles"], ["Lojas", "ShoppingBag"],
  ["Hotéis", "BedDouble"], ["Eventos", "PartyPopper"], ["Serviços", "Wrench"],
] as const;

export const neighborhoods = ["Tambaú", "Manaíra", "Cabo Branco", "Bessa", "Altiplano", "Centro", "Torre", "Bancários"];

export const awardYears = [2025, 2024, 2023, 2022];

export const winners: Record<number, Business[]> = {
  2025: businesses.slice(0, 5),
  2024: businesses.slice(1, 6),
  2023: businesses.slice(2, 7),
  2022: businesses.slice(3, 8),
};