import styles from "./BasketSection.module.scss";

console.log(styles.basketSection);

function BasketSection() {
  return (
    <div className={styles.basketSection}>
      <h2>Корзина</h2>
      <div className={styles.cartItems}>
        <div className={styles.cartItem}>
          <img
            width={70}
            height={70}
            src="/assets/sneakers/1.jpg"
            alt="First sneaker"
          />
          <div className={styles.cartItemDescription}>
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <strong>12 999 руб.</strong>
          </div>
          <img
            src="/assets/remove.svg"
            alt="Remove item"
            className={styles.removeBtn}
          />
        </div>
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
    </div>
  );
}

export default BasketSection;
