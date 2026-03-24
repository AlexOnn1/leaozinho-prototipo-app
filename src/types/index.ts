// ─── Menu & Cart ─────────────────────────────────────────────────────────────

export type MenuCategory = 'hamburgueres' | 'porcoes' | 'bebidas'

export interface MenuItem {
  id: number
  name: string
  emoji: string
  price: number
  desc: string
  category: MenuCategory
  badge?: string
  featured?: boolean
}

export interface CartItem extends MenuItem {
  qty: number
}

// ─── Pages ───────────────────────────────────────────────────────────────────

export type PageKey =
  | 'home'
  | 'sobre'
  | 'galeria'
  | 'cardapio'
  | 'localizacao'

// ─── Galeria ─────────────────────────────────────────────────────────────────

export interface GaleriaItem {
  id: number
  emoji: string
  label: string
  bg: string
  large?: boolean
}

// ─── Misc ─────────────────────────────────────────────────────────────────────

export interface NavItem {
  key: PageKey
  label: string
}

export interface ValorItem {
  icon: string
  title: string
  desc: string
}

export interface InfoCardData {
  icon: string
  title: string
  content: React.ReactNode
}
