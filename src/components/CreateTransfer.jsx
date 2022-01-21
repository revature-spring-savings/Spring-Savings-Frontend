import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState, useEffect } from "react";



export default function CreateTransfer() {
    const transactionsAPI = 'http://localhost:8081/transactions'

    const [transactionType, setTransactionType] = useState('');
    const [transactionNote, setTransactionNote] = useState('');
    const [acctSrc, setAcctSrc] = useState(1);
    const [acctDest, setAcctDest] = useState(2);
    const [userID, setUserID] = useState(1);

    const [amount, setAmount] = useState(0);
    const [transactionBtn, setTransactionBtn] = useState(false);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;
  
    //get userID and accountID from useContext
        function changeTheValue(e){
            setTransactionType(e);
            setTransactionBtn(!transactionBtn);
        }


    function createNewTransaction() {
        axios.post(transactionsAPI, [{
            accountID: acctSrc,
            userID: this.userID,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'WITHDRAW'
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
            <form>
                Transfer <br />


                <br /><br />
                Amount<br/>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} /><br /><br />

                Note<br/>
                <input
                    type="text"
                    value={transactionNote}
                    onChange={(e) => setTransactionNote(e.target.value)}
                    placeholder="Note" /><br /><br />

                <button onClick={createNewTransaction}>{transactionBtn ? "WITHDRAW" : "DEPOSIT"}</button>

            </form>
        </>
    )
}

