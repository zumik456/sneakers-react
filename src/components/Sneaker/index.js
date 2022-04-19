import React from "react";
import styles from "./Sneaker.module.scss";

function Sneaker({
  id,
  title,
  price,
  onAddBasket,
  onRemoveBasket,
  onAddLiked,
  onRemoveLiked,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const toggleAddRemoveBasket = () => {
    setIsAdded(!isAdded);
    isAdded ? onRemoveBasket(id) : onAddBasket({ id, title, price });
  };

  const toggleAddRemoveLiked = () => {
    setIsLiked(!isLiked);
    isLiked ? onRemoveLiked(id) : onAddLiked({ id, title, price });
  };

  return (
    <div className={styles.sneaker}>
      <img
        src={`/assets/${isLiked ? "liked" : "unliked"}.svg`}
        alt="Liked"
        classtitle={styles.liked}
        onClick={toggleAddRemoveLiked}
      />
      <img
        src={`/assets/sneakers/${id}.jpg`}
        alt="Sneaker"
        width={133}
        height={112}
      />
      <p className={styles.sneakerDescription}>{title}</p>
      <div className={styles.sneakerBuy}>
        <div className={styles.sneakerPrice}>
          <span>Цена:</span>
          <strong>{price} руб.</strong>
        </div>
        <img
          className={styles.sneakerAdd}
          src={`/assets/${isAdded ? "added" : "add"}.svg`}
          alt="Add sneaker to basket"
          onClick={toggleAddRemoveBasket}
        />
      </div>
    </div>
  );
}

export default Sneaker;
