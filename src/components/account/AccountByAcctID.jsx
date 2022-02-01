import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ViewAllTransactionsByAccountID from '../transaction/ViewAllTransactionsByAccountID';
import ViewAllIncomingTransactionsByAccountID from '../transaction/ViewAllIncomingTransactionsByAccountID';
import ViewAllOutgoingTransactionsByAccountID from '../transaction/ViewAllOutgoingTransactionsByAccountID';
import CreateSingleTransaction from '../transaction/CreateSingleTransaction';
import CreateTransfer from '../transaction/CreateTransfer';

// this page renders more details about a particular banking account
export const AccountByAcctID = (props) => {
    const [account, setAccount] = useState([]);

    // get account by accountID
    useEffect(()=>{
        axios.get(`http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/accounts/${props.accountID}`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });
    },[]);

    // needed to re-render the "View More Details" button
    function moreDetails(accountID) {
        ReactDOM.render(
          <AccountByAcctID accountID={accountID} />,
          document.getElementById(accountID)
        );
      }

    // close button
    function hideDetails(accountID){
        ReactDOM.render(<button  className="more-details-click" onClick={(e) => moreDetails(accountID)}>View More Details</button>, document.getElementById(accountID));
    }

    // withdraw or deposit
    function withDep(accountID, accountBalance){
        ReactDOM.render(<CreateSingleTransaction accountID={accountID} accountBalance={accountBalance} />, document.getElementById(accountID));
    }

    // transfer
    function transfer(accountID, accountBalance){
        ReactDOM.render(<CreateTransfer accountID={accountID} accountBalance={accountBalance} />, document.getElementById(accountID));
    }

    // for viewing transactions tables
    //view all
    function viewAll(accountID){
        ReactDOM.render(<ViewAllTransactionsByAccountID accountID={props.accountID}/>, document.getElementById("transactions-pagination"));
    }

    // view deposits
    function viewIncoming(accountID){
        ReactDOM.render(<ViewAllIncomingTransactionsByAccountID accountID={props.accountID}/>, document.getElementById("transactions-pagination"));
    }

    // view withdrawals
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

                <button  className="gray-btn" onClick={(e)=>withDep(account.accountID, account.accountBalance)}>Withdraw/Deposit</button>
                <button  className="gray-btn" onClick={(e)=>transfer(account.accountID, account.accountBalance)}>Transfer</button><br/>

                <h4 id="recent-trans">Recent Transactions</h4>
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