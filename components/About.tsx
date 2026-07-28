import Image from "next/image";


export default function About() {
  return (
    <section
      id="sobre"
      className="relative bg-bg px-6 md:px-16 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 md:gap-20 items-center">
        <div className="relative mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80">
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-accent2/20 to-accent/20 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-surface flex items-center justify-center">
            {/* Troque este bloco por <Image src="/sobre.jpg" alt="Seu Nome" fill className="object-cover" /> quando tiver sua foto */}
            <Image
            src="/image-linkedin.jpeg"
            alt="Seu Nome"
            fill
            className="rounded-full object-cover"
            priority
            />
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ink mb-6">
            Sobre mim{" "}
            <span className="bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
              
            </span>
          </h2>

          <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
  <p>
    Estudante de Engenharia da Computação pela UFC, com experiência em
    desenvolvimento de software desde os 15 anos. Minha trajetória inclui
    participação em bolsas de iniciação científica focadas em desenvolvimento
    de software e no programa de empreendedorismo da UFC.
  </p>
  <p>
    Tenho domínio em <span className="text-accent font-medium">Python</span>,{" "}
    <span className="text-accent font-medium">Django</span>,{" "}
    <span className="text-accent font-medium">Django REST Framework</span>, {" "}
    <span className="text-accent font-medium">JavaScript</span> {" "} e
    fundamentos sólidos em engenharia de software, estruturas de dados e
    análise de algoritmos. Atualmente me dedico a expandir minhas habilidades
    com novas tecnologias e frameworks.
  </p>
  <p>
    Sou uma pessoa curiosa, determinada e que valoriza o aprendizado contínuo.
    Participo ativamente de programas que desenvolvem tanto minhas habilidades
    técnicas quanto comportamentais, buscando sempre agregar valor em
    ambientes colaborativos.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}
