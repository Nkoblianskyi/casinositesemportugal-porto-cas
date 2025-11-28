"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Gift } from "lucide-react"
import { getTopCasino } from "@/lib/casinos"

export function TopCasinoPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank")
  }

  const starRating = topCasino.rating / 2

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const fillPercentage = Math.min(Math.max((starRating - index) * 100, 0), 100)
      return (
        <div key={index} className="relative inline-block">
          <Star className="h-5 w-5 text-amber-200" />
          <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-card border border-border max-w-md p-0 overflow-hidden rounded-xl shadow-2xl">
        <div className="bg-secondary px-6 py-5 text-center">
          <h3 className="text-3xl font-semibold font-serif text-secondary-foreground">Oferta Especial</h3>
        </div>

        <div className="p-6 cursor-pointer hover:bg-muted/30 transition-colors" onClick={handleModalClick}>
          <div className="flex justify-center mb-4">
            <div className="w-48 h-24 bg-muted rounded-lg p-2 flex items-center justify-center">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={`${topCasino.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-1 mb-4">
            {renderStars()}
            <span className="text-lg font-bold text-white ml-2">{topCasino.rating}/10</span>
          </div>

          <div className="bg-muted/50 rounded-xl p-4 mb-4 text-center">
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Bónus de Boas-Vindas</p>
            <p className="text-3xl font-semibold text-foreground">{topCasino.bonus}</p>
          </div>

          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg">
            Obter Bónus
          </Button>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Oferta limitada. Termos e condições aplicam-se. 18+
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
