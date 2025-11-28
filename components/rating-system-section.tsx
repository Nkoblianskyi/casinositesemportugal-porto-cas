export function RatingSystemSection() {
  const steps = [
    {
      number: "01",
      title: "Verificação Legal",
      description:
        "Confirmamos que cada casino possui licença válida emitida pelo SRIJ, garantindo operação legal em Portugal.",
    },
    {
      number: "02",
      title: "Análise de Segurança",
      description:
        "Testamos protocolos de encriptação SSL, proteção de dados pessoais e sistemas de pagamento seguros.",
    },
    {
      number: "03",
      title: "Avaliação de Bónus",
      description: "Examinamos ofertas de boas-vindas, condições de rollover, freespins e promoções recorrentes.",
    },
    {
      number: "04",
      title: "Teste de Usabilidade",
      description: "Avaliamos navegação, velocidade, compatibilidade mobile e qualidade do suporte ao cliente.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">Metodologia</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0a1628] mb-4">Como Avaliamos</h2>
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto">
            Processo transparente em quatro etapas para garantir recomendações fiáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-[#0a1628]/10 p-6 md:p-8 relative group hover:shadow-lg transition-shadow"
            >
              {/* Step number */}
              <span className="text-6xl md:text-7xl font-serif text-amber-500/20 absolute top-4 right-4">
                {step.number}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl md:text-2xl font-serif text-[#0a1628] mb-3">{step.title}</h3>
                <p className="text-[#0a1628]/60 leading-relaxed">{step.description}</p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <div className="inline-block border border-amber-500/30 bg-white px-8 py-4">
            <p className="text-[#0a1628]/70">
              A pontuação final <span className="text-amber-600 font-semibold">(0-10)</span> reflete o desempenho global
              em todas as etapas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
