/* eslint-disable react/prop-types */
import React from 'react'
import classes from "./page.module.css";
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

function MealDetailPage({params}) {
    const meal = getMeal(params.mealSlug)
    if(!meal){
        notFound()
    }
    meal.instructions = meal.instructions.replace(/\n/g,"<br/>");
    
    console.log("meal",meal)
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.titel}</h1>
                    <p className={classes.creator}>
                        by <a href={`mail to ${meal.creator_emial}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
            {/* dangerouslySetInnerHTMLとは何か？なぜこれまで使用してこなかったが特別ここで必要なのか？ */}
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html:meal.instructions
                }}>
                </p>
            </main>
        </>
    )
}

export default MealDetailPage