const etapas = [
  {
    numero: "01",
    titulo: "Diagnóstico no local",
    descricao:
      "Visitamos o espaço, entendemos a necessidade real e já apontamos o que precisa de atenção.",
  },
  {
    numero: "02",
    titulo: "Orçamento transparente",
    descricao:
      "Você recebe valor, prazo e material a ser usado, sem letra miúda ou surpresa depois.",
  },
  {
    numero: "03",
    titulo: "Execução no prazo",
    descricao:
      "Equipe organizada, proteção do ambiente e acompanhamento das etapas até a entrega.",
  },
  {
    numero: "04",
    titulo: "Entrega e acabamento",
    descricao:
      "Vistoria final com você, retoques se necessário e local limpo ao término do serviço.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="bg-paper px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-[1180px]">
        <div className="eyebrow mb-4">Como funciona</div>
        <h2 className="mb-14 max-w-[20ch] text-[28px] font-normal text-ink sm:text-[38px]">
          Do orçamento à entrega, sem imprevisto
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa) => (
            <div key={etapa.numero} className="relative">
              <span className="font-display text-5xl text-brand-red/25">
                {etapa.numero}
              </span>
              <h3 className="mt-4 font-display text-lg text-ink">
                {etapa.titulo}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
