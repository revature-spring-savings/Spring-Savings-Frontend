import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AccountByAcctID } from "./AccountByAcctID";
// import ReactPaginate from "react-paginate";
// import "./accountPagination.scss";

export const AccountByUserID = () => {
  const [account, setAccount] = useState([]);
  const [userID, setUserID] = useState(2);



  //Andy's paginations stuff
  // const [pageNumber, setPageNumber] = useState(0);
  /* const accountsPerPage = 3;
   const pageVisited = pageNumber * accountsPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const pageCount = Math.ceil(account.length / accountsPerPage);*/

  useEffect(() => {

    //setting values from session storage here but not working
    console.log("on dashboard, userID is " + sessionStorage.getItem("userID")+" (hardcoded)");
    //also not working. saves it as 0
    //setUserID(parseInt(sessionStorage.getItem("userID")));

    let userNum = sessionStorage.getItem("userID");
    axios
      .get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/${userNum}/all-accounts`)
      .then((res) => {
        console.log(res.data);
        setAccount(res.data);
      });
  }, []);

  function moreDetails(accountID) {
    ReactDOM.render(
      <AccountByAcctID accountID={accountID} />,
      document.getElementById(accountID)
    );
  }

  // const accountMap = account.slice(pageVisited, pageVisited + accountsPerPage).map(
  //   ({ accountID, accountType, accountBalance }, index) => {
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
      {/* <div> */}
      {/* <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisable"}
            activeClassName={"paginationActive"}
        /> */}
      {/* </div> */}
    </>
  );
};