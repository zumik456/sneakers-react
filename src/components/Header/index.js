import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header({ onClickBasket }) {
  return (
    <header>
      <Link to="/">
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
      </Link>
      <ul className={styles.utils}>
        <li className={styles.utilsAmount} onClick={onClickBasket}>
          <img
            src="/assets/basket.svg"
            alt="Basket"
            className={styles.basket}
          />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img src="/assets/like.svg" alt="Like" className={styles.like} />
          </Link>
        </li>
        <ul>
          <img src="/assets/profile.svg" alt="Profile" />
        </ul>
      </ul>
    </header>
  );
}

export default Header;
