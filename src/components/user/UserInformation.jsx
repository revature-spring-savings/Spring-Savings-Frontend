import React from "react";
import UserCard from "./UserCard";
import "./UserInformation.scss";

export default function UserInformation(props) {
    const currUser = props.currentUser;
    console.log(currUser)
    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <div>
                        <div>
                            <div>
                                {/* <h1 id="t2">Profile</h1> */}
                                < UserCard currUser={currUser} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}