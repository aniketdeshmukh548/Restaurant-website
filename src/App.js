import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/cartProvider";

function App() {
  const [cartShown,setCartshown]=useState(false)
  const showCartHandler=()=>{
    setCartshown(true)
  }
  const hideCartHandler=()=>{
    setCartshown(false)
  }
  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
