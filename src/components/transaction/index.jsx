import React, { useState } from 'react';
import { ViewAllWithdrawTransaction } from './ViewAllWithdrawTransaction';
import { ViewAllDepositTransaction } from './ViewAllDepositTransaction';
import { useAuth0 } from '@auth0/auth0-react';
export const TransactionsDetail = () => {
    const [transactionBtn, setTransactionBtn] = useState(false);

    //handler for switching between withdraw and deposit
    const handleTransactionBtn = () => setTransactionBtn(!transactionBtn);

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
                <tbody>
                    {transactionBtn ? <ViewAllWithdrawTransaction/> : <ViewAllDepositTransaction/>}
                </tbody>
            </table>
        </>
    )
}