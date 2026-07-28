const links = [
  {
    label: "Email",
    value: "luiz.siqueira695@gmail.com",
    href: "mailto:luiz.siqueira695@gmail.com",
  },
  {
    label: "GitHub",
    value: "https://github.com/Luiz-FelipeDev",
    href: "https://github.com/Luiz-FelipeDev",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/luiz-siqueira-dev/",
    href: "https://www.linkedin.com/in/luiz-siqueira-dev/",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="bg-surface px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="inline-block font-display font-bold text-3xl md:text-5xl mb-6 bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
          Vamos conversar?
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-12 leading-relaxed">
          Estou aberto a oportunidades, parcerias e trocas de ideia sobre
          tecnologia e empreendedorismo. Escolha o canal que preferir.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-wider border border-white/15 rounded-full px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] text-muted/60 mt-20">
          © {new Date().getFullYear()} Luiz Felipe. Feito com Next.js.
        </p>
      </div>
    </section>
  );
}
