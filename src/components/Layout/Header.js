import classes  from "./Header.module.css";
import React from "react";
import image from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartbutton";
const Header=(props)=>{
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Tiffins</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}><img src={image} alt='img of meal' /></div>
        </React.Fragment>
    )
}

export default Header;