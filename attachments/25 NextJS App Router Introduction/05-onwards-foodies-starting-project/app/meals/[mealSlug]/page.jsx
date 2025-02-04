import React from 'react'

function page({ params }) {
    return (
        <main>
            <h1>{params.mealSlug}</h1>
        </main>
    )
}

export default page