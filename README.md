# Meu Portfólio

Projeto Next.js (App Router) + TypeScript + Tailwind CSS, com 4 seções:

1. **Sobre mim** (`components/About.tsx`)
2. **Trilha de experiência** — timeline (`components/Timeline.tsx`)
3. **Projetos** — grid de repositórios + card de destaque do projeto da UFC (`components/Projects.tsx` e `components/FeaturedProject.tsx`)
4. **Contato** (`components/Contact.tsx`)

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## O que personalizar antes de publicar

- `app/layout.tsx`: título e descrição (metadata) do site.
- `components/About.tsx`: seu nome e texto de apresentação.
- `components/Timeline.tsx`: array `trilha` — ajuste datas, títulos e descrições da sua jornada.
- `components/FeaturedProject.tsx`: nome, descrição, tecnologias e links do projeto da UFC.
- `components/Projects.tsx`: array `repositorios` — troque pelos seus projetos reais do GitHub, e o link no final da seção.
- `components/Contact.tsx`: array `links` — seu email, GitHub e LinkedIn reais.

## Publicar na Vercel

1. Crie um repositório no GitHub e suba este código.
2. Acesse vercel.com, faça login com GitHub.
3. "Add New Project" → selecione o repositório → Deploy.
   A Vercel detecta o Next.js automaticamente, não precisa configurar nada.
4. Toda vez que você der `git push` na branch principal, o site atualiza sozinho.
