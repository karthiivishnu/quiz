import React, { useEffect, useState } from "react";
import "./QuestionsDisplay.css";
import PageDownNavigation from './PageDownNavigation';
import './QuestionsDisplay.css';



const QuestionsDisplay = ({ questions, currentQuestion, validateAnswerAndShowNextQn, navigateToQn,nameLocalStorageKey,timeOutAndShowSubmitPage }) => {
    const [buttonStyle, setButtonStyle] = useState("buttonDisable");
    const [answerGiven, setAnswerGiven] = useState();
    const [optionStyle, setOptionStyle] = useState(null);
    const [timer, setTimer] = useState(5 * 60);
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    useEffect(enableSubmitButtonAfterNavigation);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
      
      useEffect(() => {
        if (timer === 0) {
            timeOutAndShowSubmitPage();
        }
      }, [timer]);


    function enableSubmitButtonAfterNavigation() {
       
        if (questions[currentQuestion].isVisited === true && questions[currentQuestion].answeredCorrect !== '') {
            setButtonStyle("buttonEnable");
        }


    }


    function enableNextButtonAndStoreAns(ans, id) {
        setOptionStyle(id);
        setAnswerGiven(ans);
        setButtonStyle("buttonEnable");
        //console.log(answerGiven);
        console.log(questions);
    }
    function nextBtnClicked() {

        console.log("next button clicked");
        validateAnswerAndShowNextQn(answerGiven);
        setButtonStyle("buttonDisable");
        setOptionStyle(null);

    }

   


    return (
        <>
        <div className="userNameAndTimer">
            <h3 className="userName">{localStorage.getItem(nameLocalStorageKey)}</h3>
            <h3 className="timer">Time left: {minutes}m {seconds}</h3>
            </div>
            <div className="questionBox">
                <h3 className="questionNo">{currentQuestion + 1} out of {questions.length}</h3>
                <div className="question">
                    <h4>{questions[currentQuestion].question}</h4>
                    {questions[currentQuestion].isVisited = true}


                    {questions[currentQuestion].options.map((option) => {
                        return (
                            <li className={optionStyle === option.id ? "optionsClicked" : "options"} key={option.id} onClick={() => enableNextButtonAndStoreAns(option.isCorrect, option.id)}>
                                {option.text}
                            </li>
                        );
                    })}
                </div>
                <button className={buttonStyle} onClick={() => nextBtnClicked(answerGiven)}>
                    Next
                </button>

            </div>
            {(currentQuestion + 1) ? <div className="navigationCircleBorder">
                {
                    questions.map((qn) => {
                        
                        return (
                            <PageDownNavigation key={qn.id} questionNumber={qn.id} navigateToQn={navigateToQn} isVisited= {qn.isVisited}  setOptionStyle =  {setOptionStyle}></PageDownNavigation>
                        );
                    })
                }
            </div> : ''}
        </>
    );
};

export default QuestionsDisplay;
