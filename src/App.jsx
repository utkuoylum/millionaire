import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: " Who sang the title song for the latest Bond film, No Time to Die?",
      answers: [
        {
          text: "Adele",
          correct: false,
        },
        {
          text: "Sam Smith",
          correct: false,
        },
        {
          text: "Billie Ellish",
          correct: true,
        },
        {
          text: "Beyonce",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which city is home to the Brandenburg Gate?",
      answers: [
        {
          text: "Vienna",
          correct: false,
        },
        {
          text: "Berlin",
          correct: true,
        },
        {
          text: "Washington",
          correct: false,
        },
        {
          text: "Zurich",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "If you were looking at Iguazu Falls, on what continent would you be?",
      answers: [
        {
          text: "Asia",
          correct: false,
        },
        {
          text: "Africa",
          correct: false,
        },
        {
          text: "Europe",
          correct: false,
        },
        {
          text: "South America",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "What number was the Apollo mission that successfully put a man on the moon for the first time in human history?",
      answers: [
        {
          text: "Apollo 11",
          correct: true,
        },
        {
          text: "Apollo 12",
          correct: false,
        },
        {
          text: "Apollo 13",
          correct: false,
        },
        {
          text: "Apollo 14",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of the following languages has the longest alphabet?",
      answers: [
        {
          text: "Greek",
          correct: false,
        },
        {
          text: "Russian",
          correct: true,
        },
        {
          text: "Arabic",
          correct: false,
        },
        {
          text: "German",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What city hosted the 2002 Olympic Games?",
      answers: [
        {
          text: "Tokyo",
          correct: false,
        },
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "Istanbul",
          correct: false,
        },
        {
          text: "Sydney",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "How long did dinosaurs live on the earth?",
      answers: [
        {
          text: "50-100 million years",
          correct: false,
        },
        {
          text: "100-150 million years",
          correct: false,
        },
        {
          text: "150-200 million years",
          correct: true,
        },
        {
          text: "200+ million years",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Where was tea invented?",
      answers: [
        {
          text: "China",
          correct: true,
        },
        {
          text: "Turkey",
          correct: false,
        },
        {
          text: "England",
          correct: false,
        },
        {
          text: "Denmark",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Where was the earliest documented case of the Spanish flu?",
      answers: [
        {
          text: "USA",
          correct: true,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "Mexico",
          correct: false,
        },
        {
          text: "Gana",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Arnold Schwarzenegger was married to a member of what famous US political family?",
      answers: [
        {
          text: "The Kennedys",
          correct: true,
        },
        {
          text: "The Bushes",
          correct: false,
        },
        {
          text: "The Rockefellers",
          correct: false,
        },
        {
          text: "The Obamas",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which Game of Thrones character is known as the Young Wolf?",
      answers: [
        {
          text: "Arya Stark",
          correct: false,
        },
        {
          text: "Robb Stark",
          correct: true,
        },
        {
          text: "Sansa Stark",
          correct: false,
        },
        {
          text: "Eddard Stark ",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which horoscope sign is a fish?",
      answers: [
        {
          text: "Aquarius",
          correct: false,
        },
        {
          text: "Cancer",
          correct: false,
        },
        {
          text: "Pisces",
          correct: true,
        },
        {
          text: "Libra",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What is the largest US state (by landmass)?",
      answers: [
        {
          text: "Texas",
          correct: false,
        },
        {
          text: "Alaska",
          correct: true,
        },
        {
          text: "California",
          correct: false,
        },
        {
          text: "Nevada",
          correct: false,
        },
      ],
    },
    
      ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1000" },
        { id: 6, amount: "$ 2000" },
        { id: 7, amount: "$ 4000" },
        { id: 8, amount: "$ 8000" },
        { id: 9, amount: "$ 16000" },
        { id: 10, amount: "$ 32000" },
        { id: 11, amount: "$ 64000" },
        { id: 12, amount: "$ 125000" },
        { id: 13, amount: "$ 250000" },
        { id: 14, amount: "$ 500000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if(questionNumber === 15) {
      setEarned("$ 1000000")
    }
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">{username} earned: {earned}</h1>
            ) : (
              <>
                {" "}
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid?.map((item) => (
                <li
                  className={
                    "moneyListItem " +
                    (item.id === questionNumber ? "active" : "")
                  }
                  key={item.id}
                >
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemAmount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : 
        <Start setUsername={setUsername} />
      }
    </div>
  );
}

export default App;
