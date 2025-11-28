import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/10">
      {/* Top decorative line */}
      <div className="luxury-divider" />

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        {/* Main footer content */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[10px] md:text-xs tracking-[0.3em] text-primary/60 uppercase block mb-3">Portugal</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4 uppercase">
            <span className="text-foreground">casino</span>
            <span className="gold-text font-medium">sites</span>
            <span className="text-foreground">emportugal</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto font-light">
            O seu guia premium para casinos online licenciados em Portugal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">
          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-xs tracking-[0.2em] text-primary mb-6 uppercase">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="/" className="hover:text-primary transition-colors text-muted-foreground font-light">
                  Página inicial
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center md:text-left">
            <h4 className="text-xs tracking-[0.2em] text-primary mb-6 uppercase">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/politica-privacidade"
                  className="hover:text-primary transition-colors text-muted-foreground font-light"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="hover:text-primary transition-colors text-muted-foreground font-light"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div className="text-center md:text-left">
            <h4 className="text-xs tracking-[0.2em] text-primary mb-6 uppercase">Jogo Responsável</h4>
            <p className="text-sm text-muted-foreground font-light mb-3">
              Jogue com responsabilidade. Apenas maiores de 18 anos.
            </p>
            <p className="text-sm text-muted-foreground/60 font-light">O jogo pode causar dependência.</p>
          </div>
        </div>

        {/* Regulatory logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-10 border-t border-primary/10">
          <Link
            href="https://www.srij.turismodeportugal.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <img src="/srij.svg" alt="SRIJ" className="h-8 w-auto object-contain invert" />
          </Link>
          <Link
            href="https://www.sicad.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <img src="/icad.png" alt="ICAD" className="h-10 w-auto object-contain invert" />
          </Link>
          <Link
            href="https://www.jogoresponsavel.pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <img src="/jogo2.png" alt="Jogo Responsável" className="h-8 w-auto object-contain invert" />
          </Link>
          <Link
            href="https://www.gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <img src="/gamecare.svg" alt="GamCare" className="h-10 w-auto object-contain invert" />
          </Link>
        </div>

        {/* Bottom section */}
        <div className="pt-10 text-center text-xs text-muted-foreground/50 space-y-4 border-t border-primary/10">
          <p className="font-light">
            Este site contém links de afiliados. Podemos receber comissões quando clica nestes links.
          </p>
          <p className="tracking-wider">© 2025 casinositesemportugal.com</p>
        </div>
      </div>
    </footer>
  )
}
