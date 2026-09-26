export type PortfolioCategory =
  | "Mods"
  | "Maps"
  | "NPCs"
  | "Effects"
  | "Skills"
  | "Bosses"
  | "Weapons"
  | "Armors"
  | "Interfaces";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: PortfolioCategory;
  tag: string;
  image: string;
  description: string;
  details: string[];
  technologies: string[];
  featured?: boolean;
  gallery?: string[];
};

export const portfolioCategories = [
  "Todos",
  "Mods",
  "Maps",
  "NPCs",
  "Effects",
  "Skills",
  "Bosses",
  "Weapons",
  "Armors",
  "Interfaces",
] as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "crimson-citadel",
    title: "Crimson Citadel",
    category: "Maps",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=85",
    tag: "World Design",
    description: "Zona custom criada para encontros PvP e progressão de endgame, com identidade visual própria.",
    details: ["Layout pensado para fluxo de jogadores", "Áreas de farm e conflito", "Integração preparada para eventos"],
    technologies: ["Map Design", "World Building", "Gameplay"],
    featured: true,
  },
  {
    slug: "ancient-dragon",
    title: "Ancient Dragon",
    category: "Bosses",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=85",
    tag: "Custom Boss",
    description: "Boss customizado com presença visual marcante e mecânicas pensadas para grupos.",
    details: ["Design de encounter", "Drops e recompensas configuráveis", "Integração com spawn e eventos"],
    technologies: ["Boss Design", "Java", "NPC"],
    featured: true,
  },
  {
    slug: "arcane-arsenal",
    title: "Arcane Arsenal",
    category: "Weapons",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1600&q=85",
    tag: "Custom Assets",
    description: "Linha de equipamentos customizados com linguagem visual própria para servidores privados.",
    details: ["Modelos e conceitos exclusivos", "Stats configuráveis", "Preparação para integração"],
    technologies: ["3D", "Textures", "Item Design"],
  },
  {
    slug: "eclipse-interface",
    title: "Eclipse Interface",
    category: "Interfaces",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    tag: "UI / HUD",
    description: "Interface customizada para modernizar a experiência sem perder a identidade de Lineage II.",
    details: ["HUD customizado", "Elementos de navegação", "Visual responsivo para diferentes resoluções"],
    technologies: ["UI", "HUD", "Interface"],
    featured: true,
  },
  {
    slug: "celestial-skills",
    title: "Celestial Skills",
    category: "Skills",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1600&q=85",
    tag: "VFX",
    description: "Conjunto de skills e efeitos visuais para tornar o combate mais impactante.",
    details: ["VFX customizados", "Identidade por classe", "Integração com skills existentes ou novas"],
    technologies: ["VFX", "Skills", "Animations"],
  },
  {
    slug: "nightfall-npc",
    title: "Nightfall NPC",
    category: "NPCs",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1600&q=85",
    tag: "3D / Script",
    description: "NPC customizado com função visual e gameplay, preparado para integrar sistemas exclusivos.",
    details: ["Visual customizado", "Dialog e funções", "Integração com sistemas"],
    technologies: ["NPC", "Scripts", "3D"],
  },
];

export const getPortfolioProject = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);
