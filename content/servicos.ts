export type Servico = {
  slug: string;
  titulo: string;
  descricao: string;
};

// TODO: ajuste os textos com o mix real de serviços da VS Pinturas.
export const servicos: Servico[] = [
  {
    slug: "pintura-residencial",
    titulo: "Pintura Residencial",
    descricao:
      "Interna, externa e detalhes de acabamento. Preparo correto de superfície pra tinta durar e não descascar.",
  },
  {
    slug: "pintura-comercial",
    titulo: "Pintura Comercial",
    descricao:
      "Lojas, fachadas e ambientes corporativos, com planejamento pra não parar sua operação.",
  },
  {
    slug: "reformas",
    titulo: "Reformas",
    descricao:
      "Da alvenaria ao acabamento final. Cuidamos do projeto do início ao fim, sem dor de cabeça pra você.",
  },
  {
    slug: "manutencoes",
    titulo: "Manutenções",
    descricao:
      "Reparos pontuais, retoques e manutenção preventiva pra manter o imóvel sempre em dia.",
  },
  {
    slug: "textura-e-grafiato",
    titulo: "Textura e Grafiato",
    descricao:
      "Acabamentos texturizados que dão personalidade e resistência extra às paredes.",
  },
  {
    slug: "impermeabilizacao",
    titulo: "Impermeabilização",
    descricao:
      "Proteção contra infiltração em lajes, muros e áreas externas antes que o problema apareça.",
  },
];
