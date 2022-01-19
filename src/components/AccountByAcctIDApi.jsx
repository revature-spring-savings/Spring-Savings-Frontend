import axios from 'axios';
import React, {useState, useEffect} from 'react';

export const AccountByAcctID =()=>{

    const [account, setAccount] = useState([]);

    const fetchAccount=()=>{
        var accountID = 1;
        axios.get(`http://3.14.3.79:9090/accounts/${accountID}`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    }

    useEffect(()=>{
        fetchAccount();
    },[]);

    return account.map((account, index) =>{
        return (
            <div key={index}>
                
                <h3>Account: {account.accountID}</h3>
                <p>Type: {account.accountType}</p>
                <p>Balance: {account.accountBalance}</p>
               
            </div>
        )
    });

}