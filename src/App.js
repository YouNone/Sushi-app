import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsVisable, setCartIsVisable] = useState(false);

  const showCartHandler = () => {
    setCartIsVisable(true);
  };

  const hideCartHandler = () => {
    setCartIsVisable(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisable && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
