import { ExternalLink } from "lucide-react";

type Experiencia = {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
  tipo: "profissional" | "academica";
};

const experiencias: Experiencia[] = [
  {
    empresa: "Universidade Federal do Ceará",
    cargo: "Bolsista — Desenvolvedor Back-End",
    periodo: "Mai 2026 — Hoje",
    descricao:
      "Desenvolvimento de um software de gerenciamento de projetos para startups e empresas com programas de pesquisa e inovação, em parceria com a equipe de bolsistas do Empreende UFC. O sistema conta com agentes inteligentes embutidos para resolução de dúvidas durante a gestão de projetos de P&D, com base na Lei do Bem e da Informática.",
    tecnologias: ["TypeScript", "Express", "PostgreSQL", "AWS", "Docker", "Next.js"],
    tipo: "profissional",
  },
  {
    empresa: "FUNCAP",
    cargo: "Bolsista de Iniciação Tecnológica — Desenvolvedor Back-End",
    periodo: "Ago 2025 — Abr 2026",
    descricao:
      "Desenvolvimento de projetos acadêmicos para estudantes de pós-graduação, atuando no back-end da aplicação com foco em arquitetura de dados e construção de APIs.",
    tecnologias: ["TypeScript", "Prisma ORM", "PostgreSQL", "Node.js", "Express"],
    link: "https://drive.google.com/file/d/1JEu6ArDNIa08YAdISQIQxGCOZaj-YpN0/view?usp=sharing",
    tipo: "profissional",
  },
  {
    empresa: "Bullean Technologies",
    cargo: "Estagiário em Desenvolvimento Back-End",
    periodo: "Mar 2023 — Dez 2023",
    descricao:
      "Atuação na manutenção e criação de software utilizando Python no back-end. Desenvolvimento de consultas SQL, criação de views e procedures para implementação de regras de negócio diretamente no banco de dados com PostgreSQL.",
    tecnologias: ["Python", "SQL", "PostgreSQL"],
    tipo: "profissional",
  },
  {
    empresa: "Universidade Federal do Ceará",
    cargo: "Engenharia da Computação",
    periodo: "2025 — Presente",
    descricao:
      "Formação em Engenharia da Computação com foco em desenvolvimento de software, engenharia de software, estruturas de dados, análise de algoritmos e gerenciamento de projetos de software.",
    tecnologias: ["Engenharia de Software", "Estruturas de Dados", "Algoritmos", "Gerenciamento"],
    tipo: "academica",
  },
];

export default function Timeline( ) {
  return (
    <section
      id="experiencia"
      className="relative bg-surface px-6 md:px-16 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="inline-block font-display font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
          Minha experiência
        </h2>

        {/* Jornada Profissional */}
        <h3 className="font-display font-semibold text-xl text-ink mb-8 mt-4">
          Jornada Profissional
        </h3>

        <ol className="relative mb-16">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10"
            aria-hidden="true"
          />

          {experiencias
            .filter((exp) => exp.tipo === "profissional")
            .map((exp) => (
              <li
                key={`${exp.empresa}-${exp.periodo}`}
                className="relative pl-10 pb-12 last:pb-0"
              >
                <span
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent2 to-accent"
                  aria-hidden="true"
                />

                <h3 className="font-display font-semibold text-xl md:text-2xl text-ink mb-1">
                  {exp.cargo}{" "}
                  {exp.link ? (
                    <>
                      na{" "}
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted decoration-accent underline-offset-4 hover:text-accent transition-colors"
                      >
                        {exp.empresa}
                      </a>
                      <ExternalLink
                        size={16}
                        className="inline ml-1 text-accent"
                      />
                    </>
                  ) : (
                    <>na {exp.empresa}</>
                  )}
                </h3>

                <p className="font-mono text-xs uppercase tracking-wide text-muted mb-4">
                  {exp.periodo}
                </p>

                <p className="text-muted max-w-xl leading-relaxed mb-3">
                  {exp.descricao}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] uppercase tracking-wide text-accent bg-accent/10 rounded-full px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
        </ol>

        {/* Jornada Acadêmica */}
        <h3 className="font-display font-semibold text-xl text-ink mb-8">
          Jornada Acadêmica
        </h3>

        <ol className="relative">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10"
            aria-hidden="true"
          />

          {experiencias
            .filter((exp) => exp.tipo === "academica")
            .map((exp) => (
              <li
                key={`${exp.empresa}-${exp.periodo}`}
                className="relative pl-10 pb-12 last:pb-0"
              >
                <span
                  className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-accent to-accent2"
                  aria-hidden="true"
                />

                <h3 className="font-display font-semibold text-xl md:text-2xl text-ink mb-1">
                  {exp.cargo}{" "}
                  <span className="text-accent text-base"></span>
                </h3>

                <p className="font-mono text-xs uppercase tracking-wide text-muted mb-4">
                  {exp.periodo}
                </p>

                <p className="text-muted max-w-xl leading-relaxed mb-3">
                  {exp.descricao}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tecnologias.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] uppercase tracking-wide text-accent bg-accent/10 rounded-full px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </li>
            ))}
        </ol>
      </div>
    </section>
  );
}
