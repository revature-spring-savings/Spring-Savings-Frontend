import axios from 'axios';

import React, {useState, useEffect} from 'react';
import CloseButton from '../dashboard/CloseButton';

export const AccountByUserID = () => {
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        var userID = 2;
        axios.get(`http://localhost:8081/accounts/${userID}/all-accounts`).then(res =>{
            console.log(res);
            setAccount(res.data);
        });   
    },[]);

    function closerLook(accountID){
        console.log(accountID+" was clicked");
        document.getElementById(accountID).innerHTML = accountID;
        <CloseButton accountID={this.accountID} />

    }

    return (
    <>  
        {account.map(({accountID, accountType, accountBalance}, index) =>{
            return (
                <div key={index} class="acctCard">
                    <div class="acctCardHeader">
                        <h3>Account: {accountID}</h3>
                    </div>

                    <p>Type: {accountType}</p>
                    <p>Balance: ${accountBalance}</p>

                    <div className="acctCardFooter" onClick={function(e){closerLook(accountID)}} >
                        {/* <button class="viewMore" id={accountID}>View More</button> */}
                        <p>View Recent Transactions</p>
                    </div>
                    <div className="moreDetails" id={accountID}></div>
                    {/* <div className="moreDetails" id={accountID}><CloseButton accountID={accountID} /></div> */}

                </div>
            )
        })}
    </>
    )
}


