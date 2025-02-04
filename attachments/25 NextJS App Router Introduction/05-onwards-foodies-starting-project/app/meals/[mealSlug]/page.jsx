/* eslint-disable react/prop-types */
import React from 'react'

function MealDetailPage({ params }) {
    return (
        <main>
            <h1>Meal Detail</h1>
            <h2>{params.mealSlug}</h2>
        </main>
    )
}

export default MealDetailPage