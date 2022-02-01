import React from "react";
import { useState, useEffect } from "react";
import "./userCard.scss";
import UserForm from "./UserForm";
import anonpig from "./user-images/pigsavings.png";
import axios from "axios";
import { useLogin } from "../../Context/LoginProvider"

export default function UserCard() {
  const { loginUsername } = useLogin();
  const [editForm, setEditForm] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser);
  
  useEffect(() => {

    //http://localhost:8081/users/id
    axios
      .get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/users/username/${loginUsername}`)
      .then((res) => {
        console.log(res.data);
        setCurrentUser(res.data);
      });
  }, []);

  return (
    <div className="c-container">
      <div className="img-container">
        <img className ="usercard-img" src={anonpig} alt="person-icon" />
        {editForm ? <div className="card-name">{currentUser.firstName} {currentUser.lastName}</div> : ""}
      </div>
      {editForm ? (
        <UserForm currentUser={currentUser} formState = {setEditForm} setCurrentUser = {setCurrentUser} />
      ) : (
        <>
          <div className="c-name">
            <ul>
              <li id="list-name">{`${currentUser.firstName} ${currentUser.lastName}`}</li>
              <li>Username: {currentUser.username}</li>
              <li>Date of Birth: {currentUser.dob}</li>
              <li>Email: {currentUser.email}</li>
              <li>Phone: {currentUser.phoneNumber}</li>
            </ul>
          </div>
          <div>
            <button id="update-button" onClick={() => setEditForm(!editForm)}>
              Update Info
            </button>
          </div>
        </>
      )}
    </div>
  );
}
