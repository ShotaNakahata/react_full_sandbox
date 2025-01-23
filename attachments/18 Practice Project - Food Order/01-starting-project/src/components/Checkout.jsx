import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { CartContext } from '../store/CartContext'
import Input from './UI/Input';
import Button from './UI/Button';
import userProgressContext from '../store/UserProgressContext';
import useHttp from '../hooks/useHttp';
import Error from './Error';
import { useActionState } from 'react';

const requestConfig = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
}

function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(userProgressContext)
    // eslint-disable-next-line no-unused-vars
    const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp("http://localhost:3000/orders", requestConfig)

    const cartTotal = cartCtx.items.reduce((acc, item) => {
        const itemPrice = item.price * item.quantity;
        return acc += itemPrice
    }, 0)
    function handleCloseCheckout() {
        // userProgressCtx.hideCart(); // CartModal を閉じる
        // userProgressCtx.showCheckout();
        userProgressCtx.hideCheckout()
    }
    function handleFinish() {
        userProgressCtx.hideCheckout()
        cartCtx.clearCart()
        clearData()
    }
    async function checkoutAction(prevState,fd) {
        const customerData = Object.fromEntries(fd.entries())
        await sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }))
    }
    // eslint-disable-next-line no-unused-vars
    const [formState, formAction, pending] = useActionState(checkoutAction, null)
    let action = (
        <>
            <Button textOnly type="button" onClick={handleCloseCheckout}>
                Close
            </Button>
            <Button>Submit order</Button>
        </>)

    if (pending) {
        action = (<span>is Sending...</span>)
    }
    if (data && !error) {
        return (
            <Modal open={userProgressCtx.process === "checkout"} onClose={handleFinish}>
                <h2>Success!</h2>
                <p>Your order was submitted succesfully</p>
                <p className='modal-action'>
                    <Button onClick={handleFinish}>Close</Button>
                </p>
            </Modal>
        )
    }
    return (
        <Modal open={userProgressCtx.process === "checkout"} onClose={handleCloseCheckout}>
            <form action={formAction}>
                <h2>Checkout</h2>
                <p>Total Amount: {cartTotal}</p>
                <Input label="Full Name" type="text" id="name"></Input>
                <Input label="E-mail" type="email" id="email"></Input>
                <Input label="Street" type="text" id="street"></Input>
                <div className='control-row'>
                    <Input label="Postal-Code" type="text" id="postal-code"></Input>
                    <Input label="City" type="text" id="city"></Input>
                </div>
                {error && <Error title="Faild to submit order" message={error}></Error>}
                <p className='modal-actions'>
                    {action}
                </p>
            </form>
        </Modal>
    )
}

export default Checkout