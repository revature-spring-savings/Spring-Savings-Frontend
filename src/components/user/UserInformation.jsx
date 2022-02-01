import React from "react";
import { useLogin } from "../../Context/LoginProvider";
import UserCard from "./UserCard";
import "./UserInformation.scss";

export default function UserInformation(props) {
    const currUser = props.currentUser;
    console.log(currUser)
    const { loginUsername } = useLogin();
    console.log(loginUsername)
    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    {/* <h1 id="t2">Profile</h1> */}
                    < UserCard currUser={loginUsername} />
                </div>
            </div>
        </>
    )
}