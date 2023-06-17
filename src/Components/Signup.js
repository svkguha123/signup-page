import React, { useState } from "react";


let Signup = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [error, setError] = useState(false);
    let [successfull, setSuccessfull] = useState(false);

    function signUpping(event){
        event.preventDefault();

        if (name.trim() === "") {
            alert("Please Enter your name")
            return
        }

        if (!name.trim().includes(" ")) {
            alert("please enter your full name")
            return
        }

        if(email !== "" && password === confirmPassword){
            setSuccessfull(true);
            setError(false);
        }
        else{
            setError(true);
        }

    }

    return (
        <div className="signup-container">
            <h1 className="h1">Signup</h1>

            <input
                type="text"
                placeholder="Full Name"
                onChange={(event)=> setName(event.target.value)}
            />
            
            <hr></hr>

            <input
                type="email"
                placeholder="Email"
                onChange={(event)=> setEmail(event.target.value)}
            />

            <hr></hr>

            <input
                type="password"
                placeholder="Password"
                onChange={(event)=> setPassword(event.target.value)}
            />

            <hr></hr>

            <input
                type="password"
                placeholder="Confirm Password"
                onChange={(event)=> setConfirmPassword(event.target.value)}
            />

            <hr></hr>

            {
                error &&
                <p className="error">Error : All the fields are mandatory.</p>
            }

            {
                successfull &&
                <p className="successfull">Successfully Signed Up!</p>
            }

            <button className="signup-btn" onClick={signUpping}>Signup</button>
        </div>
    )
}

export default Signup;