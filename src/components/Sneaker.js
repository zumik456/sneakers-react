function Sneaker() {
  return (
    <div className="sneaker">
      <img src="/assets/liked.svg" alt="Liked" className="liked" />
      <img
        src="/assets/sneakers/1.jpg"
        alt=""
        className="sneaker__image"
        width={133}
        height={112}
      />
      <p className="sneaker__description">
        Мужские Кроссовки Nike Blazer Mid Suede
      </p>
      <div className="sneaker__buy">
        <div className="sneaker__price">
          <span>Цена:</span>
          <strong>12 999 руб.</strong>
        </div>
        <img
          src="/assets/add.svg"
          alt="Add sneaker to basket"
          className="sneaker__add"
        />
      </div>
    </div>
  );
}

export default Sneaker;
