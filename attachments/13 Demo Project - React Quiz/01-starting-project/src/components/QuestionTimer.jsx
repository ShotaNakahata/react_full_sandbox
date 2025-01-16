/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function QuestionTimer({ timeOut, onTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        console.log("setting timeout")
        const timeout = setTimeout(onTimeOut, timeOut);
        return ()=>{
            console.log("clearTimeout")
            clearTimeout(timeout)
        }
    }, [onTimeOut, timeOut])

    useEffect(() => {
        console.log("setting interval")
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - 100)
        }, 100)
        return () => {
            console.log("clearInterval")
            clearInterval(interval);
        }
    }, [])

    return (
        <progress value={remainingTime} max={timeOut}>

        </progress>
    )
}

export default QuestionTimer