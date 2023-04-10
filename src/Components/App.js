import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import UserDetails from './UserDetails';
import Instructions from './Instructions';
import { questionDetails } from '../questionObject.js'
import QuestionsDisplay from './QuestionsDisplay';
import Confirmation from './Confirmation'
import Result from './Result';




function App() {

  const nameLocalStorageKey = "name_local_storage";
  const scoreLocalStorageKey = "score_local_key";
  const navigate = useNavigate();

  const [quizTakerName, setQuizTakerName] = useState({
    name: '',
    phoneNumber: ''
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  localStorage.setItem(scoreLocalStorageKey, score);

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function (event) {
      window.history.go(1);
    };
  });



 

  function setName(e) {
    const name = e.target.name;
    const value = e.target.value;
    setQuizTakerName({ ...quizTakerName, [name]: value });
  };

  function validateAnswerAndShowNextQn(ansCorrect) {
    console.log(ansCorrect);
    if (ansCorrect) {
      questionDetails[currentQuestion].answeredCorrect = "true";
    }
    else {
      questionDetails[currentQuestion].answeredCorrect = "false";

    }
    if (currentQuestion + 1 < questionDetails.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      navigate('Confirmations');
    }

  }

  function navigateToQn(qnNo) {
    console.log(qnNo);
    if (questionDetails[qnNo].isVisited === true) {
      setCurrentQuestion(qnNo);
    }
  }

  function submitQuiz() {
    questionDetails.forEach(function (question) {
      if (question.answeredCorrect === "true") {
        setScore((prevState) => {
          prevState = prevState + 1;
          //console.log(prevState);
          localStorage.setItem(scoreLocalStorageKey, prevState);
          console.log(localStorage.getItem(scoreLocalStorageKey));
          return prevState;
        });
      }
    });
    console.log(score);
     
    navigate('Results')
  }

  function timeOutAndShowSubmitPage() {
    navigate('Confirmations');

  }

  const AppRoutes = () => {
    return (
      <>

        <Routes>
          <Route path="/" element={<WelcomePage welcomePageSubmit={welcomePageSubmit} />}></Route>
          <Route path="/UserDetails" element={<UserDetails userDetailSubmit={userDetailSubmit} setName={setName} quizTakerName={quizTakerName} />}></Route>
          <Route path="/Instructions" element={<Instructions nameLocalStorageKey={nameLocalStorageKey} showQuestions={showQuestions} />}></Route>
          <Route path="/Questions" element={<QuestionsDisplay questions={questionDetails} currentQuestion={currentQuestion} validateAnswerAndShowNextQn={validateAnswerAndShowNextQn} navigateToQn={navigateToQn} nameLocalStorageKey={nameLocalStorageKey} timeOutAndShowSubmitPage={timeOutAndShowSubmitPage} />}></Route>
          <Route path="/Confirmations" element={<Confirmation submitQuiz={submitQuiz} />}></Route>
          <Route path="/Results" element={<Result scoreLocalStorageKey={scoreLocalStorageKey} totalQuestions={questionDetails.length} />}></Route>
        </Routes>
      </>
    );
  };

  function welcomePageSubmit() {
    navigate('UserDetails');

  }

  function userDetailSubmit() {
    if (quizTakerName.name !== "" && quizTakerName.phoneNumber !== "") {
      console.log(quizTakerName);
      console.log("user detail submit button");

      localStorage.setItem(nameLocalStorageKey, quizTakerName.name);
      navigate('Instructions');
    }
    else {
      alert("please fill the details");
    }

  }

  function showQuestions() {
    navigate('Questions');
  }


  return (
    <>
      {AppRoutes()}
      <div className="App">


      </div>
    </>
  );
}

export default App;
