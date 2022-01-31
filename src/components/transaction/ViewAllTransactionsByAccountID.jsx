import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
export default function ViewAllTransactionsByAccountID(props) {
    const [transactions, setTransactions] = useState([]);
    const [userID, setUserID] = useState(2);
    const [accountID, setAccountID] = useState(props.accountID);

    useEffect(() => {
        axios.get(`http://localhost:8081/transactions/accountID/${accountID}`)
            .then((response) => {
                console.log(response.data);
                setTransactions(response.data);
            })
    }, []);

    return (
        <>
            <table class="transactionsTable">
                <thead>
                    <tr>
                        <th>Transaction #</th>
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
                            <td>${d.amount}</td>
                            <td>{d.transactionDate}</td>
                            <td>{d.transactionType}</td>
                            <td>{d.transactionNote}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}