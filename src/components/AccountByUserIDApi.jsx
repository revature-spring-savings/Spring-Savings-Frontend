import axios from 'axios';
import React, {useState, useEffect} from 'react';

export const AccountByUserIDConst =()=>{

    const [account, setAccount] = useState([]);

    const fetchAccount=()=>{
        var userID = 1;
        axios.get(`http://localhost:8081/accounts/${userID}/all-accounts`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    }

    useEffect(()=>{
        fetchAccount();
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