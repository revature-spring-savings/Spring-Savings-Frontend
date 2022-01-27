import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//import { isBlock } from 'typescript';
import CloseButton from '../dashboard/CloseButton';
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

                <p>Type: {accountType}</p>
                <p>Balance: ${accountBalance}</p>

                <div className="acctCardFooter">
                    
                    <p  onClick={(e) => moreDetails(accountID)}>View More Details</p>
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


