import Sneaker from "../components/Sneaker";

function Home({
  sneakers,
  searchValue,
  setSearchInputValue,
  onAddBasketItems,
  onRemoveBasketItems,
  onAddLikedItems,
  onRemoveLikedItems,
}) {
  return (
    <section className="content">
      <div className="content__header">
        <h1>{searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"}</h1>
        <div className="search">
          <img
            width={14.25}
            height={14.25}
            src="/assets/search.svg"
            alt="search"
          />
          <input
            value={searchValue}
            onChange={setSearchInputValue}
            type="text"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="sneakers">
        {sneakers
          .filter((s) =>
            s.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(({ id, title, price }) => (
            <Sneaker
              key={id}
              title={title}
              price={price}
              id={id}
              onAddBasket={(s) => onAddBasketItems(s)}
              onRemoveBasket={(s) => onRemoveBasketItems(s)}
              onAddLiked={(s) => onAddLikedItems(s)}
              onRemoveLiked={(s) => onRemoveLikedItems(s)}
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
