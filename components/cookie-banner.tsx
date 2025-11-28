"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-4 md:p-5 z-50 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          <p>
            Utilizamos cookies para melhorar a sua experiência. Ao continuar a navegar, aceita a nossa{" "}
            <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
              política de cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          >
            Aceitar
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
