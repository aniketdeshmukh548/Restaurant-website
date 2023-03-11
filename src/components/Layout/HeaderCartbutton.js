import CartIcon from "../Cart/CartIcon";
import React,{useContext} from "react";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/cart-context";
const HeaderCartButton=(props)=>{
    const cartCtx=useContext(CartContext)
    let quantity=0;
    cartCtx.items.forEach(item=>{
        quantity=quantity+Number(item.quantity)
    })
    // const noOfcartItems=cartCtx.items.reduce((currnum,item)=>{
    //     return currnum+item.amount
    // },0)

    return(
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span>{cartCtx.message}</span>
        <span className={classes.badge}>{quantity}</span>
        </button>
    )
}

export default HeaderCartButton;