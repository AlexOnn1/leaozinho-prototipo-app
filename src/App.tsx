import { useState, useEffect } from 'react'
import type { PageKey } from '@/types'
import { CartProvider } from '@/context/CartContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { HomePage } from '@/components/pages/HomePage'
import { SobrePage } from '@/components/pages/SobrePage'
import { GaleriaPage } from '@/components/pages/GaleriaPage'
import { CardapioPage } from '@/components/pages/CardapioPage'
import { LocalizacaoPage } from '@/components/pages/LocalizacaoPage'

function AppInner() {
  const [page, setPage] = useState<PageKey>('home')

  const navigate = (next: PageKey) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Update document title per page
  useEffect(() => {
    const titles: Record<PageKey, string> = {
      home: 'O Leãozinho — Lanchonete',
      sobre: 'Nossa História — O Leãozinho',
      galeria: 'Galeria — O Leãozinho',
      cardapio: 'Cardápio — O Leãozinho',
      localizacao: 'Localização — O Leãozinho',
    }
    document.title = titles[page]
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'home':      return <HomePage onNavigate={navigate} />
      case 'sobre':     return <SobrePage />
      case 'galeria':   return <GaleriaPage />
      case 'cardapio':  return <CardapioPage />
      case 'localizacao': return <LocalizacaoPage />
    }
  }

  return (
    <>
      <Navbar currentPage={page} onNavigate={navigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={navigate} />
      <CartDrawer />
    </>
  )
}

export function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  )
}
