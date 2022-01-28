import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {AccountByAcctID} from './AccountByAcctID';

export const AccountByUserID = () => {
    const [account, setAccount] = useState([]);

    useEffect(() => {
        var userID = 2;
        axios.get(`http://localhost:8081/accounts/${userID}/all-accounts`).then(res => {
            console.log(res);
            setAccount(res.data);
        });
    }, []);

    function moreDetails(accountID){
        ReactDOM.render(<AccountByAcctID accountID={accountID} />, document.getElementById(accountID));
    }

    const accountMap = account.map(({ accountID, accountType, accountBalance }, index) => {

        return (
            <div key={index} className="acctCard">
                <div className="acctCardHeader">
                    <h3>Account: {accountID}</h3>
                </div>
            <div id="accountDeets">
                <p>Type: {accountType}</p><br/>
                <p>Balance: ${accountBalance}</p>
            </div>

                <div className="acctCardFooter">
                    
                    <h5 className="more-details-click" onClick={(e) => moreDetails(accountID)}>View More Details</h5>
                    <div id={accountID}>
                    
                    </div>
                   
                </div>
              
            </div>
        )
    })

    return (
        <>
            {accountMap}
        </>
    )
}


