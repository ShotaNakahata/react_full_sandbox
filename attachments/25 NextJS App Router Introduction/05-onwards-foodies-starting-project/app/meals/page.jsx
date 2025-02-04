import React from 'react'
import classes from "./page.module.css";
import Link from 'next/link';
import MealsGrid from "@/components/meals/mealsGrid";

function MealPage() {
  return (
    <>
    <header className={classes.header}>
      <h1>Special meals, crated <span className={classes.highlight}>by you</span></h1>
      <p>Chouse your favorite recipe</p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share your recipe</Link>
      </p>
    </header>

    <main className={classes.main}>
      <MealsGrid meals={[]}/>
    </main>
    </>
  )
}

export default MealPage