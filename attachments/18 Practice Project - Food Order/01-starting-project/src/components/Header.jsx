import React, { useContext } from 'react'
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { CartContext } from '../store/CartContext';
import userProgressContext from '../store/UserProgressContext';

function Header() {
    const cartCtx = useContext(CartContext)
    const usetProgressCtx = useContext(userProgressContext)
    const cartMealsNum = cartCtx.items.reduce((acc, item) => {
        return acc += item.quantity
    }, 0)
    function handleShowCart() {
        usetProgressCtx.showCart()
    }
    return (
        <header id='main-header'>
            <div id='title'>
                <img src={logo} alt="logo" />
                <h1>REACTFOOD</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart {cartMealsNum}</Button>
            </nav>
        </header>
    )
}

export default Header