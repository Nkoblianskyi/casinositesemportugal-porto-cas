export function AboutUsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#0a1628] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column - Big statement */}
          <div className="md:col-span-5">
            <span className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4 block">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-6">
              A Referência em
              <span className="block text-amber-500">Análise de Casinos</span>
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-6" />
            <p className="text-white/70 text-lg leading-relaxed">
              O <span className="text-white font-medium">casinositesemportugal.com</span> estabelece o padrão de
              excelência na avaliação independente de casinos online em Portugal.
            </p>
          </div>

          {/* Right column - Features */}
          <div className="md:col-span-7">
            <div className="grid gap-6">
              {/* Feature 1 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-serif text-amber-500/30">01</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Equipa de Especialistas</h3>
                    <p className="text-white/60 leading-relaxed">
                      Profissionais com mais de uma década de experiência na indústria de jogos online, dedicados a
                      análises detalhadas e imparciais.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-serif text-amber-500/30">02</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Independência Editorial</h3>
                    <p className="text-white/60 leading-relaxed">
                      Classificações baseadas exclusivamente em critérios objetivos. Nenhuma influência externa
                      compromete a integridade das nossas avaliações.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <span className="text-5xl font-serif text-amber-500/30">03</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Conformidade SRIJ</h3>
                    <p className="text-white/60 leading-relaxed">
                      Recomendamos exclusivamente operadores licenciados pelo Serviço de Regulação e Inspeção de Jogos
                      de Portugal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
