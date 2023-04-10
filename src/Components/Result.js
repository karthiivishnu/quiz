import React from "react";
import './Result.css'

const Result = ({ scoreLocalStorageKey, totalQuestions }) => {

   let score = localStorage.getItem(scoreLocalStorageKey);
   return (<div className="resultBox"><h3 className="scoreText">Your score is {score} out of {totalQuestions}</h3></div>);

}


export default Result;
