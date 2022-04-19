import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import BasketSection from "./components/BasketSection";
import Header from "./components/Header";

function App() {
  const [basketOpened, setBasketOpened] = React.useState(false);
  const [sneakers, setSneakers] = React.useState([]);
  const [basketItems, setBasketItems] = React.useState([]);
  const [likedItems, setLikedItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://625c498750128c57020cf123.mockapi.io/sneakers")
      .then((res) => {
        setSneakers(res.data);
      });
    axios
      .get("https://625c498750128c57020cf123.mockapi.io/basket-sneakers")
      .then((res) => {
        setBasketItems(res.data);
      });
  }, []);

  const onAddBasketItems = (s) => {
    axios.post(
      "https://625c498750128c57020cf123.mockapi.io/basket-sneakers",
      s
    );
    setBasketItems([...basketItems, s]);
  };
  const onRemoveBasketItems = (id) => {
    setBasketItems(basketItems.filter((elem) => elem.id !== id));
    axios.delete(
      `https://625c498750128c57020cf123.mockapi.io/basket-sneakers/${id}`
    );
  };
  const onAddLikedItems = (s) => {
    axios.post("https://625c498750128c57020cf123.mockapi.io/liked-sneakers", s);
    setLikedItems((prev) => [...prev, s]);
  };
  const onRemoveLikedItems = (id) => {
    setLikedItems(likedItems.filter((elem) => elem.id !== id));
    axios.delete(
      `https://625c498750128c57020cf123.mockapi.io/liked-sneakers/${id}`
    );
  };
  const setSearchInputValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {basketOpened && (
          <BasketSection
            basketSneakers={basketItems}
            onClose={() => setBasketOpened(false)}
            onRemoveSneaker={onRemoveBasketItems}
            isAdded
          />
        )}
        <Header onClickBasket={() => setBasketOpened(true)} />

        <Route path="/" exact>
          <Home
            sneakers={sneakers}
            searchValue={searchValue}
            setSearchInputValue={setSearchInputValue}
            onAddBasketItems={onAddBasketItems}
            onRemoveBasketItems={onRemoveBasketItems}
            onAddLikedItems={onAddLikedItems}
            onRemoveLikedItems={onRemoveLikedItems}
          />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </div>
    </div>
  );
}

export default App;
