import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState, useEffect } from "react";

import { AccountByAcctID } from '../account/AccountByAcctID';
import CreateTransfer from '../transaction/CreateTransfer';
import TransactionModal from "../modal/TransactionModal";
import { useLogin } from "../../Context/LoginProvider";

import ReactDOM from 'react-dom';

export default function CreateNewTransaction(props) {
  //  const { loginUserID } = useLogin;
    const [transactionType, setTransactionType] = useState('');
    const [transactionNote, setTransactionNote] = useState('');
    const [accountID, setAccountID] = useState(props.accountID);
    const [acctBalance, setAcctBalance] = useState(props.accountBalance);
    const [amount, setAmount] = useState(0);
    const [renderModal, setRenderModal] = useState(false);
    const [account, setAccount] = useState([]);


    // get account by accountID
    useEffect(()=>{
        axios.get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/${props.accountID}`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    },[]);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    //get userID and accountID from useContext
    function changeTheValue(e) {
        setTransactionType(e);
    }

    function createNewTransaction() {
        let isValid = true;
        let alertMessage = "";
        
        if(transactionType === ""){
            isValid = false;
            alertMessage = alertMessage + "Please select a transaction type\n";
        }

        if(amount <= 0){
            isValid = false;
            alertMessage = alertMessage + "Please enter a valid amount\n";
        }

        if (transactionType == 'WITHDRAW' ) {
            if( amount > account.accountBalance){
                alertMessage = alertMessage + "Withdrawal cannot exceed balance!";
                isValid = false;
            }else{
                console.log("else is reached");
                isValid = true;
            }
        }
      

        if(isValid){
            console.log("is valid");
       //     axios.post("http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions", [{
        axios.post("http://localhost:9090/transactions", [{
                accountID: props.accountID,
                userID: account.userID,
                amount: amount,
                transactionDate: today,
                transactionNote: transactionNote,
                transactionType: transactionType
            }])
                .then((response) => {
                    console.log(response.data);
                    console.log("")
                    updateBalance();
                    setRenderModal(true); 

                })
                .catch(function (error) {
                    console.log(error.response.data.message);
                })
        }else{
            alert(alertMessage);
        }

    }

    function updateBalance(){
        if(transactionType=="WITHDRAW"){
            setAcctBalance(acctBalance - amount);
            let divid = `${accountID}b`;
            document.getElementById(divid).innerHTML = `Balance: $${acctBalance - amount}`;
        } else{
            setAcctBalance(parseFloat(acctBalance) + parseFloat(amount));
            let divid = `${accountID}b`;
            document.getElementById(divid).innerHTML = `Balance: $${parseFloat(acctBalance) + parseFloat(amount)}`;
        }

    }

    function moreDetails(accountID) {
        ReactDOM.render(<AccountByAcctID accountID={accountID} />, document.getElementById(accountID));
    }

    function transfer(accountID, accountBalance) {
        ReactDOM.render(<CreateTransfer accountID={accountID} accountBalance={accountBalance} />, document.getElementById(accountID));
    }

    return (
        <>
            <div className="footer-header">
                <h2>Account {accountID}</h2>
                <h3>Balance: ${acctBalance}</h3>
            </div>
            <button className="gray-btn" onClick={(e) => moreDetails(props.accountID)}>Go back</button>
            <button className="gray-btn" onClick={(e) => transfer(props.accountID, props.accountBalance)}>Transfer</button>

            {/* <form> */}
            <h3>Transaction </h3>

            <input name="type" type="radio" id="withdraw" value="WITHDRAW" onClick={(e) => changeTheValue(e.target.value)} />
            <label htmlFor="withdraw">Withdrawal</label><br />

            <input name="type" type="radio" id="deposit" value="DEPOSIT" onClick={(e) => changeTheValue(e.target.value)} />
            <label htmlFor="deposit">Deposit</label>

            {renderModal ? <TransactionModal setRenderModal={setRenderModal} transactionType={transactionType} /> : ""}

            <br /><br />
            Amount:<br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />

            Note:<br />
            <input type="text" value={transactionNote} onChange={(e) => setTransactionNote(e.target.value)} placeholder="Note" /><br /><br />

            <button className="complete-btn" onClick={() => { createNewTransaction()}}>Finalize {transactionType}</button>
            {/* </form> */}
        </>
    )
}

