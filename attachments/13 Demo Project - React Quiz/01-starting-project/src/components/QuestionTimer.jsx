/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function QuestionTimer({ timeOut, onTimeOut }) {
    const [remainingTime, setRemainingTime] = useState(timeOut);

    useEffect(() => {
        setTimeout(onTimeOut, timeOut);
    }, [onTimeOut,timeOut])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prev => prev - 100)
        }, 100)
    }, [])

    return (
        <progress value={remainingTime} max={timeOut}>

        </progress>
    )
}

export default QuestionTimer