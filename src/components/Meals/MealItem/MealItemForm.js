//import { text } from 'body-parser'
import { useContext } from 'react'
import CartContext from '../../../Store/cart-context'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemFrom=(props)=>{
    
    const cartCntx=useContext(CartContext)
    const addItemtoCart=(event)=>{
            event.preventDefault()
           // cartCntx.items.push(props.item)
           const quantity=document.getElementById('amount_' +props.id).value;
           cartCntx.addItem({...props.item,quantity:quantity})
    }
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id:'amount_' +props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button onClick={addItemtoCart}>+ Add</button>
        </form>
    )
}

export default MealItemFrom