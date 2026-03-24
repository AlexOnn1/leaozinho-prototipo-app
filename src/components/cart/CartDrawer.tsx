import { useCart } from '@/context/CartContext'
import styles from './CartDrawer.module.css'

export function CartDrawer() {
  const {
    items,
    totalPrice,
    isOpen,
    closeCart,
    removeItem,
    incrementItem,
    decrementItem,
    checkoutWhatsApp,
  } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>🛒 Seu Pedido</h2>
          <button className={styles.closeBtn} onClick={closeCart} aria-label="Fechar carrinho">
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🛒</span>
              <p>Seu carrinho está vazio</p>
              <small>Adicione itens do cardápio para fazer seu pedido</small>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <span className={styles.itemEmoji}>{item.emoji}</span>
                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <div className={styles.itemQty}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => decrementItem(item.id)}
                    aria-label="Diminuir"
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => incrementItem(item.id)}
                    aria-label="Aumentar"
                  >
                    +
                  </button>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remover ${item.name}`}
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span className={styles.totalLabel}>Total do pedido</span>
              <span className={styles.totalValue}>
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button className={styles.wppBtn} onClick={checkoutWhatsApp}>
              <span>📲</span>
              Finalizar pelo WhatsApp
            </button>
            <p className={styles.wppHint}>
              Você será redirecionado para o WhatsApp da lanchonete
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
