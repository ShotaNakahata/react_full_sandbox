/* eslint-disable react/prop-types */
import React from 'react'

export default function MealItems({ meal }) {
    return (
        <li key={meal.id} className='meal-item'>
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt="meal.image" />
                <div>
                    <h3>{meal.name}</h3>
                    <p className='meal-item-price'>{meal.price}</p>
                    <p className='meal-item-description'>{meal.description}</p>
                </div>
                <p className='meal-item-actions'>
                    <button>Add Cart</button>
                </p>
            </article>
        </li>
    )
}
