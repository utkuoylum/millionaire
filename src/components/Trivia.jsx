import { useEffect, useState } from "react";

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")

    useEffect(()=> {
setQuestion(data[questionNumber-1])
    },[data, questionNumber])

    function delay(duration, callback) {
        setTimeout(()=>{
            callback()
        },duration)
    }

    function handleClick(answer) {
        setSelectedAnswer(answer)
        setClassName("answer active")
        delay(3000, () => setClassName(answer.correct ? "answer correct" : "answer wrong"));
        delay(6000, ()=> {
            if(answer.correct) {
                setQuestionNumber(prev => prev+1)
                setSelectedAnswer(null)
            } else {
                setStop(true)
            }
        })
      
    }


  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map(answer => <div key={question.answers.indexOf(answer)} className={selectedAnswer === answer ? className : "answer"} onClick={()=> handleClick(answer)}>{answer.text}</div>)}
      </div>
    </div>
  );
}
