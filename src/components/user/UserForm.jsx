import React from "react";
import { useState } from "react";
import axios from "axios";
import "./userForm.scss"
import UpdateAccountModal from "../modal/UpdateAccountModal";
export default function UserForm(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [dob, setDob] = useState('');
    const [showPassword, setShowPassword] = useState("false");
    const [renderModal, setRenderModal] = useState(false);

    const editForm = props.formState;
    const currentUser = props.currentUser;


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

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
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
        <div className="form-container">
            <form className="update-info-form">
                <label>
                    First Name:
                    <input className="update-form-input" placeholder={currentUser.first_name} value={firstName} onChange={handleFirstName} type="text" name="name" />
                </label>
                <label>
                    Last Name:
                    <input className="update-form-input" placeholder={currentUser.last_name} value={lastName} onChange={handleLastName} type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input className="update-form-input" placeholder={currentUser.email} value={email} onChange={handleEmail} type="text" name="name" />
                </label>
                <label>
                    Username:
                    <input className="update-form-input" placeholder={currentUser.username} value={username} onChange={handleUsername} type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input className="update-form-input" placeholder={currentUser.password} value={password} onChange={handlePassword} type={showPassword ? "text" : "password"} name="name" />
                    <button onClick={handleClickShowPassword}>View</button>
                </label>
                <label>
                    Phone Number:
                    <input className="update-form-input" placeholder={currentUser.phone_number} value={phoneNum} onChange={handlePhoneNum} type="text" name="name" />
                </label>
                <label>
                    Date of Birth:
                    <input className="update-form-input" placeholder={currentUser.dob} value={dob} onChange={handleDob} type="text" name="name" />
                </label>
            </form>
            <button className="update-form-button" onClick={() => {updateUserInformation(); setRenderModal(!renderModal)}}>Submit</button>
            <button className="update-form-button" onClick={() => editForm(false)}>Cancel</button>
            {renderModal ? <UpdateAccountModal close={setRenderModal}/> : ""}
        </div>

    )
}