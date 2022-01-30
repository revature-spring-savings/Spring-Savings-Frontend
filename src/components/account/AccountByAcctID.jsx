import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ViewAllTransactionsByAccountID from '../transaction/ViewAllTransactionsByAccountID';
import ViewAllIncomingTransactionsByAccountID from '../transaction/ViewAllIncomingTransactionsByAccountID';
import ViewAllOutgoingTransactionsByAccountID from '../transaction/ViewAllOutgoingTransactionsByAccountID';


import CreateSingleTransaction from '../transaction/CreateSingleTransaction';
import CreateTransfer from '../transaction/CreateTransfer';
import { User } from '@auth0/auth0-react';

export const AccountByAcctID = (props) => {
    const [account, setAccount] = useState([]);



    useEffect(()=>{
        axios.get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/${props.accountID}`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    },[]);

    function moreDetails(accountID) {
        ReactDOM.render(
          <AccountByAcctID accountID={accountID} />,
          document.getElementById(accountID)
        );
      }

    function hideDetails(accountID){
        ReactDOM.render(<button  className="more-details-click" onClick={(e) => moreDetails(accountID)}>View More Details</button>, document.getElementById(accountID));
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
        ReactDOM.render(<ViewAllIncomingTransactionsByAccountID accountID={props.accountID}/>, document.getElementById("transactions-pagination"));
    }

    function viewOutgoing(accountID){
        ReactDOM.render(<ViewAllOutgoingTransactionsByAccountID accountID={props.accountID}/>, document.getElementById("transactions-pagination"));
    }

    return (
        <>  
            <div>
                <div className="footer-header">
                    <h2>Account {props.accountID}</h2>
                    <h3>Balance: ${account.accountBalance}</h3>
                </div>

                <button  className="gray-btn" onClick={(e)=>withDep(account.accountID)}>Withdraw/Deposit</button>
                <button  className="gray-btn" onClick={(e)=>transfer(account.accountID)}>Transfer</button><br/>

                

                <h4>Recent Transactions</h4>
                <button className="trans-btn"  onClick={(e)=>viewAll(account.accountID)}>View All</button>
                <button className="trans-btn"  onClick={(e)=>viewIncoming(account.accountID)}>View Incoming</button>
                <button className="trans-btn"  onClick={(e)=>viewOutgoing(account.accountID)}>View Outgoing</button>
                <div id="transactions-pagination">
                    <center>  
                        <ViewAllTransactionsByAccountID accountID={props.accountID}/>
                    </center>  
                </div>
                <button   className="close-btn" onClick={(e)=>hideDetails(account.accountID)}>Close</button>
            </div> 
        </>
        )
}