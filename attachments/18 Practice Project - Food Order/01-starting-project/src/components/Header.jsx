import React, { useContext } from 'react'
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from '../store/CartContext';

function Header() {
    const cartCtx = useContext(CartContext)
    const cartMealsNum = cartCtx.items.reduce((acc, item) => {
        return acc += item.quantity
    }, 0)
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt="logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly>Cart {cartMealsNum}</Button>
            </nav>
        </header>
    )
}

export default Header