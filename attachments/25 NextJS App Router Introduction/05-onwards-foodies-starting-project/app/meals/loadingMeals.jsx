//app/loading.jsx
import React from 'react'
import classes from "./loading.module.css";

function LoadingMeals() {
    return (
        <>
            <p className={classes.loading}>Loading meals...</p>
        </>
    )
}

export default LoadingMeals