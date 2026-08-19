export type Depoimento = {
  nome: string;
  contexto: string;
  texto: string;
};

// TODO: substitua por depoimentos reais de clientes da VS Pinturas.
export const depoimentos: Depoimento[] = [
  {
    nome: "Cliente 1",
    contexto: "Pintura residencial",
    texto:
      "Serviço no prazo combinado e acabamento impecável. Deixaram tudo limpo ao final, sem sujeira pra eu resolver depois.",
  },
  {
    nome: "Cliente 2",
    contexto: "Reforma comercial",
    texto:
      "Contratei pra reformar a loja sem parar o funcionamento. Organização e comunicação clara em cada etapa.",
  },
  {
    nome: "Cliente 3",
    contexto: "Manutenção preventiva",
    texto:
      "Chamei pra um retoque simples e virei cliente fixo. Preço justo e trabalho bem feito, sem enrolação.",
  },
];
