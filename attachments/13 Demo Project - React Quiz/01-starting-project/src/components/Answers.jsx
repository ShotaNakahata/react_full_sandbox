/* eslint-disable react/prop-types */
import React from 'react'
import { useRef } from 'react';
function Answers({ answers, selectedAnswer, answeredState, onSelect }) {
    const shuffledAnswer = useRef();
    if (!shuffledAnswer.current) {
        shuffledAnswer.current = [...answers];
        shuffledAnswer.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id='answers'>
            {shuffledAnswer.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClass = "";
                if (answeredState === "answered" && isSelected) {
                    cssClass = "selected";
                }
                if ((answeredState === "correct" || answeredState === "wrong") && isSelected) {
                    cssClass = answeredState;
                }
                return (
                    <li key={answer} className='answer'>
                        <button onClick={() => onSelect(answer)} className={cssClass}>
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}


export default Answers