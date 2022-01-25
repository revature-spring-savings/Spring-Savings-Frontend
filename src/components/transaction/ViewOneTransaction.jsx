import axios from "axios";
import { useEffect, useState } from "react";

export default function ViewOneTransaction() {
    const [d, setTransaction] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8081/transactions/id/" + 1)
            .then((response) => {
                console.log(response.data);
                setTransaction(response.data);
            })
    }, []);

    return (
        <>
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
                <tr>
                    <td>{d.transactionID}</td>
                    <td>{d.userID}</td>
                    <td>{d.accountID}</td>
                    <td>${d.amount}</td>
                    <td>{d.transactionDate}</td>
                    <td>{d.transactionType}</td>
                    <td>{d.transactionNote}</td>
                </tr>
            </table>
        </>
    )







}