import styles from "./BasketSection.module.scss";

function BasketSection({ basketSneakers, onClose, onRemoveSneaker }) {
  return (
    <div className={styles.basketSection}>
      <div className={styles.header}>
        <h2>Корзина</h2>
        <img src="/assets/remove.svg" alt="Remove icon" onClick={onClose} />
      </div>
      {basketSneakers.length > 0 ? (
        <>
          <div className={styles.cartItems}>
            {basketSneakers.map(({ id, title, price }) => {
              return (
                <div key={id} className={styles.cartItem}>
                  <img
                    width={70}
                    height={70}
                    src={`/assets/sneakers/${id}.jpg`}
                    alt="First sneaker"
                  />
                  <div className={styles.cartItemDescription}>
                    <p>{title}</p>
                    <strong>{price} руб.</strong>
                  </div>
                  <img
                    src="/assets/remove.svg"
                    alt="Remove item"
                    className={styles.removeBtn}
                    onClick={() => onRemoveSneaker(id)}
                  />
                </div>
              );
            })}
          </div>
          <div className={styles.orderSection}>
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <strong>21 498 руб. </strong>
              </li>
              <li>
                <span>Налог 5%: </span>
                <div></div>
                <strong>1074 руб. </strong>
              </li>
            </ul>
            <button>
              <span>Оформить заказ</span>
              <img src="/assets/arrow.svg" alt="next" />
            </button>
          </div>
        </>
      ) : (
        <section className={styles.emptyBasket}>
          <img src="/assets/empty_box.png" alt="Empty basket" />
          <h2>Корзина пустая</h2>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button>
            <img src="/assets/back.svg" alt="Back" />
            <span onClick={onClose}>Вернуться назад</span>
          </button>
        </section>
      )}
    </div>
  );
}

export default BasketSection;
