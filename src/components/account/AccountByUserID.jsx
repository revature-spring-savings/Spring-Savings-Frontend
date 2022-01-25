import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { isBlock } from 'typescript';
import CloseButton from '../dashboard/CloseButton';

export const AccountByUserID = () => {
    const [account, setAccount] = useState([]);
    const [showMoreInfo, setShowMoreInfo] = useState(true);

    const handleShowMoreInfo = () => setShowMoreInfo(!showMoreInfo);

    useEffect(() => {
        var userID = 2;
        axios.get(`http://localhost:8081/accounts/${userID}/all-accounts`).then(res => {
            console.log(res);
            setAccount(res.data);
        });
    }, []);


    const accountMap = account.map(({ accountID, accountType, accountBalance }, index) => {

        return (
            <div key={index} className="acctCard">
                <div className="acctCardHeader">
                    <h3>Account: {accountID}</h3>
                </div>

                <p>Type: {accountType}</p>
                <p>Balance: ${accountBalance}</p>

                <div className="acctCardFooter" onClick={handleShowMoreInfo}>
                     {/* <button class="viewMore" id={accountID} onClick={setShowMoreInfo(accountID)}>View More</button> */}
                  {/*  onClick => add className to hide and unhide
                    */}
                    <p>View More Details</p>
                    {/* <div className="moreDetails" id={accountID} > */}
                    {showMoreInfo ? <></> :
                        <p>accountID is {accountID}</p>
                    } 
                 {/* </div> */}
                </div>
                {/* <div className="moreDetails" id={accountID}></div> */}
                {/* <div className="moreDetails" id={accountID}><CloseButton accountID={accountID} /></div> */}

            </div>
        )
    })

    return (
        <>
            {accountMap}
        </>
    )
}


