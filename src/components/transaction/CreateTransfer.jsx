import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState } from "react";
import ReactDOM from 'react-dom';

import {AccountByAcctID} from '../account/AccountByAcctID';
import CreateSingleTransaction from '../transaction/CreateSingleTransaction';

export default function CreateTransfer(props) {

    const [acctSrc, setAcctSrc] = useState(props.accountID);
    const [acctDest, setAcctDest] = useState(2);
    const [amount, setAmount] = useState(0);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    function createNewTransaction() {
        
        axios.post('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions', [{
            accountID: acctSrc,
            userID: 1,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'WITHDRAW'
        },
        {
            accountID: acctDest,
            userID: 1,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'DEPOSIT'
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

    function withDep(accountID){
        ReactDOM.render(<CreateSingleTransaction accountID={accountID}/>, document.getElementById(accountID));
    }

    return (
        <>
        <button className="gray-btn" onClick={(e) => moreDetails(props.accountID)}>Go back</button>
        <button className="gray-btn" onClick={(e)=>withDep(props.accountID)}>Withdraw/Deposit</button><br/><br/>
            Transfer <br /><br />
            Transfer From<br />
           Acct #{props.accountID}<br /><br />

            Transfer To<br />
            <input type="number" value={acctDest} onChange={(e) => setAcctDest(e.target.value)} /><br /><br />

            Amount<br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />

            Note<br />
            <div>Transfer from acct {acctSrc} to acct {acctDest}</div>

            <button className="complete-btn" onClick={createNewTransaction}>Complete Transfer</button>
        </>
    )
}

