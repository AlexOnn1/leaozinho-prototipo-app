import { useState } from 'react'
import type { PageKey } from '@/types'
import { NAV_ITEMS } from '@/data'
import { useCart } from '@/context/CartContext'
import styles from './Navbar.module.css'

interface NavbarProps {
  currentPage: PageKey
  onNavigate: (page: PageKey) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { totalItems, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNav = (page: PageKey) => {
    onNavigate(page)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <button className={styles.logo} onClick={() => handleNav('home')}>
        <span className={styles.logoIcon}>🦁</span>
        <span className={styles.logoText}>O Leãozinho</span>
      </button>

      {/* Desktop nav */}
      <div className={styles.desktopNav}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            className={`${styles.navBtn} ${currentPage === item.key ? styles.active : ''}`}
            onClick={() => handleNav(item.key)}
          >
            {item.label}
          </button>
        ))}
        <button className={styles.ctaBtn} onClick={() => handleNav('cardapio')}>
          Fazer Pedido
        </button>
      </div>

      {/* Cart + Hamburger */}
      <div className={styles.rightGroup}>
        <button className={styles.cartBtn} onClick={openCart}>
          🛒 Carrinho
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </button>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`${styles.mobileNavBtn} ${currentPage === item.key ? styles.active : ''}`}
              onClick={() => handleNav(item.key)}
            >
              {item.label}
            </button>
          ))}
          <button
            className={styles.mobileCta}
            onClick={() => handleNav('cardapio')}
          >
            🛒 Fazer Pedido
          </button>
        </div>
      )}
    </nav>
  )
}
