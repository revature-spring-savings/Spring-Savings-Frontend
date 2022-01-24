import axios from 'axios';
<<<<<<< HEAD:src/components/AccountByUserIDApi.jsx
import React, {useState, useEffect} from 'react';


export const AccountByUserIDConst =()=>{
=======
import React, { useState, useEffect } from 'react';
>>>>>>> origin/team-1:src/components/account/AccountByUserID.jsx

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
<<<<<<< HEAD:src/components/AccountByUserIDApi.jsx
                <div key={index} class="acctCard">
                    <div class="acctCardHeader">
                        <h3>Account: {accountID}</h3>
                    </div>

                    <p>Type: {accountType}</p>
                    <p>Balance: ${accountBalance}</p>

                    <div class="acctCardFooter">
                        {/* <button class="viewMore" id={accountID}>View More</button> */}
                        <p>View Recent Transactions</p>
                    </div>
                
=======
                <div key={index}>
                    <h3>Account: {accountID}</h3>
                    <p>Type: {accountType}</p>
                    <p>Balance: {accountBalance}</p>
>>>>>>> origin/team-1:src/components/account/AccountByUserID.jsx
                </div>
            )
        })}
    </>
    )
}