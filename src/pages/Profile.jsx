import React from "react";
import AccountNavbar from "../components/navbar/AccountNavBar";
import UserInformation from "../components/user/UserInformation";
const Profile = (props) => {
  const currentUser = props.currentUser;
  return (
    <>
      <div className="page-container">
        <AccountNavbar />
        <div className="user-information">
          <UserInformation currentUser = {currentUser} />
        </div>
      </div>
    </>
  );
};

export default Profile;
