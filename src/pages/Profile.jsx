import React from "react";
import UserInformation from "../components/user/UserInformation";
import { useLogin } from "../context/LoginProvider";

const Profile = (props) => {
  const currentUser = props.currentUser;
  const { loginUsername } = useLogin();
  return (
    <>
      <div className="page-container">
        <div className="user-information">
          <UserInformation currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default Profile;
