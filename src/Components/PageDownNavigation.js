import React from "react";
import './PageDownNavigation.css'

const PageDownNavigation = ({questionNumber,navigateToQn,isVisited}) => {
    return (
        <>
           
                <div className={isVisited ? "navigationCircleForQuestionVisited" :"navigationCircle"} onClick = {()=>navigateToQn(questionNumber-1) }>{questionNumber}</div>
               
                   
               

        </>

    );
}

export default PageDownNavigation;