import styles from "./Sneaker.module.scss";

function Sneaker({ name, price, imageIndex }) {
  return (
    <div className={styles.sneaker}>
      <img src="/assets/liked.svg" alt="Liked" className={styles.liked} />
      <img
        src={`/assets/sneakers/${imageIndex}.jpg`}
        alt=""
        className="sneaker__image"
        width={133}
        height={112}
      />
      <p className={styles.sneakerDescription}>{name}</p>
      <div className="sneaker__buy">
        <div className={styles.sneakerPrice}>
          <span>Цена:</span>
          <strong>{price} руб.</strong>
        </div>
        <button className={styles.sneakerAdd}>
          <img src="/assets/add.svg" alt="Add sneaker to basket" />
        </button>
      </div>
    </div>
  );
}

export default Sneaker;
