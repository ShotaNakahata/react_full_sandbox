import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { CartContext } from '../store/CartContext'
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import userProgressContext from '../store/UserProgressContext';
import CartItem from './CartItem';

function Cart() {
    const cartCtx = useContext(CartContext)
    const userProgressCtx = useContext(userProgressContext)
    const cartTotal = cartCtx.items.reduce((acc, item) => {
        const itemPrice = item.price * item.quantity;
        return acc += itemPrice
    }, 0)
    function handleCloseCart() {
        userProgressCtx.hideCart()
    }
    function handleOpenCheckout() {
        userProgressCtx.showCheckout()
    }

    return (
        <Modal
            className='cart'
            open={userProgressCtx.process === "cart"}
            onClose={userProgressCtx.process === "checkout" ? handleCloseCart : undefined}
            >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => {
                    return <CartItem key={item.id} item={item}
                        onIncrease={() => cartCtx.addItem(item)}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                    ></CartItem>
                })}
            </ul>
            <p className='cart-total'>
                {currencyFormatter.format(cartTotal)}
            </p>
            <p className='modal-actions'>
                <Button textOnly onClick={handleCloseCart}>Close</Button>
                {cartCtx.items.length > 0 && <Button onClick={handleOpenCheckout} >Go to Check Out</Button>}
            </p>
        </Modal>
    )
}

export default Cart