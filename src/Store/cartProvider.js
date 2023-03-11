import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{
    const [items,updateItems]=useState([])
const addItemtoCartHandler=(item)=>{
    updateItems([...items,item])
}

const removeItemfromCartHandler=(id)=>{

}

    const cartContext= ({
        items:items,
        totalAmount:0,
        addItem:addItemtoCartHandler,
        removeItem:removeItemfromCartHandler,
        message:'i am here'
    })
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;