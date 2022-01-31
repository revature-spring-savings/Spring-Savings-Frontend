import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState } from "react";

import {AccountByAcctID} from '../account/AccountByAcctID';
import CreateTransfer from '../transaction/CreateTransfer';
import TransactionModal from "../modal/TransactionModal";

import ReactDOM from 'react-dom';

export default function CreateNewTransaction(props) {
    const [transactionType, setTransactionType] = useState('');
    const [transactionNote, setTransactionNote] = useState('');
    const [accountID, setAccountID] = useState(props.accountID);
    const [acctBalance, setAcctBalance] = useState(props.accountBalance);
    const [amount, setAmount] = useState(0);
    const [transactionBtn, setTransactionBtn] = useState(false);
    const [renderModal, setRenderModal] = useState(false);
    const [userID, setUserID] = sessionStorage.getItem("userID");

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    //get userID and accountID from useContext
    function changeTheValue(e) {
        setTransactionType(e);
    }

    function createNewTransaction() {
        if(transactionType === 'WITHDRAW' && amount > acctBalance){
            //modal popup saying you can't exceed balance
            <TransactionModal setRenderModal={setRenderModal} transactionType={"WITHDRAW-OVERDRAFT"} /> 
            console.log("cannot perform transaction because withdrawal cannot exceed balance");
        } else{
        axios.post("http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions", [{
            accountID: accountID,
            userID: userID,
            amount: amount,
            transactionDate: today,
            transactionNote: transactionNote,
            transactionType: transactionType
        }])
        .then((response) => {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

    function moreDetails(accountID){
        ReactDOM.render(<AccountByAcctID accountID={accountID} />, document.getElementById(accountID));
    }

    function transfer(accountID, accountBalance){
        ReactDOM.render(<CreateTransfer accountID={accountID} accountBalance={accountBalance}  />, document.getElementById(accountID));
    }

    return (
        <>
            <div className="footer-header">
                    <h2>Account {accountID}</h2>
                    <h3>Balance: ${acctBalance}</h3>
                </div>
         <button  className="gray-btn" onClick={(e) => moreDetails(props.accountID)}>Go back</button>
         <button  className="gray-btn"  onClick={(e)=>transfer(props.accountID, props.accountBalance)}>Transfer</button>

            {/* <form> */}
                <h3>Transaction </h3>
                <input name="type" type="radio" id="withdraw" value="WITHDRAW" onClick={(e) => changeTheValue(e.target.value)} />
                <label for="withdraw">Withdrawal</label>

                <input name="type" type="radio" id="deposit" value="DEPOSIT" onClick={(e) => changeTheValue(e.target.value)} />
                <label for="deposit">Deposit</label>
            {renderModal ? <TransactionModal setRenderModal={setRenderModal} transactionType={transactionType} /> : ""  }

                <br /><br />
                Amount:<br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />

                Note:<br />
                <input type="text" value={transactionNote} onChange={(e) => setTransactionNote(e.target.value)} placeholder="Note" /><br /><br />

                <button  className="complete-btn" onClick={() => {createNewTransaction(); setRenderModal(true);}}>Finalize {transactionType}</button>
                {/* <button  className="complete-btn" onClick={createNewTransaction}>Finalize {transactionType}</button> */}

            {/* </form> */}
        </>
    )
}

