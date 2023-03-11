import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartShown,setCartshown]=useState(false)
  const showCartHandler=()=>{
    setCartshown(true)
  }
  const hideCartHandler=()=>{
    setCartshown(false)
  }
  return (
    <div>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
