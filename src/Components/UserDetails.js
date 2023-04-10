import React from "react";
import './UserDetails.css'

const UserDetails = (props) => {
    console.log(props);
    return (
        <div className="userDetailBox">
            <h4 className="title">Please enter your details</h4>
            <div className="nameBox">
                <label className="nameLabel">Name</label>
                <input className = "nameTextBox" maxLength="18" name="name" value={props.quizTakerName.name} onChange={props.setName}></input>
            </div>
            <div className="phoneNoBox">
            <label className="phoneNoLabel">Phone</label>
            <input className = "phoneNoTextBox" maxLength="10" name="phoneNumber" value={props.quizTakerName.phoneNumber} onChange={props.setName}></input>
           </div>
            <button className = "userDetailsContinueButton" onClick={props.userDetailSubmit}>Continue</button>
        </div>
    );
};

export default UserDetails;