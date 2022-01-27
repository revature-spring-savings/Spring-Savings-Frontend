import React from "react";
import AccountNavbar from "../components/navbar/AccountNavBar";
import UserInformation from "../components/user/UserInformation";
const Profile = (props) => {
  const currentUser = props.currentUser;
  return (
    <>
        <AccountNavbar />
      <div className="page-container">
        <div className="user-information">
          <UserInformation currentUser = {currentUser} />
        </div>
      </div>
    </>
  );
};

export default Profile;
