import axios from "axios";
import { useState } from "react";
import "./CreateAccount.scss"
import Modal from "../modal/Modal";
import { useLogin } from "../../Context/LoginProvider";
import AccountNavbar from "../navbar/AccountNavBar";
import { useAuth0 } from '@auth0/auth0-react';
import React, { Component }  from 'react';

export default function CreateAccount() {
    const [accountType, setAccountType] = useState('');
    const [amount, setAmount] = useState(0);
    const [accountBtn, setAccountBtn] = useState(false);
    const [renderModal, setRenderModal] = useState(false);
    const [currType, setCurrType] = useState("");
    const {loginUserID} = useLogin();

    let isValid = false;

    // validation
    const submit = (e) => {
        e.preventDefault()
        document.getElementById("AJvalidation").innerHTML = "";
        if (accountType === "CHECKING") {

            if (amount < 100) {
                setCurrType("CHECKING");
                setRenderModal(true);

                // const popup = document.getElementById("AJvalidation");
                // console.log(<ValidationPopUp />);
                // document.getElementById("AJvalidation").append(<ValidationPopUp />); 
                // document.getElementById("AJvalidation").append("Checking requires $100 minimum to open");
                //console.log("Checking requires $100 minimum to open");

            } else {
                isValid = true;
            }

        } else if (accountType === "SAVINGS") {
            if (amount < 50) {
                setCurrType("SAVINGS");
                setRenderModal(true);
                //  document.getElementById("AJvalidation").append("Saving requires $50 minimum to open");
                //console.log("Saving requires $50 minimum to open");

            } else {
                isValid = true;
            }
        }
        if (isValid) {           
           axios.post(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/createAccount/${loginUserID}`, {
            //axios.post(`http://localhost:9090/accounts/createAccount/${loginUserID}`, {
                userID: loginUserID,
                accountBalance: amount,
                accountType: accountType
            })
                .then((response) => {

                    //console.log(response.data);

                    setCurrType("SUCCESS"); // if account creation successful, render sucess page
                    setRenderModal(true);
                })
                .catch(function (error) {
                    //console.log(error);
                })
        }

    }


    //get userID and accountID from useContext
    function changeTheValue(e) {
        setAccountType(e);
        setAccountBtn(!accountBtn);
    }


    return (
        <>
            <AccountNavbar />
            <div className="page-container">
                <form className="create-account-form">
                    <div className="create-account-header">
                    <h2>Create a New Banking Account </h2>
                    <h4>(because a bank is better than a cookie jar)</h4>
                    </div>
                    <input name="type" type="radio" id="checking" value="CHECKING" onClick={(e) => changeTheValue(e.target.value)} />
                    <label htmlFor="checking" defaultChecked>Checking</label>

                    <input className="savings-button" name="type" type="radio" id="savings" value="SAVINGS" onClick={(e) => changeTheValue(e.target.value)} />
                    <label htmlFor="savings">Savings</label>
                    <br /><br />
                    <p>Initial Balance</p>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />
                    <div className="create-account-footer">
                    <div id="AJvalidation"></div>
                    <button className="create-button" onClick={submit}>Create a new {accountType.toLowerCase()} account</button>
                    <br />
                    </div>
                    {/* <button className="viewall-button" onClick={ViewAllAccounts}>View All Accounts</button> */}


                    {/* <button onClick={createNewAccount}>Create a new {accountType.toLowerCase()} Account</button> */}
                    {/* <button onClick={createNewAccount}>{accountBtn ? "Create a Savings Accounts" : "Create a Checking Account"}</button> */}

                </form>
            </div>
                {renderModal ? <Modal modalState={setRenderModal} accountType={currType} setAmount={setAmount} /> : ""}
        </>
      
    )
}