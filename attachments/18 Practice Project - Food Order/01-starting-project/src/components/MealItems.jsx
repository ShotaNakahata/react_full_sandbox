/* eslint-disable react/prop-types */
import { currencyFormatter } from "../util/formatting";
import React, { useContext } from 'react'
import Button from "./UI/Button";
import { CartContext } from "../store/CartContext";

export default function MealItems({ meal }) {
    const cartCtx = useContext(CartContext)
    function handleAddMealToCart() {
        cartCtx.addItem(meal)
    }
    return (
        <li className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="meal.image" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>{currencyFormatter.format(meal.price)}</p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className='meal-item-actions'>
                    <Button onClick={handleAddMealToCart}>Add Cart</Button>
                </p>
            </article>
        </li>
    )
}
