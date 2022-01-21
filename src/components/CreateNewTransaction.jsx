import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState, useEffect } from "react";



export default function CreateNewTransaction(props) {
    const transactionsAPI = 'http://localhost:8081/transactions'

    const [transactionType, setTransactionType] = useState('');
    const [transactionNote, setTransactionNote] = useState('');
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
        console.log(props.amount);
        axios.post(transactionsAPI, [{
            accountID: 3,
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
    return (
        <>
            <form>
                Transaction <br />
                <input name="type" type="radio" id="withdraw" value="WITHDRAW" onClick={(e) => changeTheValue(e.target.value)} />
                <label for="withdraw">Withdrawal</label>

                <input name="type" type="radio" id="deposit" value="DEPOSIT" onClick={(e) => changeTheValue(e.target.value)} />
                <label for="deposit">Deposit</label>


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

