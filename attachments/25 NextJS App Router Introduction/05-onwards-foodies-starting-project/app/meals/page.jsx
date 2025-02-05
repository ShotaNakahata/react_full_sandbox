// app/meals/page.jsx
import React, { Suspense } from 'react'
import classes from "./page.module.css";
import Link from 'next/link';
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from '@/lib/meals';

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

async function MealPage() {
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
        <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}

export default MealPage