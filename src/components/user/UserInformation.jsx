import React from "react";
import { useState, useEffect} from "react";
import UserCard from "./UserCard";

export default function UserInformation (props) {
    const currUser = props.currentUser;
    console.log(currUser)
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [dob, setDob] = useState('');

    return (
        <>
                <div className="outer-container">
                    <div className="inner-container">
                    <div>
                        <div>
                        <div>
                        <h1 id="t2">Profile & Settings</h1>
                        < UserCard currUser={currUser}/>
                        </div>
                        
                        </div>
                    </div>
                </div>     
            </div>
        </>    
    )
}