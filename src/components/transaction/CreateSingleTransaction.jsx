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
    const [amount, setAmount] = useState(0);
    const [transactionBtn, setTransactionBtn] = useState(false);
    const [renderModal, setRenderModal] = useState(false);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    //get userID and accountID from useContext
    function changeTheValue(e) {
        setTransactionType(e);
        setTransactionBtn(!transactionBtn);
    }

    function createNewTransaction() {
        console.log(props.amount);
        axios.post("http://localhost:8081/transactions", [{
            accountID: accountID,
            userID: 1,
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

    function moreDetails(accountID){
        ReactDOM.render(<AccountByAcctID accountID={accountID} />, document.getElementById(accountID));
    }

    function transfer(accountID){
        ReactDOM.render(<CreateTransfer accountID={accountID}/>, document.getElementById(accountID));
    }

    return (
        <>
         <button  className="gray-btn" onClick={(e) => moreDetails(props.accountID)}>Go back</button>
         <button  className="gray-btn"  onClick={(e)=>transfer(props.accountID)}>Transfer</button>
        <br/><br/>
            {/* <form> */}
                Transaction <br />
                <input name="type" type="radio" id="withdraw" value="WITHDRAW" onClick={(e) => changeTheValue(e.target.value)} />
                <label for="withdraw">Withdrawal</label>

                <input name="type" type="radio" id="deposit" value="DEPOSIT" onClick={(e) => changeTheValue(e.target.value)} />
                <label for="deposit">Deposit</label>

                <br /><br />
                Amount<br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />

                Note<br />
                <input type="text" value={transactionNote} onChange={(e) => setTransactionNote(e.target.value)} placeholder="Note" /><br /><br />

                <button  className="complete-btn" onClick={createNewTransaction}>{transactionBtn ? "WITHDRAW" : "DEPOSIT"}</button>

            {/* </form> */}
            <TransactionModal transactionType={transactionType} />
        </>
    )
}

