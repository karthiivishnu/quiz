import React from "react";
import './Confirmation.css'

const Confirmation = ({ submitQuiz }) => {
    return (
        <>
            <div className="confirmationBox">
                <div>The Quiz is completed. Please click on Submit to view the results.</div>
                <button className="confirmationSubmit" onClick={submitQuiz} >Submit</button>
            </div>
        </>
    );

}

export default Confirmation;