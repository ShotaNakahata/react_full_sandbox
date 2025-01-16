import React from 'react'
import { useState } from 'react'
import QUESTIONS from "../question";
import quizCompletedImg from "../assets/quiz-complete.png";
import Question from "./Question";
import { useCallback } from 'react';


function Quiz() {
    const [uerAnswers, setUerAnswers] = useState([])
    const [answeredState, setAnsweredState] = useState("")
    const activeQuestionIdx = answeredState === "" ? uerAnswers.length : uerAnswers.length - 1;

    const handleSelectedAnswer = useCallback(function handleSelectedAnswer(selectedAnswer) {
        setAnsweredState("answered")   ///なぜ一度この値に変更しないといけないかが分からない
        console.log("from handleSelectedAnswer")
        setUerAnswers(prev => [...prev, selectedAnswer])
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIdx].answers[0]) {
                setAnsweredState("correct");
            } else {
                setAnsweredState("wrong");
            }
        }, 1000)
        setTimeout(() => {
            setAnsweredState("")
        }, 2000);
    }, [activeQuestionIdx])

    const handleSkipAnswer = useCallback(() => handleSelectedAnswer(null), [handleSelectedAnswer])
    const quizCompleted = activeQuestionIdx === QUESTIONS.length
    if (quizCompleted) {
        return (
            <div id='summary'>
                <img src={quizCompletedImg} alt="Tropht Icon" />
                <h2>Quiz Completed</h2>
            </div>
        )
    }

    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIdx}
                questionText={QUESTIONS[activeQuestionIdx].text}
                anwers={QUESTIONS[activeQuestionIdx].answers}
                onSelectAnswer={handleSelectedAnswer}
                selectedAnswer={uerAnswers[uerAnswers.length - 1]}
                answeredState={answeredState}
                handleSkipAnswer={handleSkipAnswer}
            ></Question>
        </div>
    )
}

export default Quiz