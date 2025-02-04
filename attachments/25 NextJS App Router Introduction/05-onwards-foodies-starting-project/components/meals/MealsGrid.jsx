/* eslint-disable react/prop-types */
import React from 'react'
import classes from "./MealsGrid.module.css";
import MealItem from './MealItem';

function MealsGrid({ meals }) {
    return (
        <ul className={classes.meals}>
            {meals.map((meal) => {
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            })}
        </ul>
    )
}

export default MealsGrid