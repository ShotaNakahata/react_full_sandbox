import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { CartContext } from '../store/CartContext'
import Input from './UI/Input';
import Button from './UI/Button';
import userProgressContext from '../store/UserProgressContext';

function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(userProgressContext)
    const cartTotal = cartCtx.items.reduce((acc, item) => {
        const itemPrice = item.price * item.quantity;
        return acc += itemPrice
    }, 0)
    function handleCloseCheckout() {
        userProgressCtx.hideCheckout()
    }
    return (
        <Modal open={userProgressCtx.process==="checkout"} onClose={handleCloseCheckout}>
            <form action="">
                <h2>Checkout</h2>
                <p>Total Amount: {cartTotal}</p>
                <Input label="Full Name" type="text" id="full-name"></Input>
                <Input label="E-mail" type="email" id="email"></Input>
                <Input label="Street" type="text" id="street"></Input>
                <div className='control-row'>
                    <Input label="Postal-Code" type="text" id="postal-code"></Input>
                    <Input label="City" type="text" id="city"></Input>
                </div>
                <p className='modal-action'>
                    <Button textOnly type="button" onClick={handleCloseCheckout}>Close</Button>
                    <Button>Submit order</Button>
                </p>
            </form>
        </Modal>
    )
}

export default Checkout