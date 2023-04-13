import React from "react";
import './PageDownNavigation.css'

const PageDownNavigation = ({questionNumber,navigateToQn,isVisited, setOptionStyle}) => {
   
    return (
        <>
           
                <div className={isVisited ? "navigationCircleForQuestionVisited" :"navigationCircle"} onClick = {()=>{navigateToQn(questionNumber-1); setOptionStyle(null);} }>{questionNumber}</div>
               
                   
               

        </>

    );
}

export default PageDownNavigation;