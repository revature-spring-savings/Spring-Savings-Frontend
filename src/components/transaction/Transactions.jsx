import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TransactionsDetail = () => {
    const [withdraw, setWithdraw] = useState([]);
    const [deposit, setDeposit] = useState([]);
    const [transactionBtn, setTransactionBtn] = useState(false);

    const api = "http://localhost:8081/transactions"

    //hard code until we get team 2's user information
    const accountNum = 1;

    //handler for switching between withdraw and deposit
    const handleTransactionBtn = () => setTransactionBtn(!transactionBtn);

    //Withdraw for Transaction based on accountID
    useEffect(() => {
        axios.post(`${api}/withdraw`, {
            accountID: accountNum
        })
            .then(res => {
                console.log(res.data);
                setWithdraw(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    //Deposit for Transaction based on accountID
    useEffect(() => {
        axios.post(`${api}/deposit`, {
            accountID: accountNum
        })
            .then(res => {
                console.log(res.data);
                setDeposit(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const withdrawTransaction = withdraw.map(withdraws => {
        if (withdraws.transactionType === "WITHDRAW" || withdraws.transactionType === "withdraw") {
            return (
                <>
                    <tr>
                        <td>{withdraws.transactionID}</td>
                        <td>{withdraws.userID}</td>
                        <td>{withdraws.accountID}</td>
                        <td>${withdraws.amount}</td>
                        <td>{withdraws.transactionDate}</td>
                        <td>{withdraws.transactionType}</td>
                        <td>{withdraws.transactionNote}</td>
                    </tr>
                </>
            )
        }
    })

    const depositTransaction = deposit.map(deposits => {
        if (deposits.transactionType === "DEPOSIT" || deposits.transactionType === "deposit") {
            return (
                <>
                    <tr>
                        <td>{deposits.transactionID}</td>
                        <td>{deposits.userID}</td>
                        <td>{deposits.accountID}</td>
                        <td>${deposits.amount}</td>
                        <td>{deposits.transactionDate}</td>
                        <td>{deposits.transactionType}</td>
                        <td>{deposits.transactionNote}</td>
                    </tr>

                </>
            )
        }
    })

    return (
        <>
            <h1>{transactionBtn ? "Withdraw" : "Deposit"}</h1>
            <button onClick={handleTransactionBtn}>{transactionBtn ? "Switch to Deposit" : "Switch to Withdraw"}</button>
            <table>
                <thead>
                    <tr>
                        <th>Transaction #</th>
                        <th>User</th>
                        <th>Account #</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Note</th>
                    </tr>
                </thead> 
                {transactionBtn ? withdrawTransaction : depositTransaction}
            </table>
        </>
    )
}





