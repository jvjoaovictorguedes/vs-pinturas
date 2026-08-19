# VS Pinturas — Escopo inicial do site

Projeto Next.js 16 + React 19 + Tailwind v4, seguindo o mesmo padrão
arquitetural do projeto Casa Moov: tokens de cor via CSS variables,
componentes modulares em `layout/`, `sections/` e `ui/`, e conteúdo
centralizado em `content/`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## O que já está pronto

- Estrutura completa Next.js (App Router) com TypeScript e Tailwind v4
- Paleta de cores derivada do logo (preto suavizado, vermelho, branco/prata)
- **Dark mode funcional** com botão no header, sem "flash" de tela ao
  carregar (script inline em `lib/theme-script.ts`) e preferência salva
  no navegador do cliente
- Header com comportamento scroll-aware (fica escuro sobre o hero, claro
  ao rolar) e menu mobile
- Elementos gráficos remetendo a pintura: respingo de tinta (SVG),
  pincelada como divisor, textura de "rolo" em baixa opacidade, e uma
  animação de "revelar" o título do hero como se fosse pincelado
- 3 páginas: Início (`/`), Serviços (`/servicos`), Sobre (`/sobre`)
- Botão flutuante de WhatsApp e CTA no header

## O que falta você preencher (marcado com `TODO` no código)

- `content/site.ts` — número real de WhatsApp, Instagram, cidade e e-mail
- `content/servicos.ts` — lista final de serviços com textos revisados
- `content/depoimentos.ts` — depoimentos reais de clientes
- `app/sobre/page.tsx` — texto real de história/posicionamento
- Fotos reais de obras (antes/depois) — hoje o site está sem galeria de
  fotos porque não recebi imagens de trabalhos executados; assim que
  tiver, dá pra montar uma seção de portfólio/antes-depois facilmente
  seguindo o mesmo padrão dos outros componentes de `sections/`

## Paleta de cores (`app/globals.css`)

| Token | Claro | Escuro |
|---|---|---|
| `--color-paper` (fundo) | `#ffffff` | `#171716` |
| `--color-ink` (texto/preto) | `#161615` | `#f3f2ef` |
| `--color-brand-red` (vermelho) | `#dd1f1f` | `#ff4f42` |

O preto do modo escuro é intencionalmente suavizado (nunca `#000` puro)
pra não cansar a vista em uso prolongado.
