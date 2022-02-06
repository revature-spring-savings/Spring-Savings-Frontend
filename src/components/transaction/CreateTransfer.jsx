import axios from "axios";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { AccountByAcctID } from '../account/AccountByAcctID';
import CreateSingleTransaction from '../transaction/CreateSingleTransaction';
import TransferModal from "../modal/TransferModal";
import { useLogin } from "../../Context/LoginProvider";
import React, { Component }  from 'react';
export default function CreateTransfer(props) {
    const { loginUserID } = useLogin;
    const [acctSrc, setAcctSrc] = useState(props.accountID);
    const [acctBalance, setAcctBalance] = useState(props.accountBalance);
    const [acctDest, setAcctDest] = useState(0);
    const [amount, setAmount] = useState(0);

    const [renderModal, setRenderModal] = useState(false);
    // const [userID, setUserID] = sessionStorage.getItem("userID");

    const [account, setAccount] = useState([]);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

   // function createNewTransaction() {
  
    // get account by accountID
    useEffect(()=>{
        axios.get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/${props.accountID}`).then(res =>{
            // console.log(res);
            setAccount(res.data);
        });
    },[]);

    function createNewTransaction() {

        let isValid = true;
        let alertMessage = "";
        
        

        if(amount <= 0){
            isValid = false;
            alertMessage = alertMessage + "Please enter a valid amount\n";
        }

        if(acctDest <= 0){
            isValid = false;
            alertMessage = alertMessage + "That is not a valid account number\n";
        }

        if(isValid){
        axios.post('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions', [{
           // axios.post('http://localhost:9090/transactions', [{
            accountID: acctSrc,
            userID: loginUserID,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'WITHDRAW'
        },
        {
            accountID: acctDest,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'DEPOSIT'
        }])
            .then((response) => {
                // console.log(response.data);
                updateBalance();
            })
            .catch(function (error) {
                 alert(error.response.data.message);
            })
        }else{
            alert(alertMessage);
        }
    }

    function updateBalance(){
            setRenderModal(!renderModal);
            setAcctBalance(acctBalance - amount); 
            let divid = `${acctSrc}b`;
            document.getElementById(divid).innerHTML = `Balance: $${acctBalance - amount}`;  
    }

    function moreDetails(accountID) {
        ReactDOM.render(<AccountByAcctID accountID={accountID} />, document.getElementById(accountID));
    }

    function withDep(accountID, acctBalance) {
        ReactDOM.render(<CreateSingleTransaction accountID={accountID} accountBalance={acctBalance} />, document.getElementById(accountID));
    }

    return (
        <>
            <div className="footer-header">
                <h2>Account {acctSrc}</h2>
                <h3>Balance: ${acctBalance}</h3>
            </div>

            <button className="gray-btn" onClick={(e) => moreDetails(acctSrc)}>Go back</button>
            <button className="gray-btn" onClick={(e) => withDep(props.accountID, props.accountBalance)}>Withdraw/Deposit</button>
            <h3>Transfer</h3>
            Transfer From:<br />
            Acct #{props.accountID}<br /><br />

            Transfer To:<br />
            <input type="number" min="0.01" value={acctDest} onChange={(e) => setAcctDest(e.target.value)} /><br /><br />

            Amount:<br />
            <input type="number" min="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />
            {renderModal ? <TransferModal close={setRenderModal} /> : ""}
            Note:<br />
            <p>Transfer from acct {acctSrc} to acct {acctDest}</p><br />

            <button className="complete-btn" onClick={() => { createNewTransaction() }}>Complete Transfer</button>
        </>
    )
}

