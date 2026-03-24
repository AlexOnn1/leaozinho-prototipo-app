import { useState } from 'react'
import type { PageKey, MenuItem } from '@/types'
import { FEATURED_ITEMS } from '@/data'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/useToast'
import { Toast } from '@/components/ui/Toast'
import styles from './HomePage.module.css'

interface HomePageProps {
  onNavigate: (page: PageKey) => void
}

export function HomePage({ onNavigate }: HomePageProps) {
  const { addItem, openCart } = useCart()
  const { toast, showToast } = useToast()
  const [addedIds, setAddedIds] = useState<Set<number>>(new Set())

  const handleAdd = (item: MenuItem) => {
    addItem(item)
    setAddedIds((prev) => new Set([...prev, item.id]))
    showToast(`${item.name} adicionado!`)
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev)
        next.delete(item.id)
        return next
      })
    }, 1200)
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBgText} aria-hidden>LEÃO</div>

        <div className={styles.heroGrid}>
          {/* Left: copy */}
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>
              🦁 Desde 2008 no Farol · Maceió
            </div>

            <h1 className={styles.heroTitle}>
              O sabor que a<br />
              <em>cidade inteira</em>
              <br />
              conhece e ama
            </h1>

            <p className={styles.heroSubtitle}>
              Hambúrgueres artesanais, porções generosas e bebidas geladas
              feitas com carinho. Sem taxas, direto no WhatsApp.
            </p>

            <div className={styles.heroActions}>
              <button
                className={styles.btnPrimary}
                onClick={() => onNavigate('cardapio')}
              >
                🛒 Faça seu Pedido
              </button>
              <button
                className={styles.btnSecondary}
                onClick={() => onNavigate('sobre')}
              >
                Nossa História
              </button>
            </div>

            <div className={styles.heroStats}>
              {[
                { num: '15+', label: 'anos de tradição' },
                { num: '50+', label: 'opções no cardápio' },
                { num: '⭐ 4.9', label: 'avaliação dos clientes' },
              ].map((s) => (
                <div key={s.label} className={styles.stat}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: decorative card */}
          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.cardStack}>
              <div className={styles.cardBack} />
              <div className={styles.cardMain}>
                <span className={styles.bigLion}>🦁</span>
                <p className={styles.cardLabel}>O Leãozinho</p>
                <p className={styles.cardSub}>Lanchonete · Maceió</p>
              </div>
              <span className={`${styles.floatingBadge} ${styles.badge1}`}>
                🔥 Novidade no Cardápio
              </span>
              <span className={`${styles.floatingBadge} ${styles.badge2}`}>
                ⭐ Mais Pedido
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint} aria-hidden>
          <div className={styles.scrollLine} />
          <span>Role para ver</span>
        </div>
      </section>

      {/* ── DESTAQUES ── */}
      <section className={styles.destaques}>
        <div className={styles.destaquesInner}>
          <span className={styles.sectionLabel}>⭐ Nossos Destaques</span>
          <h2 className={styles.sectionTitle}>
            Os <em>favoritos</em>
            <br />
            da galera
          </h2>
          <div className={styles.sectionSep} />

          <div className={styles.destaquesGrid}>
            {FEATURED_ITEMS.map((item) => (
              <div key={item.id} className={styles.destaqueCard}>
                <div className={styles.destaqueImg}>
                  <span>{item.emoji}</span>
                  {item.badge && (
                    <span className={styles.destaqueBadge}>{item.badge}</span>
                  )}
                </div>
                <div className={styles.destaqueBody}>
                  <h3 className={styles.destaqueName}>{item.name}</h3>
                  <p className={styles.destaqueDesc}>{item.desc}</p>
                  <div className={styles.destaqueFooter}>
                    <span className={styles.destaquePrice}>
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                    <button
                      className={`${styles.addBtn} ${addedIds.has(item.id) ? styles.added : ''}`}
                      onClick={() => handleAdd(item)}
                    >
                      {addedIds.has(item.id) ? '✓ Adicionado' : '+ Adicionar'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Promo banner */}
          <div className={styles.promoBanner}>
            <div className={styles.promoContent}>
              <h3>🍔 Combo Leãozinho por R$ 39,90</h3>
              <p>X-Leão + Fritas Médias + Refrigerante — só hoje!</p>
            </div>
            <button
              className={styles.btnPrimary}
              onClick={() => onNavigate('cardapio')}
            >
              Aproveitar Agora
            </button>
          </div>
        </div>
      </section>

      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}
