export type ServicoItem = {
  titulo: string;
};

export type Servico = {
  slug: string;
  titulo: string;
  descricao: string;
  itens: ServicoItem[];
};

export const servicos: Servico[] = [
  {
    slug: "telhados-e-coberturas",
    titulo: "Telhados e Coberturas",
    descricao:
      "Manutenção, recuperação e proteção de telhados para manter sua cobertura segura e em boas condições.",
    itens: [
      { titulo: "Manutenção e reforma de telhados" },
      { titulo: "Vedação e impermeabilização de telhados" },
      { titulo: "Reparos e recuperação de telhas" },
      { titulo: "Limpeza e manutenção de calhas" },
    ],
  },
  {
    slug: "limpeza-e-manutencao",
    titulo: "Limpeza e Manutenção",
    descricao:
      "Serviços de limpeza e conservação para diferentes áreas, estruturas e equipamentos do imóvel.",
    itens: [
      { titulo: "Limpeza de caixa d'água" },
      { titulo: "Limpeza e reforma de caixa de gordura" },
      { titulo: "Lavagem de placas solares" },
      { titulo: "Hidrojateamento e lavagem de superfícies" },
    ],
  },
  {
    slug: "pintura",
    titulo: "Pintura",
    descricao:
      "Pintura residencial, predial e comercial, do preparo da superfície ao acabamento final.",
    itens: [
      { titulo: "Pintura residencial" },
      { titulo: "Pintura predial e comercial" },
      { titulo: "Pintura interna e externa" },
      { titulo: "Pintura de fachadas" },
      { titulo: "Pintura de muros e grades" },
      { titulo: "Pintura de portões e estruturas metálicas" },
    ],
  },
  {
    slug: "acabamentos-decorativos",
    titulo: "Acabamentos Decorativos",
    descricao:
      "Técnicas e acabamentos para transformar paredes e criar ambientes com mais personalidade.",
    itens: [
      { titulo: "Texturas e revestimentos decorativos" },
      { titulo: "Cimento queimado" },
      { titulo: "Efeito perolado" },
      { titulo: "Efeitos decorativos em geral" },
    ],
  },
  {
    slug: "paredes-e-superficies",
    titulo: "Paredes e Superfícies",
    descricao:
      "Preparação, recuperação e acabamento de paredes, fachadas e superfícies.",
    itens: [
      { titulo: "Aplicação e recuperação de pedras naturais" },
      { titulo: "Amaciamento e preparação de paredes" },
      { titulo: "Reparos em paredes e fachadas" },
    ],
  },
  {
    slug: "impermeabilizacao",
    titulo: "Impermeabilização",
    descricao:
      "Proteção contra infiltrações e umidade para preservar superfícies e estruturas.",
    itens: [{ titulo: "Impermeabilização" }],
  },
];
