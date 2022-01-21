import axios from 'axios';
import React, {useState, useEffect} from 'react';

export const AccountByAcctIDConst =()=>{

    const [account, setAccount] = useState([]);

    const fetchAccount=()=>{
        var accountID = 1;
        axios.get(`http://localhost:8081/accounts/${accountID}`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    }

    useEffect(()=>{
        fetchAccount();
    },[]);

    return (
        <>  
            <div>
                <h3>Account: {account.accountID}</h3>
                <p>Type: {account.accountType}</p>
                <p>Balance: {account.accountBalance}</p>
            </div> 
        </>
        )
}