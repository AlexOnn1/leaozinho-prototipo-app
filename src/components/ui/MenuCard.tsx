import type { MenuItem } from '@/types'
import styles from './MenuCard.module.css'

interface MenuCardProps {
  item: MenuItem
  qty: number
  onAdd: (item: MenuItem) => void
  onDecrement: (id: number) => void
}

export function MenuCard({ item, qty, onAdd, onDecrement }: MenuCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imgArea}>{item.emoji}</div>
      <div className={styles.body}>
        {item.badge && <span className={styles.badge}>{item.badge}</span>}
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.desc}>{item.desc}</p>
        <div className={styles.footer}>
          <span className={styles.price}>
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
          <div className={styles.qtyControl}>
            {qty > 0 && (
              <button
                className={styles.qtyBtn}
                onClick={() => onDecrement(item.id)}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
            )}
            {qty > 0 && <span className={styles.qtyNum}>{qty}</span>}
            <button
              className={styles.addBtn}
              onClick={() => onAdd(item)}
              aria-label={`Adicionar ${item.name}`}
            >
              {qty === 0 ? '+ Adicionar' : '+'}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
