import type { PageKey } from '@/types'
import { NAV_ITEMS, BUSINESS } from '@/data'
import styles from './Footer.module.css'

interface FooterProps {
  onNavigate: (page: PageKey) => void
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h3 className={styles.brandName}>🦁 O Leãozinho</h3>
          <p className={styles.brandDesc}>
            Lanchonete tradicional de Maceió desde 2008. Feito com amor,
            servido com sorriso.
          </p>
          <p className={styles.brandAddress}>{BUSINESS.address}</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.colList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <button onClick={() => onNavigate(item.key)}>{item.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Horários</h4>
          <ul className={styles.colList}>
            {BUSINESS.hours.map((h) => (
              <li key={h.days}>
                {h.days}: <strong>{h.time}</strong>
              </li>
            ))}
          </ul>
          <h4 className={styles.colTitle} style={{ marginTop: '1.2rem' }}>
            Contato
          </h4>
          <ul className={styles.colList}>
            <li>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                📲 WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/leaozinhohamburgueria"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸 Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} O Leãozinho. Todos os direitos reservados.</p>
        <p>
          Desenvolvido com <span className={styles.heart}>♥</span> — Plataforma
          própria, sem taxas de aplicativos
        </p>
      </div>
    </footer>
  )
}
