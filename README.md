# Portfólio - Hugo Mendes

Next.js 14 (App Router) + React 18 + TypeScript. Gera um site estático.

## Rodar localmente
```bash
npm install
npm run dev      # http://localhost:3000
```

## Gerar o site para publicar
```bash
npm run build    # cria a pasta /out (site estático)
```
Publique a pasta `out` na Vercel, Netlify ou GitHub Pages. Na Vercel/Netlify basta importar o repositório.

## Onde editar
- `data/portfolio.ts`: textos, e-mail, links, projetos, stack e experiência.
- `components/Portfolio.tsx`: estrutura e componentes da página.
- `app/globals.css`: cores (variáveis no topo), tema claro/escuro e estilos.
- `app/layout.tsx`: título, descrição (SEO) e fontes.
- `public/`: coloque aqui sua foto (ex.: `profile.webp`) e use no lugar do "HM" no hero.

