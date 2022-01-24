import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const AccountByUserIDConst = () => {
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        var userID = 2;
        axios.get(`http://localhost:8081/accounts/${userID}/all-accounts`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });   
    },[]);

    return (
    <>  
        {account.map(({accountID, accountType, accountBalance}, index) =>{
            return (
                <div key={index}>
                    <h3>Account: {accountID}</h3>
                    <p>Type: {accountType}</p>
                    <p>Balance: {accountBalance}</p>
                </div>
            )
        })}
    </>
    )
}