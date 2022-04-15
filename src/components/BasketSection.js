function BasketSection() {
  return (
    <div style={{ display: "none" }} className="basket-section">
      <h2>Корзина</h2>
      <div className="cart-items">
        <div className="cart-item">
          <img
            width={70}
            height={70}
            src="/assets/sneakers/1.jpg"
            alt="First sneaker"
          />
          <div className="cart-item__description">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <strong>12 999 руб.</strong>
          </div>
          <img
            src="/assets/remove.svg"
            alt="Remove item"
            className="remove-btn"
          />
        </div>
      </div>

      <div className="order-section">
        <ul className="total-price">
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
