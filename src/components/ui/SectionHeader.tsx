import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={styles.wrapper} data-align={align}>
      <span className={styles.label}>{label}</span>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.sep} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
