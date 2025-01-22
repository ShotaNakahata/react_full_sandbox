import React from 'react'
import MealItems from "./MealItems";
// import useHttp from "../hooks/useHttp.js";
import useHttp from "../hooks/useHttp";

const requestConfig = {};
function Meals() {
    const { data: meals, isLoading, error } = useHttp("http://localhost:3000/meals", requestConfig, []);

    if (isLoading) {
        return <p>Fetching meals...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    console.log("Meals data in Meals component:", meals);

    if (!meals || meals.length === 0) {
        return <p>No meals found</p>;
    }


    return (
        <ul id="meals">
            {meals.map((meal) => (
                <MealItems meal={meal} key={meal.id} />
            ))}
        </ul>
    );
}

export default Meals;
