"use client"

function getCurrentDate(): string {
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
  const now = new Date()
  const day = now.getDate()
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  return `${day} ${month} ${year}`
}

export function HeroSection() {
  const currentDate = getCurrentDate()

  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]">
        {/* Animated golden particles */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating gold orbs */}
          <div
            className="absolute top-[10%] left-[15%] w-2 h-2 rounded-full bg-amber-400/40 animate-pulse"
            style={{ animationDuration: "3s" }}
          />
          <div
            className="absolute top-[20%] right-[20%] w-3 h-3 rounded-full bg-amber-300/30 animate-pulse"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-[60%] left-[10%] w-1.5 h-1.5 rounded-full bg-amber-400/50 animate-pulse"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          />
          <div
            className="absolute top-[70%] right-[15%] w-2 h-2 rounded-full bg-amber-300/40 animate-pulse"
            style={{ animationDuration: "3.5s", animationDelay: "2s" }}
          />
          <div
            className="absolute top-[40%] left-[80%] w-1 h-1 rounded-full bg-amber-400/60 animate-pulse"
            style={{ animationDuration: "2s" }}
          />
          <div
            className="absolute top-[30%] left-[5%] w-1.5 h-1.5 rounded-full bg-amber-300/35 animate-pulse"
            style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-[80%] left-[40%] w-2 h-2 rounded-full bg-amber-400/30 animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.8s" }}
          />
          <div
            className="absolute top-[15%] left-[60%] w-1 h-1 rounded-full bg-amber-300/50 animate-pulse"
            style={{ animationDuration: "2.8s", animationDelay: "1.2s" }}
          />

          {/* Decorative card suits - subtle */}
          <div className="absolute top-[25%] left-[8%] text-amber-500/10 text-6xl md:text-8xl font-serif select-none">
            ♠
          </div>
          <div className="absolute top-[50%] right-[5%] text-amber-500/10 text-5xl md:text-7xl font-serif select-none">
            ♦
          </div>
          <div className="absolute bottom-[20%] left-[70%] text-amber-500/10 text-4xl md:text-6xl font-serif select-none">
            ♣
          </div>
          <div className="absolute top-[10%] right-[30%] text-amber-500/10 text-3xl md:text-5xl font-serif select-none">
            ♥
          </div>

          {/* Elegant gold lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500/10 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/8 to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/8 to-transparent" />
        </div>

        {/* Radial glow in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Top label */}
        <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
          <span className="w-8 md:w-12 h-px bg-amber-400/50" />
          <span className="text-[10px] md:text-xs tracking-[0.25em] text-amber-400/80 uppercase font-light">
            Atualizado: {currentDate}
          </span>
          <span className="w-8 md:w-12 h-px bg-amber-400/50" />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-[0.95] mb-4 md:mb-6">
          <span className="block text-white">Os Melhores</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 font-medium mt-1 md:mt-2">
            Casinos
          </span>
          <span className="block text-white/70 text-2xl md:text-4xl lg:text-5xl mt-2 md:mt-3 font-extralight">
            em Portugal
          </span>
        </h1>

        <p className="text-sm md:text-base text-white/60 font-light max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
          Descobra os casinos online mais exclusivos, todos licenciados pelo SRIJ.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-serif text-amber-400 mb-0.5">100%</span>
            <span className="text-[10px] md:text-xs tracking-[0.15em] text-white/50 uppercase">Legais</span>
          </div>
          <div className="w-px h-12 bg-amber-400/20 hidden md:block" />
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-serif text-amber-400 mb-0.5">5+</span>
            <span className="text-[10px] md:text-xs tracking-[0.15em] text-white/50 uppercase">Analisados</span>
          </div>
          <div className="w-px h-12 bg-amber-400/20 hidden md:block" />
          <div className="text-center">
            <span className="block text-2xl md:text-3xl font-serif text-amber-400 mb-0.5">24/7</span>
            <span className="text-[10px] md:text-xs tracking-[0.15em] text-white/50 uppercase">Suporte</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
