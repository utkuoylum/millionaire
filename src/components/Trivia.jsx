import { useEffect, useState } from "react";
import useSound from "use-sound"
import play from "/play.mp3"
import correct from "/correct.mp3"
import wait from "/wait.mp3"
import wrong from "/wrong.mp3"

export default function Trivia({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}) {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(()=>{
letsPlay()
    }, [letsPlay])

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
        delay(5000, ()=> {
            if(answer.correct) {
                if(questionNumber === 15) {
                    delay(1000, ()=>setStop(true))
                    
                }
                correctAnswer()
                delay(1000, ()=> {
                    setQuestionNumber(prev => prev+1)
                setSelectedAnswer(null)
                })
                
            } else {
                wrongAnswer();
                delay(1000, ()=>{
                    setStop(true)

                })
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
