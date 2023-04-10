import React from "react";
import './WelcomePage.css';

const WelcomePage = (props) => {
    return (
        <>
          
                <div className="welcomeBox">
                    <p className="welcomeText">Welcome to the Quiz. Press continue button to start the Quiz.</p>
                    <button className="welcomePageButton" onClick={props.welcomePageSubmit}>Continue</button>
                </div>
           
        </>


    );

}

export default WelcomePage;
