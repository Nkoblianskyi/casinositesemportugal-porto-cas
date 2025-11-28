export function TopSitesPortugalSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628] text-white relative">
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-amber-500/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-amber-500/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-amber-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-amber-500/30" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
          <div>
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4 block">Portugal</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              Mercado Regulamentado
              <span className="block text-amber-500">Desde 2015</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/70 text-lg leading-relaxed">
              Portugal estabeleceu um dos mercados de jogos online mais respeitados da Europa. Sob supervisão do SRIJ,
              garante padrões elevados de segurança e proteção ao consumidor.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          <div className="bg-[#0a1628] p-8">
            <span className="text-6xl md:text-7xl font-serif text-amber-500/20 block mb-4">I</span>
            <h3 className="text-lg font-semibold mb-2 text-white">Regulamentação SRIJ</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Modelo regulatório reconhecido internacionalmente pela sua eficácia e rigor.
            </p>
          </div>

          <div className="bg-[#0a1628] p-8">
            <span className="text-6xl md:text-7xl font-serif text-amber-500/20 block mb-4">II</span>
            <h3 className="text-lg font-semibold mb-2 text-white">Licenças Obrigatórias</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Operadores verificados através de processo rigoroso de idoneidade.
            </p>
          </div>

          <div className="bg-[#0a1628] p-8">
            <span className="text-6xl md:text-7xl font-serif text-amber-500/20 block mb-4">III</span>
            <h3 className="text-lg font-semibold mb-2 text-white">Ofertas Competitivas</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Bónus atrativos, promoções regulares e programas de fidelização.
            </p>
          </div>

          <div className="bg-[#0a1628] p-8">
            <span className="text-6xl md:text-7xl font-serif text-amber-500/20 block mb-4">IV</span>
            <h3 className="text-lg font-semibold mb-2 text-white">Pagamentos Locais</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              MB Way, Multibanco, transferências e cartões. Tudo em euros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
