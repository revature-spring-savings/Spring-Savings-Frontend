import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const TransactionsDetail = () => {
    const [withdrawTransaction, setWithdrawTransaction] = useState([]);

    const api = "http://localhost:8081/transactions/"

    //post request to get all information of the transaction for one account
    useEffect(() => {
        axios.post(`${api}withdraw`)
        .then(res => {
            console.log(res.data);
            setWithdrawTransaction(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    

    return (
        <>
            <WithdrawTransaction/>
            <DepositTransaction/>
        </>
    )
}

const WithdrawTransaction = () => {
    return (
    <>

    </>
    )
};

const DepositTransaction = () => {
    return (
    <>

    </>
    )
};
  
  
  