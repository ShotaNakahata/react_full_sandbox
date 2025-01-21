import React, { useEffect, useState } from 'react'
import MealItems from "./MealItems";
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
                    <MealItems meal={meal} key={meal.id}/>
                )
            })}
        </ul>
    )
}

export default Meals