import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewAllWithdrawTransactions() {
    //instead of showing description, can show green or red according to whether it is deposit or withdraw
    //list by most recent date

    //i would really like to set this up as a modularization component
    //pass in any transactions JSON as props and format it as table
    const transactionsAPI = 'http://localhost:8081/transactions/withdraw';
    const [transactions, setTransactions] = useState([]);
    const axios = require('axios');
    //  const [accountID, setTransactions] = useState([]);
    const num = 1;
    useEffect(() => {
        axios.post(transactionsAPI, {
            accountID: num
        })
            .then((response) => {
                console.log(response);
                setTransactions(response.data);
                console.log(transactions);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const TransactionTable = () => {
        return (
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
                {transactions.map(d => {
                    return (
                        <tr>
                            <td>{d.transactionID}</td>
                            <td>{d.userID}</td>
                            <td>{d.accountID}</td>
                            <td>${d.amount}</td>
                            <td>{d.transactionDate}</td>
                            <td>{d.transactionType}</td>
                            <td>{d.transactionNote}</td>
                        </tr>
                    )
                })}
            </table>
        )
    }

    return (
        <>
            <TransactionTable />
        </>
    )







}