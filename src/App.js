import BasketSection from "./components/BasketSection";
import Header from "./components/Header";
import Sneaker from "./components/Sneaker";

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
            <Sneaker />
            <Sneaker />
            <Sneaker />
            <Sneaker />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
