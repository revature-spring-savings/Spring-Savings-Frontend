import React from "react";
import UserInformation from "../components/user/UserInformation";
import { useLogin } from "../Context/LoginProvider";

const Profile = () => {
  const { loginUsername } = useLogin();
  return (
    <>
      <div className="page-container">
          <UserInformation currentUser={loginUsername} />
      </div>
    </>
  );
};

export default Profile;
