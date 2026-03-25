import { GALERIA_ITEMS } from '@/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import styles from './GaleriaPage.module.css'

export function GaleriaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <SectionHeader
          label="📸 Galeria"
          title={<>Coma com <em>os olhos</em></>}
          subtitle="Cada foto é uma promessa do que vai chegar na sua mesa. Veja nossos pratos, porções e o ambiente aconchegante do Leãozinho."
        />

        <div className={styles.grid}>
          {GALERIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`${styles.item} ${item.large ? styles.large : ''}`}
            >
              <div
                className={styles.inner2}
                style={{ background: item.bg }}
              >
                <span className={styles.emoji}>{item.emoji}</span>
              </div>
              <div className={styles.overlay}>
                <span className={styles.overlayLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.igHint}>
          📸 Veja mais fotos no nosso Instagram{' '}
          <a
            href="https://instagram.com/leaozinhohamburgueria"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            @leaozinhohamburgueria
          </a>
        </p>
      </div>
    </div>
  )
}
