import React from 'react'
import MainNavigation from '../components/MainNavigation'

function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occured</h1>
                <p>Could not found this page</p>
            </main>
        </>
    )
}

export default ErrorPage