function Header() {
  return (
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
          <img src="/assets/profile.svg" alt="Profile" className="profile" />
        </ul>
      </ul>
    </header>
  );
}

export default Header;
