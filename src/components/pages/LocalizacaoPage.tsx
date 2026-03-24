import { BUSINESS } from '@/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import styles from './LocalizacaoPage.module.css'

export function LocalizacaoPage() {
  const mapsUrl = `https://maps.app.goo.gl/18P1V4K5mkDxHWQq9`

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <SectionHeader
          label="📍 Onde Estamos"
          title={<>Venha nos <em>visitar</em></>}
        />

        <div className={styles.grid}>
          {/* Info cards */}
          <div className={styles.infoCol}>
            {/* Address */}
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <p className={styles.infoTitle}>Endereço</p>
                <p className={styles.infoText}>{BUSINESS.address}</p>
              </div>
            </div>

            {/* Hours */}
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>🕐</span>
              <div className={styles.infoFull}>
                <p className={styles.infoTitle}>Horários de Funcionamento</p>
                <div className={styles.hoursTable}>
                  {BUSINESS.hours.map((h) => (
                    <div key={h.days} className={styles.hoursRow}>
                      <span>{h.days}</span>
                      <strong>{h.time}</strong>
                    </div>
                  ))}
                </div> 
                <div className={styles.openBadge}>
                  <span className={styles.openDot} />
                  Aberto Agora
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📲</span>
              <div>
                <p className={styles.infoTitle}>Contato</p>
                <p className={styles.infoText}>
                  WhatsApp:{' '}
                  <a
                    href={`https://wa.me/${BUSINESS.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    (85) 9 9999-9999
                  </a>
                </p>
                <p className={styles.infoText}>
                  Instagram:{' '}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {BUSINESS.instagram}
                  </a>
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className={styles.socialLinks}>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                📲 WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                📸 Instagram
              </a>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapCol}>
            <div className={styles.mapFrame}>
              <div className={styles.mapBody}>
                <div className={styles.mapGridLines} aria-hidden />
                <span className={styles.mapPin}>📍</span>
                <div className={styles.mapAddress}>
                  <strong>O Leãozinho — Lanchonete</strong>
                  Av. Tomas Espindola, Farol
                  <br />
                  Maceió - AL
                </div>
              </div>
              <div className={styles.mapFooter}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapCta}
                >
                  🗺️ Abrir no Google Maps — Traçar Rota
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
