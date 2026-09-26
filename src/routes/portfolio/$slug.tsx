import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Tag } from "lucide-react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPortfolioProject } from "../../data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = getPortfolioProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: PortfolioProjectPage,
});

function PortfolioProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <main className="min-h-screen bg-[#08070b] text-white">
      <header className="border-b border-white/10 bg-[#08070b]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao portfólio
          </Link>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">Aldora Studio</span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-200">
              <Tag className="h-3 w-3" />
              {project.category}
            </div>
            <h1 className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{project.description}</p>

            <div className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <img src={project.image} alt={project.title} className="aspect-[16/9] h-full w-full object-cover" />
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-8">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Sobre o projeto</div>
            <div className="mt-5 space-y-4">
              {project.details.map((detail) => (
                <div key={detail} className="flex gap-3 text-sm leading-6 text-zinc-300">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-violet-300" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Tecnologias / áreas</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-zinc-300">
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/"
              hash="contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-black transition hover:bg-violet-100"
            >
              <MessageCircle className="h-4 w-4" />
              Quero algo parecido
            </Link>
          </aside>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">Projeto</div>
            <div className="mt-1 text-zinc-300">{project.tag}</div>
          </div>
          <Link to="/" hash="portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white">
            Ver outros projetos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
