import { SectionHeader } from '@/components/ui/SectionHeader'
import styles from './SobrePage.module.css'

const VALORES = [
  { icon: '❤️', title: 'Feito com Amor', desc: 'Cada pedido é tratado como se fosse para a família.' },
  { icon: '🌿', title: 'Ingredientes Frescos', desc: 'Compramos direto de fornecedores locais toda semana.' },
  { icon: '🤝', title: 'Comércio Local', desc: 'Valorizamos o bairro e quem faz parte da nossa história.' },
  { icon: '⚡', title: 'Agilidade', desc: 'Sem fila de app — pedido direto, entrega rápida.' },
]

export function SobrePage() {
  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        {/* Visual */}
        <div className={styles.visual} aria-hidden>
          <div className={styles.imgFrame}>
            <span className={styles.lionBig}>🦁</span>
          </div>
          <div className={styles.accentSquare} />
          <div className={styles.accentBorder} />
        </div>

        {/* Text */}
        <div className={styles.content}>
          <SectionHeader
            label="📖 Nossa História"
            title={
              <>
                A trajetória da
                <br />
                <em>Lúcia e do Leãozinho</em>
              </>
            }
          />

          <div className={styles.paragraphs}>
            <p>
              Era 2008 quando <strong>Dona Lúcia</strong> montou uma pequena
              chapa na Avenida Tomas Espindola, no bairro do Farol, com um
              sonho simples: alimentar as pessoas com carinho e sabor de
              verdade.
            </p>
            <p>
              O que começou como uma lanchonete de bairro virou um{' '}
              <strong>ponto de encontro de gerações</strong>. Hoje, filhos dos
              primeiros clientes continuam frequentando o Leãozinho, e o cheiro
              da chapa ainda atrai curiosos de longe.
            </p>
            <p>
              O nome "Leãozinho" nasceu do apelido carinhoso que a Lúcia deu ao
              filho mais novo — e foi adotado pelos clientes que ficaram.{' '}
              <strong>Mais de 15 anos depois, a família cresceu</strong>, o
              cardápio evoluiu, mas o amor pela comida continuou o mesmo.
            </p>
          </div>

          <div className={styles.valoresGrid}>
            {VALORES.map((v) => (
              <div key={v.title} className={styles.valorCard}>
                <span className={styles.valorIcon}>{v.icon}</span>
                <h4 className={styles.valorTitle}>{v.title}</h4>
                <p className={styles.valorDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
