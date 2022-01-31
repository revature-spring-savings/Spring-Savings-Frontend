import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
export const ViewAllDepositTransaction = () => {
    const [deposit, setDeposit] = useState([]);

    //hard code until we get team 2's user information
    const accountNum = 2;

    //Deposit for Transaction based on accountID
    useEffect(() => {
        axios.post(`http://localhost:8081/transactions/deposit`, {
            accountID: accountNum
        })
            .then(res => {
                console.log(res.data);
                setDeposit(res.data);
            })
            .catch(err => console.log(err));
    }, [])

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
            {depositTransaction}  
        </>
    )
}