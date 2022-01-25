import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewAllTransactionsByUserID() {
    const [transactions, setTransactions] = useState([]);
    const [userID, setUserID] = useState(2);

    useEffect(() => {
        axios.get(`http://localhost:8081/transactions/userID/${userID}`)
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
                        <th>Account #</th>
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
                            <td>{d.accountID}</td>
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