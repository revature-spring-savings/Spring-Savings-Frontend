import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ViewAllTransactionsByAccountID from '../transaction/ViewAllTransactionsByAccountID';
import CreateSingleTransaction from '../transaction/CreateSingleTransaction';
import CreateTransfer from '../transaction/CreateTransfer';
import { useAuth0 } from '@auth0/auth0-react';

export const AccountByAcctID = (props) => {
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8081/accounts/${props.accountID}`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    },[]);

    function hideDetails(accountID){
        ReactDOM.render('', document.getElementById(accountID));
    }

    function withDep(accountID){
        ReactDOM.render(<CreateSingleTransaction accountID={accountID}/>, document.getElementById(accountID));
    }

    function transfer(accountID){
        ReactDOM.render(<CreateTransfer accountID={accountID}/>, document.getElementById(accountID));
    }

    return (
        <>  
            <div>
                <h2>Account {props.accountID}</h2>
                <button  className="gray-btn" onClick={(e)=>withDep(account.accountID)}>Withdraw/Deposit</button>
                <button  className="gray-btn" onClick={(e)=>transfer(account.accountID)}>Transfer</button>
                {/* <h3>Account: {account.accountID}</h3> */}
                {/* <p>Type: {account.accountType}</p> */}
                <h3>Balance: {account.accountBalance}</h3>

                <p>Recent Transactions</p>
                {/* <button className="dark-gray-btn" >View All</button>
                <button className="dark-gray-btn" >View Incoming</button>
                <button className="dark-gray-btn" >View Outgoing</button> */}
                <ViewAllTransactionsByAccountID accountID={props.accountID}/>
                <button   className="close-btn" onClick={(e)=>hideDetails(account.accountID)}>Close</button>
            </div> 
        </>
        )
}