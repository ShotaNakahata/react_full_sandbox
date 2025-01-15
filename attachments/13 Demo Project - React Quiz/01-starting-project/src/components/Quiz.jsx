import React from 'react'
import { useState } from 'react'
import QUESTIONS from "../question";
import quizCompletedImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

function Quiz() {
    const [uerAnswers, setUerAnswers] = useState([])
    const activeQuestionIdx = uerAnswers.length;
    function handleSelectedAnswer(selectedAnswer) {
        setUerAnswers(prev=>[...prev,selectedAnswer])
    }
    const quizCompleted = activeQuestionIdx===QUESTIONS.length
    if(quizCompleted){
        return(
            <div id='summary'>
                <img src={quizCompletedImg} alt="Tropht Icon" />
                <h2>Quiz Completed</h2>
            </div>
        )
    }
    const shuffledAnswer =[...QUESTIONS[activeQuestionIdx].answers]
    shuffledAnswer.sort(()=>Math.random()-0.5)
    return (
        <div id='quiz'>
            <div id='quwstions'>
                <QuestionTimer timeOut={10000} onTimeOut={()=>setUerAnswers(null)}/>
            <h2>{QUESTIONS[activeQuestionIdx].text}</h2>
            <ul>
                {shuffledAnswer.map((answer) => {
                    return (
                        <li key={answer} className='answer'>
                            <button onClick={()=>handleSelectedAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
    )
}

export default Quiz