import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
  type ReactNode,
} from 'react'
import type { CartItem, MenuItem } from '@/types'
import { BUSINESS } from '@/data'

// ─── State ────────────────────────────────────────────────────────────────────

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD'; payload: MenuItem }
  | { type: 'REMOVE'; payload: number }
  | { type: 'INCREMENT'; payload: number }
  | { type: 'DECREMENT'; payload: number }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i,
          ),
        }
      }
      return { items: [...state.items, { ...action.payload, qty: 1 }] }
    }
    case 'REMOVE':
      return { items: state.items.filter((i) => i.id !== action.payload) }
    case 'INCREMENT':
      return {
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i,
        ),
      }
    case 'DECREMENT':
      return {
        items: state.items
          .map((i) => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
          .filter((i) => i.qty > 0),
      }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface CartContextValue {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: MenuItem) => void
  removeItem: (id: number) => void
  incrementItem: (id: number) => void
  decrementItem: (id: number) => void
  clearCart: () => void
  checkoutWhatsApp: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

// ─── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [isOpen, setIsOpen] = useState(false)

  const totalItems = state.items.reduce((s, i) => s + i.qty, 0)
  const totalPrice = state.items.reduce((s, i) => s + i.price * i.qty, 0)

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((item: MenuItem) => {
    dispatch({ type: 'ADD', payload: item })
  }, [])

  const removeItem = useCallback((id: number) => {
    dispatch({ type: 'REMOVE', payload: id })
  }, [])

  const incrementItem = useCallback((id: number) => {
    dispatch({ type: 'INCREMENT', payload: id })
  }, [])

  const decrementItem = useCallback((id: number) => {
    dispatch({ type: 'DECREMENT', payload: id })
  }, [])

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR' }), [])

  const checkoutWhatsApp = useCallback(() => {
    if (state.items.length === 0) return
    const lines = state.items
      .map(
        (i) =>
          `• ${i.qty}x ${i.name} — R$ ${(i.price * i.qty)
            .toFixed(2)
            .replace('.', ',')}`,
      )
      .join('%0A')
    const total = `*Total: R$ ${totalPrice.toFixed(2).replace('.', ',')}*`
    const msg = `Olá! Gostaria de fazer um pedido 🦁%0A%0A${lines}%0A%0A${total}%0A%0AObrigado!`
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank')
  }, [state.items, totalPrice])

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems,
        totalPrice,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
        clearCart,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
