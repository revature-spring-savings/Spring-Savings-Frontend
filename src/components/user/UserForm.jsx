import React from "react";
import { useState } from "react";
import axios from "axios";
import "./userForm.scss"
export default function UserForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [dob, setDob] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastname(e.target.value);
    }

    const handleEmail= (e) => {
        setEmail(e.target.value);
    }

    const handleUsername= (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handlePhoneNum = (e) => {
        setPhoneNum(e.target.value);
    }

    const handleDob = (e) => {
        setDob(e.target.value);
    }

    const newUserInfo = {
        userID: 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        pass: password,
        phoneNumber: phoneNum,
        dob: dob
    }

    // update user information
    
    const updateUserInformation = () => {
        axios.put(`http://localhost:8081/users/update/1`, {
            userID: 1,
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            pass: password,
            phoneNumber: phoneNum,
            dob: dob
        }).then(res => {
            console.log(res.data)
        }).catch(err =>
            console.log(`Error occurred while updating ${err}`)
            )
    }
    
    return (
        <div>
            <form className="update-info-form">
                <label>
                    First Name:
                    <input className="update-form-input" value={firstName} onChange={handleFirstName} type="text" name="name" />
                </label>
                <label>
                    Last Name:
                    <input className="update-form-input" value={lastName} onChange={handleLastName} type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input className="update-form-input" value={email} onChange={handleEmail} type="text" name="name" />
                </label>
                <label>
                    Username:
                    <input className="update-form-input" value={username} onChange={handleUsername} type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input className="update-form-input" value={password} onChange={handlePassword} type="text" name="name" />
                </label>
                <label>
                    Phone Number:
                    <input className="update-form-input" value={phoneNum} onChange={handlePhoneNum} type="text" name="name" />
                </label>
                <label>
                    Date of Birth:
                    <input className="update-form-input" value={dob} onChange={handleDob} type="text" name="name" />
                </label>
            </form>
            <button className="update-form-button" onClick={updateUserInformation}>Submit</button>
            <button className="update-form-button">Cancel</button>
        </div>

    )
}