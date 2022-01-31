import React from "react";
import { useState } from "react";
import "./userCard.scss";
import icon from "./user-images/icon.png";
import UserForm from "./UserForm";
import { filterProps } from "framer-motion";
import anonpig from "./user-images/anonymous-pig.png";
import { useAuth0 } from '@auth0/auth0-react';
export default function UserCard(props) {
  const currentUser = props.currUser;

  const [editForm, setEditForm] = useState(false);

  return (
    <div className="c-container">
      <div className="img-container">
        <img className ="usercard-img" src={anonpig} alt="person-icon" />
        {editForm ? <div className="card-name">{currentUser.first_name} {currentUser.last_name}</div> : ""}
      </div>
      {editForm ? (
        <UserForm currentUser={currentUser} formState = {setEditForm} />
      ) : (
        <>
          <div className="c-name">
            <ul>
              <li id="list-name">{`${currentUser.first_name} ${currentUser.last_name}`}</li>
              <li>Username: {currentUser.username}</li>
              <li>Date of Birth: {currentUser.dob}</li>
              <li>Email: {currentUser.email}</li>
              <li>Phone: {currentUser.phone_number}</li>
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
