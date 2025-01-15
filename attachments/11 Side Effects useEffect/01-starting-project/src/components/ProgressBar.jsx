import React from 'react'
import { useState ,useEffect} from "react";

function ProgressBar({TIMER}) {
    const [remainingTime, setRemainingTime] = useState(TIMER)
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prev => prev - 10)
        }, 10)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <progress value={remainingTime} max={TIMER}></progress>
    )
}

export default ProgressBar