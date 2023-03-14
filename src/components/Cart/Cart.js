import { useContext } from 'react'
import CartContext from '../../Store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
const Cart=(props)=>{
    const carttcntx=useContext(CartContext)
    const totalamount=`$${carttcntx.totalAmount.toFixed(2)}`
    const hasItem=carttcntx.items.length>0;
    const cartItemRemoveHandler=(id)=>{
        carttcntx.removeItem(id)
    }
    const cartItemAddHandler=(item)=>{
        carttcntx.addItem({...item,amount:1})
        //carttcntx.addItem(item)
    }
    const cartItems = (
        <ul className={classes['cart-items']}>
          {carttcntx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );
   // <li>Name:{item.name} Price:{item.price} Quantity:{item.quantity}</li>
    return(
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalamount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem&&<button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;