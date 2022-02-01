import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useLogin } from "../../context/LoginProvider";
import { AccountByAcctID } from "./AccountByAcctID";

// this page displays all of the user's accounts on the dashboard
export const AccountByUserID = () => {
  const {loginUserID} = useLogin();
  const [account, setAccount] = useState([]);

// get accounts by userID
  useEffect(() => {
    axios
      .get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/${loginUserID}/all-accounts`)
      .then((res) => {
        setAccount(res.data);
      });
  }, []);


  // onClick => view more details on that account
  function moreDetails(accountID) {
    ReactDOM.render(
      <AccountByAcctID accountID={accountID} />,
      document.getElementById(accountID)
    );
  }

  // displays all of the returned accounts
  const accountMap = account.map(({ accountID, accountType, accountBalance }, index) => {
    return (
      <div key={index} className="acctCard">
        <div className="acctCardHeader">
          <h3>Account: {accountID}</h3>
        </div>
        <div id="accountDeets">
          <p>Type: {accountType}</p>
          <br />
          <p>Balance: ${accountBalance}</p>
        </div>

        <div className="acctCardFooter">
          <center>
            <div id={accountID}>
              <button className="more-details-click" onClick={(e) => moreDetails(accountID)}>View More Details</button>

            </div>
          </center>
        </div>
      </div>
    );
  }
  );


  return (
    <>
      {accountMap}
    </>
  );
};