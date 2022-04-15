import BasketSection from "./components/BasketSection";
import Header from "./components/Header";
import Sneaker from "./components/Sneaker";

const sneakers = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 8999,
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 10999,
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 15999,
  },
];

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BasketSection />
        <Header />
        <section className="content">
          <div className="content__header">
            <h1>Все кроссовки</h1>
            <div className="search">
              <img
                width={14.25}
                height={14.25}
                src="/assets/search.svg"
                alt="search"
              />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="sneakers">
            {sneakers.map(({ name, price }, index) => (
              <Sneaker name={name} price={price} imageIndex={index + 1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
