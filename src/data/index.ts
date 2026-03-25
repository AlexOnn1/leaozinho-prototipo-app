import type { MenuItem, GaleriaItem, NavItem } from '@/types'

// ─── Menu ─────────────────────────────────────────────────────────────────────

export const MENU_ITEMS: MenuItem[] = [
  // Hambúrgueres
  {
    id: 1,
    name: 'X-Leão',
    emoji: '🍔',
    price: 22.90,
    category: 'hamburgueres',
    desc: 'Pão artesanal, 150g de carne, queijo prato, alface, tomate e molho especial da casa.',
    badge: '⭐ Mais Pedido',
    featured: true,
  },
  {
    id: 2,
    name: 'X-Bacon Duplo',
    emoji: '🥓',
    price: 27.90,
    category: 'hamburgueres',
    desc: 'Duplo de carne 200g, bacon crocante, queijo cheddar, cebola caramelizada.',
  },
  {
    id: 3,
    name: 'X-Frango Crispy',
    emoji: '🍗',
    price: 21.90,
    category: 'hamburgueres',
    desc: 'Filé de frango empanado crocante, maionese de alho, repolho e tomate.',
  },
  {
    id: 4,
    name: 'X-Tudo',
    emoji: '🌟',
    price: 32.90,
    category: 'hamburgueres',
    desc: 'O completo: 200g de carne, ovo, bacon, presunto, queijo, salada completa.',
  },
  {
    id: 5,
    name: 'X-Salada',
    emoji: '🥗',
    price: 18.90,
    category: 'hamburgueres',
    desc: 'Carne 150g, salada completa, sem maionese — a opção mais leve.',
  },
  {
    id: 6,
    name: 'Smash Leãozinho',
    emoji: '🔥',
    price: 29.90,
    category: 'hamburgueres',
    desc: 'Smash burger duplo, queijo americano, picles, mostarda e ketchup artesanal.',
    badge: '🆕 Novidade',
    featured: true,
  },

  // Porções
  {
    id: 7,
    name: 'Porção de Fritas',
    emoji: '🍟',
    price: 16.90,
    category: 'porcoes',
    desc: 'Batata frita crocante temperada, serve 2 pessoas. Acompanha molho da casa.',
  },
  {
    id: 8,
    name: 'Isca de Frango',
    emoji: '🍗',
    price: 24.90,
    category: 'porcoes',
    desc: 'Tiras de frango empanado, fritinhas na hora, com molho barbecue.',
  },
  {
    id: 9,
    name: 'Onion Rings',
    emoji: '🧅',
    price: 18.90,
    category: 'porcoes',
    desc: 'Anéis de cebola empanados e crocantes. Serve bem 2 pessoas.',
  },
  {
    id: 10,
    name: 'Mix de Petiscos',
    emoji: '🎉',
    price: 34.90,
    category: 'porcoes',
    desc: 'Fritas + iscas de frango + onion rings. A porção completa da galera.',
    badge: '👥 Para Compartilhar',
    featured: true,
  },

  // Bebidas
  {
    id: 11,
    name: 'Refrigerante Lata',
    emoji: '🥤',
    price: 6.90,
    category: 'bebidas',
    desc: 'Coca-Cola, Guaraná Antarctica, Fanta laranja ou Sprite gelada. 350ml.',
  },
  {
    id: 12,
    name: 'Suco Natural',
    emoji: '🍊',
    price: 10.90,
    category: 'bebidas',
    desc: 'Feito na hora! Laranja, limão, maracujá, abacaxi ou melancia.',
  },
  {
    id: 13,
    name: 'Milkshake',
    emoji: '🥛',
    price: 15.90,
    category: 'bebidas',
    desc: 'Shake cremoso nos sabores chocolate, morango ou baunilha. 400ml.',
  },
  {
    id: 14,
    name: 'Água Mineral',
    emoji: '💧',
    price: 4.00,
    category: 'bebidas',
    desc: 'Água gelada 500ml com ou sem gás.',
  },
]

export const FEATURED_ITEMS = MENU_ITEMS.filter((i) => i.featured)

export const MENU_BY_CATEGORY = {
  hamburgueres: MENU_ITEMS.filter((i) => i.category === 'hamburgueres'),
  porcoes: MENU_ITEMS.filter((i) => i.category === 'porcoes'),
  bebidas: MENU_ITEMS.filter((i) => i.category === 'bebidas'),
}

// ─── Galeria ─────────────────────────────────────────────────────────────────

export const GALERIA_ITEMS: GaleriaItem[] = [
  {
    id: 1,
    emoji: '🍔',
    label: 'X-Leão da Casa',
    bg: 'linear-gradient(135deg,#2A1500,#1A0E00)',
    large: true,
  },
  { id: 2, emoji: '🔥', label: 'Chapa no Ponto', bg: 'linear-gradient(135deg,#1A0000,#2A0800)' },
  { id: 3, emoji: '🍟', label: 'Fritas Crocantes', bg: 'linear-gradient(135deg,#1A1400,#2A1A00)' },
  { id: 4, emoji: '🥛', label: 'Milkshakes', bg: 'linear-gradient(135deg,#0A001A,#150030)' },
  { id: 5, emoji: '🏪', label: 'Nossa Lanchonete', bg: 'linear-gradient(135deg,#001A0A,#002A12)' },
]

// ─── Nav ──────────────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'Início' },
  { key: 'sobre', label: 'Nossa História' },
  { key: 'galeria', label: 'Galeria' },
  { key: 'cardapio', label: 'Cardápio' },
  { key: 'localizacao', label: 'Localização' },
]

// ─── Business info ────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'O Leãozinho',
  whatsapp: '5582996095472',
  instagram: '@leaozinhohamburgueria',
  address: 'Av. Tomas Espindola, Farol, Maceió — AL',
  hours: [
    { days: 'Seg — Sex', time: '11h às 23h' },
    { days: 'Sábado', time: '11h às 00h' },
    { days: 'Domingo', time: '12h às 22h' },
  ],
} as const
