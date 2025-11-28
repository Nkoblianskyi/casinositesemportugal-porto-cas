"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Os casinos online são legais em Portugal?",
    answer:
      "Sim, completamente legais desde 2015. O mercado português de jogos online é regulamentado pelo SRIJ (Serviço de Regulação e Inspeção de Jogos), entidade dependente do Turismo de Portugal. Todos os operadores devem possuir licença válida para operar legalmente no território nacional.",
  },
  {
    question: "Como verificar se um casino tem licença portuguesa?",
    answer:
      "Consulte a lista oficial de operadores licenciados no site do SRIJ (www.srij.turismodeportugal.pt). Todos os casinos legais exibem o número de licença no rodapé do site. Os casinos recomendados neste ranking possuem licença SRIJ válida e verificada.",
  },
  {
    question: "Que métodos de pagamento estão disponíveis?",
    answer:
      "Os casinos portugueses suportam MB Way, Multibanco, transferências bancárias, cartões de crédito/débito (Visa, Mastercard), Neteller, Skrill e outras carteiras digitais. Todas as transações são processadas em euros. Os depósitos são geralmente instantâneos.",
  },
  {
    question: "Quanto tempo demoram os levantamentos de fundos?",
    answer:
      "Os prazos variam por método: carteiras digitais (0-24 horas), cartões de crédito/débito (1-3 dias úteis), transferências bancárias (1-5 dias úteis). Os casinos licenciados devem processar pedidos de levantamento dentro de prazos razoáveis estabelecidos pelo SRIJ.",
  },
  {
    question: "É possível jogar através de dispositivos móveis?",
    answer:
      "Sim, todos os casinos modernos oferecem versões móveis otimizadas ou aplicações dedicadas para iOS e Android. Pode aceder à totalidade dos jogos e funcionalidades através de qualquer smartphone ou tablet com ligação à internet.",
  },
  {
    question: "Como funcionam os bónus de boas-vindas?",
    answer:
      "Os bónus de boas-vindas são ofertas promocionais para novos jogadores, geralmente consistindo num matching percentual do primeiro depósito. Todos os bónus têm requisitos de apostas (rollover) que devem ser cumpridos antes de poder levantar os ganhos. Leia sempre os termos e condições.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 bg-[#faf9f6]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="text-amber-600 text-sm tracking-[0.3em] uppercase">FAQ</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#0a1628] mb-4">Perguntas Frequentes</h2>
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto">
            Respostas às questões mais comuns sobre casinos online em Portugal
          </p>
        </div>

        <div className="border-t border-[#0a1628]/10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#0a1628]/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="flex items-center gap-6">
                  <span className="text-amber-500/50 font-serif text-lg">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[#0a1628] font-medium group-hover:text-amber-600 transition-colors">
                    {faq.question}
                  </span>
                </span>
                <span
                  className={`text-2xl text-amber-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-[#0a1628]/60 leading-relaxed pl-12 pr-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
