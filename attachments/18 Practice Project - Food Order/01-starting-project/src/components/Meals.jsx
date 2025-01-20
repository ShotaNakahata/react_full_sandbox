import React, { useEffect, useState } from 'react'

function Meals() {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        async function fetchMeal() {
            const response = await fetch("http://localhost:3000/meals")
            const data = await response.json()
            console.log(data)
            setMeals(data)
        }
        fetchMeal()
    }, [])

    return (
        <ul id='meals'>
            {meals.map((meal)=>{
                return(
                    <li key={meal.id} className='meal-item'>
                        <article>
                            <img src={meal.image} alt="meal.image" />
                            <h3>{meal.name}</h3>
                            <p className='meal-item-price'>{meal.price}</p>
                            <p className='meal-item-description'>{meal.description}</p>
                        </article>
                    </li>
                )
            })}
        </ul>
    )
}

export default Meals