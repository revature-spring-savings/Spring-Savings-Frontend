import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState, useEffect } from "react";



export default function CreateTransfer() {
    const transactionsAPI = 'http://localhost:8081/transactions'

  //  const [transactionType, setTransactionType] = useState('');
  //  const [transactionNote, setTransactionNote] = useState('');
    const [acctSrc, setAcctSrc] = useState(1);
    const [acctDest, setAcctDest] = useState(2);
  //  const [userID, setUserID] = useState(1);
    const [amount, setAmount] = useState(0);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    function createNewTransaction() {
        axios.post(transactionsAPI, [{
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
    return (
        <>
  
                Transfer <br/><br/>

                Transfer From<br/>
                <input
                    type="number"
                    value={acctSrc}
                    onChange={(e) => setAcctSrc(e.target.value)} /><br /><br />

                    Transfer To<br/>
                <input
                    type="number"
                    value={acctDest}
                    onChange={(e) => setAcctDest(e.target.value)} /><br /><br />
                    
                Amount<br/>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} /><br /><br />

                Note<br/>
                <div>Transfer from acct {acctSrc} to acct {acctDest}</div>

                <button onClick={createNewTransaction}>Complete Transfer</button>

        </>
    )
}

