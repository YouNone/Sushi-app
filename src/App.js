import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsVisable, setCartIsVisable] = useState(false);

  const showCartHandler = () => {
    setCartIsVisable(true);
  };

  const hideCartHandler = () => {
    setCartIsVisable(false);
  };

  return (
    <div className="App">
      {cartIsVisable && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
