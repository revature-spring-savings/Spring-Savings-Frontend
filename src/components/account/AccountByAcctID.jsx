import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ViewAllTransactionsByAccountID from '../transaction/ViewAllTransactionsByAccountID';
import CreateSingleTransaction from '../transaction/CreateSingleTransaction';
import CreateTransfer from '../transaction/CreateTransfer';

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

    function viewAll(accountID){
        ReactDOM.render(<ViewAllTransactionsByAccountID accountID={props.accountID}/>, document.getElementById("transactions-pagination"));
    }

    function viewIncoming(accountID){
        ReactDOM.render(<CreateTransfer accountID={accountID}/>, document.getElementById("transactions-pagination"));
    }

    function viewOutgoing(accountID){
        ReactDOM.render(<CreateTransfer accountID={accountID}/>, document.getElementById("transactions-pagination"));
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
                <button className="dark-gray-btn"  onClick={(e)=>viewAll(account.accountID)}>View All</button>
                <button className="dark-gray-btn"  onClick={(e)=>viewIncoming(account.accountID)}>View Incoming</button>
                <button className="dark-gray-btn"  onClick={(e)=>viewOutgoing(account.accountID)}>View Outgoing</button>
                <div id="transactions-pagination">    
                    <ViewAllTransactionsByAccountID accountID={props.accountID}/>
                </div>
                <button   className="close-btn" onClick={(e)=>hideDetails(account.accountID)}>Close</button>
            </div> 
        </>
        )
}