/* eslint-disable react/prop-types */
import React from 'react'
import { currencyFormatter } from "../util/formatting";

export default function CartItem({ item ,onIncrease,onDecrease}) {
    return (
        <li className='cart-item'>
            <p>{item.name}-{item.price} X {currencyFormatter.format(item.quantity)}</p>
            <p className='cart-item-actions'>
                <button onClick={onDecrease}>-</button>
                <span>{item.quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}
