import React from 'react'
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = (questionText,anwers,onSelectAnswer,selectedAnswer,answeredState,handleSkipAnswer) => {
    return (
        <div id='quwstions'>
            <QuestionTimer  
            timeOut={15000} 
            onTimeOut={handleSkipAnswer} 
            />
            <h2>{questionText}</h2>
            <Answers
                answers={anwers}
                selectedAnswer={selectedAnswer}
                answeredState={answeredState}
                onSelect={onSelectAnswer} />
        </div>
    )
}

export default Question