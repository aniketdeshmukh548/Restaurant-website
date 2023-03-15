import CartIcon from "../Cart/CartIcon";
import React,{useContext, useEffect, useState} from "react";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../Store/cart-context";
const HeaderCartButton=(props)=>{
    const [btnHighlighted,setbtnHighlighted]=useState(false)
    const cartCtx=useContext(CartContext)
    // let quantity=0;
    // cartCtx.items.forEach(item=>{
    //     quantity=quantity+Number(item.quantity)
    // })
    const {items}=cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
    const btnClasses=`${classes.button} ${btnHighlighted ? classes.bump:''}`  
    useEffect(()=>{
        if(items.length===0){
            return
        }
        setbtnHighlighted(true)
        const timer=setTimeout(() => {
            setbtnHighlighted(false)
        }, 300);

        return()=>{
            clearTimeout(timer)
        }
    },[items])

    return(
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        {<span>{cartCtx.message}</span>}
        <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;