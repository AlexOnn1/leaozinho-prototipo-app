import { useState } from 'react'
import type { MenuCategory } from '@/types'
import { MENU_BY_CATEGORY } from '@/data'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/useToast'
import { MenuCard } from '@/components/ui/MenuCard'
import { Toast } from '@/components/ui/Toast'
import { SectionHeader } from '@/components/ui/SectionHeader'
import styles from './CardapioPage.module.css'

const TABS: { key: MenuCategory; label: string }[] = [
  { key: 'hamburgueres', label: '🍔 Hambúrgueres' },
  { key: 'porcoes', label: '🍟 Porções' },
  { key: 'bebidas', label: '🥤 Bebidas' },
]

export function CardapioPage() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('hamburgueres')
  const { addItem, decrementItem, items } = useCart()
  const { toast, showToast } = useToast()

  const getQty = (id: number) =>
    items.find((i) => i.id === id)?.qty ?? 0

  const handleAdd = (item: Parameters<typeof addItem>[0]) => {
    addItem(item)
    showToast(`${item.name} adicionado!`)
  }

  const currentItems = MENU_BY_CATEGORY[activeTab]

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <SectionHeader
          label="🍽️ Cardápio"
          title={<>Escolha o que <em>vai querer hoje</em></>}
          subtitle="Adicione os itens ao carrinho e finalize direto pelo WhatsApp — sem taxas, sem complicação."
        />

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`${styles.tabBtn} ${activeTab === tab.key ? styles.active : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {currentItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              qty={getQty(item.id)}
              onAdd={handleAdd}
              onDecrement={decrementItem}
            />
          ))}
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
