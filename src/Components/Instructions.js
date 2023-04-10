import React from "react";
import './Instructions.css'

const Instructions = (props) => {

    return (
        <div className="instructionBox">
        <h3 className="instructionTitle">
            Instructions
        </h3>
        <h4 className="welcomeNote">
            Welcome! {localStorage.getItem(props.nameLocalStorageKey)}
        </h4>
       <p className="instructionsBox">
        1. The quiz will have 5  questions.<br/>
        2. Time alloted will be 5 minutes.<br/>
        3. Press continue to start the quiz.<br/>

       </p>
        <button className =  "instructionContinueButton" onClick={props.showQuestions} >Continue</button>
        </div>
    );
}

export default Instructions ;