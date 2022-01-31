import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ViewAllWithdrawTransaction = () => {
    const [withdraw, setWithdraw] = useState([]);

    //hard code until we get team 2's user information
    const accountNum = 5;

    //Withdraw for Transaction based on accountID
    useEffect(() => {
        axios.post(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions/withdraw`, {
            accountID: accountNum
        })
        .then(res => {
            console.log(res.data);
            setWithdraw(res.data);
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

    return (
        <>
            {withdrawTransaction}
        </>
    )
}