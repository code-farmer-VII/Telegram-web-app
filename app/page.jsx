"use client"


import { useState, useEffect } from "react";
import Card from "@/Components/Card/card";
import Cart from "@/Components/Cart/Cart";

const { getData } = require("@/db/Idb");

const foods = getData();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [tele, setTele] = useState(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      setTele(window.Telegram.WebApp);
      window.Telegram.WebApp.ready();
    }
  }, []);

  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    if (tele) {
      tele.MainButton.text = "Pay :)";
      tele.MainButton.show();
    }
  };

  return (
    <>
      <h1 className="heading">Order Food</h1>
      <Cart cartItems={cartItems} onCheckout={onCheckout} />
      <div className="cards__container">
        {foods.map((food) => (
          <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} />
        ))}
      </div>
    </>
  );
}

export default App;
