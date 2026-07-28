import { Bookmark, ExternalLink } from "lucide-react";
import FeaturedProject from "./FeaturedProject";

type Repo = {
  nome: string;
  descricao: string;
  tecnologias: string[];
  link: string;
};

const repositorios: Repo[] = [
  {
    nome: "API para gestão escolar",
    descricao:
      "Sistema de gerenciamento escolar desenvolvido com Django REST Framework, oferecendo uma API REST para cadastro e gerenciamento de alunos, professores, turmas e disciplinas.",
    tecnologias: ["Python", "DjangoREST"],
    link: "https://github.com/Luiz-FelipeDev/django-rest-escola",
  },
  {
    nome: "madeirAR",
    descricao:
    "Aplicação desenvolvida para facilitar o gerenciamento de produtos madeireiros por meio de uma interface intuitiva, permitindo o cadastro, consulta e organização de informações de forma eficiente.",
    tecnologias: ["JavaScript", "Three.js"],
    link: "https://github.com/Luiz-FelipeDev/madeirAR",
  },
  {
    nome: "Sistema Bancário Nubank",
    descricao:
      "Sistema bancário desenvolvido como trabalho acadêmico de Banco de Dados, simulando operações financeiras como cadastro de clientes, contas, transações e consultas, com foco em modelagem relacional e manipulação de dados.",
    tecnologias: ["Node.js", "Express"],
    link: "https://nubank-trabalho-equipe-8.vercel.app/",
  },
  {
    nome: "Desafio de backend jr - Itaú",
    descricao:
      "API REST desenvolvida em Java e Spring Boot como solução para o desafio técnico do Itaú. O projeto implementa o gerenciamento de transações e o cálculo de estatísticas em tempo real, seguindo princípios de arquitetura limpa, boas práticas de desenvolvimento, validação de dados, testes e organização em camadas. O foco foi construir uma aplicação performática, de fácil manutenção e alinhada aos requisitos propostos pelo desafio.",
    tecnologias: ["Java", "Spring"],
    link: "https://github.com/Luiz-FelipeDev/Desafio-Itau-Java",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="bg-bg px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="inline-block font-display font-bold text-3xl md:text-5xl mb-14 md:mb-20 bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
          Projetos
        </h2>

        <FeaturedProject />

        <div className="grid md:grid-cols-2 gap-6">
          {repositorios.map((repo) => (
            <a
              key={repo.nome}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-xl p-6 border border-white/10 bg-surface hover:border-accent/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <Bookmark size={18} className="text-accent" strokeWidth={1.75} />
                <ExternalLink
                  size={16}
                  className="text-muted group-hover:text-accent transition-colors"
                />
              </div>

              <h3 className="font-display font-semibold text-lg text-ink mb-2 group-hover:text-accent transition-colors">
                {repo.nome}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {repo.descricao}
              </p>

              <div className="flex flex-wrap gap-2">
                {repo.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] uppercase tracking-wide text-accent bg-accent/10 rounded-full px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted mt-10">
          Veja todos os repositórios no{" "}
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            meu GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
