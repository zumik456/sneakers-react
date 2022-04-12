function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div className="logo">
            <img
              src="/assets/logo.svg"
              alt="Sneakers logo"
              className="logo__image"
            />
            <div className="logo__text">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="utils">
            <li>
              <img src="/assets/basket.svg" alt="Basket" className="basket" />
            </li>
            <li>
              <span>1205 руб.</span>
            </li>
            <li>
              <img src="/assets/like.svg" alt="Like" className="like" />
            </li>
            <ul>
              <img
                src="/assets/profile.svg"
                alt="Profile"
                className="profile"
              />
            </ul>
          </ul>
        </header>
        <section className="content">
          <h1>Все кроссовки</h1>
          <div className="sneakers">
            <div className="sneaker">
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
