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
    <section className="bg-paper px-4 py-20 sm:px-10 sm:py-24 dark:bg-paper">
      <div className="mx-auto max-w-295">
        <div className="eyebrow mb-4">Como funciona</div>
        <h2 className="mb-10 max-w-[20ch] text-[28px] font-normal text-ink sm:mb-14 sm:text-[38px] dark:text-ink">
          Do orçamento à entrega, sem imprevisto
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="relative rounded-2xl border border-line/60 bg-paper p-5 sm:p-0 sm:border-0 sm:bg-transparent"
            >
              <span className="font-display text-5xl text-brand-red/25 dark:text-brand-red/60">
                {etapa.numero}
              </span>
              <h3 className="mt-4 font-display text-lg text-ink dark:text-ink">
                {etapa.titulo}
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft dark:text-ink/60">
                {etapa.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
