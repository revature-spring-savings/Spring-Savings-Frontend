import React from "react";
import UserInformation from "../components/user/UserInformation";
import { useLogin } from "../context/LoginProvider";

const Profile = () => {
  const { loginUsername } = useLogin();
  return (
    <>
      <div className="page-container">
        <div className="user-information">
          <UserInformation currentUser={loginUsername} />
        </div>
      </div>
    </>
  );
};

export default Profile;
