//import { text } from 'body-parser'

import { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemFrom=(props)=>{
    const [amountIsvalid,setamountIsvalid]=useState(true)
    const amountInputref=useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredamount=amountInputref.current.value;
        const enteredamountNumber=+enteredamount;

        if(enteredamount.trim().length===0 || enteredamountNumber<1 || enteredamountNumber>5){
            setamountIsvalid(false)
            return;
        }
        props.onAddToCart(enteredamountNumber)
    }
    
    // const cartCntx=useContext(CartContext)
    // const addItemtoCart=(event)=>{
    //         event.preventDefault()
    //        // cartCntx.items.push(props.item)
    //        const quantity=document.getElementById('amount_' +props.id).value;
    //        cartCntx.addItem({...props.item,quantity:quantity})
    // }
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input 
                ref={amountInputref}
                label="Amount" input={{
                id:'amount',
                //id:'amount_' +props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!amountIsvalid && <p>Please enter a valid amount!!</p>}
        </form>
    )
}

export default MealItemFrom