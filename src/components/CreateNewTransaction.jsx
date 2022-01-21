import axios from "axios";
import { useState, useEffect } from "react";



export default function CreateNewTransaction(props){
    const transactionsAPI = 'http://localhost:8081/transactions'

    useEffect(() => {
        console.log(props.amount);
        axios.post(transactionsAPI, [{
                accountID: props.accountID,
                userID: props.userID,
                amount: props.amount,
                transactionDate: props.transactionDate,
                transactionNote: props.transactionNote,
                transactionType: props.transactionType
        }])
            .then((response) => {
                console.log(response.data);
            })
            .catch(function(error){
                console.log(error);
            })
        }, []);
    
    return(
        <>
        <p>userID {props.userID}</p>
        <p>accountID {props.accountID}</p>
        <p>amount {props.amount}</p>
        <p>transactionDate {props.transactionDate}</p>
        <p>transactionType {props.transactionType}</p>
        <p>transactionNote {props.transactionNote}</p>
        </>
    )
}