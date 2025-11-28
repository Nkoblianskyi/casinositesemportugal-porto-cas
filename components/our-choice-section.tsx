"use client"

import Image from "next/image"
import Link from "next/link"
import { getTopCasino } from "@/lib/casinos"
import { Star, Trophy, Shield, Zap, Gift, Calendar, Check } from "lucide-react"

export function OurChoiceSection() {
  const topCasino = getTopCasino()

  const getCurrentDate = () => {
    const now = new Date()
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
    return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`
  }

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-3">
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Editor's Pick</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl text-white mb-2">
            A Nossa <span className="text-amber-400">Escolha</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Atualizado: {getCurrentDate()}</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl border border-amber-400/30 overflow-hidden">
            {/* Gold ribbon */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-slate-900 font-bold text-xs px-6 py-1.5 rounded-bl-lg">
              #1 PORTUGAL
            </div>

            <div className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                {/* Logo section */}
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 bg-black rounded-xl p-3 flex items-center justify-center shadow-xl border border-amber-400/50">
                    <Image
                      src={topCasino.logo || "/placeholder.svg"}
                      alt={topCasino.name}
                      width={100}
                      height={50}
                      className="object-contain"
                    />
                    {/* Rating badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-bold px-3 py-0.5 rounded-full text-sm flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      {topCasino.rating}
                    </div>
                  </div>
                </div>

                {/* Info section */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{topCasino.name}</h3>

                  <p className="text-amber-400 text-2xl md:text-3xl font-bold mb-3">{topCasino.bonus}</p>

                  {/* Features as checkmarks */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 mb-4">
                    {topCasino.features.map((feature, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-slate-300 text-sm">
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="flex justify-center md:justify-start gap-6 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>Licenciado SRIJ</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span>Pagamentos Rápidos</span>
                    </div>
                  </div>
                </div>

                {/* CTA section */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <Link
                    href={topCasino.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-amber-400/25 hover:shadow-amber-400/40 whitespace-nowrap"
                  >
                    Obter Bónus
                  </Link>
                  <span className="text-slate-500 text-xs">{topCasino.reviews.toLocaleString()} avaliações</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
