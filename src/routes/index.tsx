import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { portfolioCategories, portfolioProjects } from "../data/portfolio";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  ExternalLink,
  Gamepad2,
  Layers3,
  Menu,
  MessageCircle,
  Play,
  Shield,
  Sparkles,
  Swords,
  WandSparkles,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const categories = portfolioCategories;

const projects = portfolioProjects;

const services = [
  { icon: Layers3, title: "Mods & Sistemas", text: "Mecânicas exclusivas, eventos e sistemas feitos sob medida para o seu servidor." },
  { icon: Swords, title: "Weapons & Armors", text: "Equipamentos customizados com identidade visual e integração ao seu projeto." },
  { icon: WandSparkles, title: "Skills & Effects", text: "Skills, partículas e efeitos visuais para transformar a experiência de combate." },
  { icon: Gamepad2, title: "Maps & NPCs", text: "Zonas, NPCs e ambientes exclusivos para criar conteúdo que diferencia seu servidor." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08070b] text-white selection:bg-violet-400/30">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(126,34,206,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(30,64,175,0.14),transparent_25%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08070b]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,0.18)]">
              <Swords className="h-5 w-5 text-violet-300" />
            </div>
            <div>
              <div className="text-lg font-black tracking-[0.18em]">ALDORA</div>
              <div className="text-[9px] font-semibold tracking-[0.35em] text-zinc-500">L2 DEVELOPMENT STUDIO</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 lg:flex">
            <a className="transition hover:text-white" href="#home">Início</a>
            <a className="transition hover:text-white" href="#services">Serviços</a>
            <a className="transition hover:text-white" href="#portfolio">Portfólio</a>
            <a className="transition hover:text-white" href="#about">Sobre</a>
            <a className="transition hover:text-white" href="#contact">Contato</a>
          </nav>

          <a href="#contact" className="hidden items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-200 transition hover:border-violet-300/60 hover:bg-violet-500/20 lg:flex">
            Solicitar orçamento <ArrowRight className="h-4 w-4" />
          </a>

          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-zinc-300 lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#08070b] px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm text-zinc-300">
              {["home", "services", "portfolio", "about", "contact"].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="capitalize">
                  {item === "home" ? "Início" : item === "services" ? "Serviços" : item === "portfolio" ? "Portfólio" : item === "about" ? "Sobre" : "Contato"}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative z-10 flex min-h-screen items-center pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#08070b_0%,rgba(8,7,11,0.78)_40%,rgba(8,7,11,0.2)_100%),linear-gradient(0deg,#08070b_0%,transparent_35%,rgba(8,7,11,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2400&q=85')] bg-cover bg-center opacity-45" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
              <Sparkles className="h-3.5 w-3.5" /> Lineage II Custom Development
            </div>
            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Seu servidor.
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">Sua identidade.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Desenvolvimento de conteúdo customizado para Lineage II: sistemas, mapas, NPCs, equipamentos, skills, efeitos e experiências que fazem seu projeto ser lembrado.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-black transition hover:bg-violet-100">
                Explorar portfólio <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/10">
                Falar sobre meu projeto <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.18em] text-zinc-500">
              <span>Interlude</span><span>High Five</span><span>Custom</span><span>Private Servers</span>
            </div>
          </div>

          <div className="hidden items-end justify-end lg:flex">
            <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-zinc-500">
                <span>Studio Showcase</span><span className="text-emerald-400">● Online</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85" alt="Lineage II development showcase" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold">Custom MMORPG Assets</div>
                  <div className="mt-1 text-xs text-zinc-500">Design • Development • Integration</div>
                </div>
                <Play className="h-5 w-5 text-violet-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">O que fazemos</div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Conteúdo que dá personalidade ao seu servidor.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text: description }) => (
              <div key={title} className="group bg-[#0b0a10] p-7 transition hover:bg-[#100d17]">
                <Icon className="h-7 w-7 text-violet-300 transition group-hover:scale-110" />
                <h3 className="mt-7 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Portfólio</div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Projetos em destaque.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-zinc-500">Uma seleção de conceitos e trabalhos para mostrar o nível visual e técnico do estúdio.</p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition ${
                activeCategory === category
                  ? "border-violet-400/40 bg-violet-500/15 text-violet-200"
                  : "border-white/10 bg-white/[0.02] text-zinc-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              to="/portfolio/$slug"
              params={{ slug: project.slug }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]"
            >
              <article>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur">{project.category}</div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-lg font-bold">{project.title}</div>
                      <div className="mt-1 text-xs text-zinc-300">{project.tag}</div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur transition group-hover:opacity-100">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 border-y border-white/10 bg-gradient-to-b from-violet-950/10 to-transparent">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Por trás do projeto</div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Não é só conteúdo. É identidade.</h2>
          </div>
          <div className="space-y-5 text-zinc-400">
            <p className="leading-7">Cada servidor tem uma proposta. O objetivo é transformar essa proposta em sistemas, assets e experiências visuais que façam sentido dentro do gameplay.</p>
            <p className="leading-7">Do conceito à integração no core, a produção é pensada para preservar performance, coerência visual e a sensação clássica que torna Lineage II especial.</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><Code2 className="h-5 w-5 text-violet-300" /><div className="mt-3 font-bold text-white">Development</div><div className="mt-1 text-xs text-zinc-600">Java • Scripts • Systems</div></div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5"><Shield className="h-5 w-5 text-sky-300" /><div className="mt-3 font-bold text-white">Custom Assets</div><div className="mt-1 text-xs text-zinc-600">3D • UI • VFX • Maps</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950/50 via-[#110d18] to-sky-950/30 p-8 sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Vamos criar?</div>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Tem uma ideia para seu servidor?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">Conte o que você quer construir. Podemos conversar sobre escopo, referências, prazo e a melhor forma de transformar a ideia em algo jogável.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-black transition hover:bg-violet-100">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href="mailto:contato@aldora.dev" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold transition hover:bg-white/10">
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div>© {new Date().getFullYear()} Aldora Studio. Lineage II custom development.</div>
          <div className="flex gap-5"><a href="#portfolio" className="hover:text-zinc-300">Portfólio</a><a href="#contact" className="hover:text-zinc-300">Contato</a></div>
        </div>
      </footer>

      <a href="https://wa.me/" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-500 text-white shadow-2xl shadow-emerald-950/50 transition hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed bottom-0 left-0 right-0 z-0 h-1/3 bg-gradient-to-t from-violet-950/10 to-transparent" />
    </main>
  );
}
