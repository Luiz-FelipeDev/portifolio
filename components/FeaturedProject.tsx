import { ExternalLink } from "lucide-react";
import Image from "next/image"; // Importe o componente de Imagem do Next

export default function FeaturedProject() {
  return (
    // Adicionado: flex flex-col md:flex-row para layout responsivo
    <div className="relative rounded-2xl p-8 md:p-12 mb-12 bg-gradient-to-br from-accent2/8 to-accent/8 border border-white/10 flex flex-col md:flex-row justify-between items-start gap-10">
      
      {/* Coluna de Conteúdo (Texto e Botões) */}
      <div className="flex-1">
        <span className="inline-block font-mono text-[11px] uppercase tracking-widest text-accent mb-4">
          Projeto em destaque
        </span>

        <h3 className="font-display font-bold text-2xl md:text-4xl text-ink mb-4 max-w-xl">
          Ezer Aceleradora de Startups
        </h3>

        <p className="text-muted max-w-xl leading-relaxed mb-8">
          O Ezer é uma ferramenta de gerenciamento de projetos que resolve a falta de organização e padronização no acompanhamento de startups e projetos de inovação. A plataforma ajuda times a estruturarem corretamente seu Lean Canvas, dá aos gestores clareza sobre o real nível de maturidade tecnológica TRL da iniciativa e oferece a aceleradoras e incubadoras uma visão centralizada para monitorar múltiplos projetos ao mesmo tempo. Além de unificar o acompanhamento metodológico, a ferramenta se diferencia ao integrar a gestão contábil completa de todo o projeto.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {["Next.js", "Node.js", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] uppercase tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://ezertech.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider bg-gradient-to-r from-accent2 to-accent text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Ver projeto <ExternalLink size={16} />
          </a>
          
        </div>
      </div>

      {/* --- Container do QR Code (Nova Seção) --- */}
      {/* Estilizado para ter um fundo sutil, borda e centralizar no mobile */}
      <div className="flex flex-col items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl self-center md:self-start flex-shrink-0">
        <div className="overflow-hidden rounded-lg bg-white"> {/* Fundo branco para contraste */}
          <Image
            src="/qr-code.png" // CAMINHO DA SUA IMAGEM NA PASTA PUBLIC
            alt="QR Code para o projeto Ezer"
            width={130}  // Largura visual desejada
            height={130} // Altura visual desejada
            className="block"
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted/80 text-center">
          Acesse via celular
        </span>
      </div>
      {/* ------------------------------------------ */}

    </div>
  );
}