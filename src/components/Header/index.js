import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <img
          src="/assets/logo.svg"
          alt="Sneakers logo"
          className={styles.logoImage}
        />
        <div className={styles.logoText}>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.utils}>
        <li>
          <img
            src="/assets/basket.svg"
            alt="Basket"
            className={styles.basket}
          />
        </li>
        <li>
          <span>1205 руб.</span>
        </li>
        <li>
          <img src="/assets/like.svg" alt="Like" className={styles.like} />
        </li>
        <ul>
          <img src="/assets/profile.svg" alt="Profile" />
        </ul>
      </ul>
    </header>
  );
}

export default Header;
