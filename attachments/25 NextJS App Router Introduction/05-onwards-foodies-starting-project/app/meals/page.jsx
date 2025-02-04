import Link from 'next/link'
import React from 'react'

function MealPage() {
  return (
    <main>
        <h1>Meal Page</h1>
        <Link href="meals/share">to share Page</Link>
        <Link href="meals/something">to something Page</Link>
    </main>
  )
}

export default MealPage