import axios from "axios";
import { useState } from "react";
import ReactDOM from 'react-dom';
import { AccountByAcctID } from '../account/AccountByAcctID';
import CreateSingleTransaction from '../transaction/CreateSingleTransaction';
import TransferModal from "../modal/TransferModal";
import { useLogin } from "../../Context/LoginProvider";

export default function CreateTransfer(props) {
    const { loginUserID } = useLogin;
    const [acctSrc, setAcctSrc] = useState(props.accountID);
    const [acctBalance, setAcctBalance] = useState(props.accountBalance);
    const [acctDest, setAcctDest] = useState(0);
    const [amount, setAmount] = useState(0);
    const [renderModal, setRenderModal] = useState(false);
    // const [userID, setUserID] = sessionStorage.getItem("userID");

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    function createNewTransaction() {
        console.log("userID is " + loginUserID);

        axios.post('http://ec2-54-211-135-196.compute-1.amazonaws.com:9090/transactions', [{
            accountID: acctSrc,
            userID: loginUserID,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'WITHDRAW'
        },
        {
            accountID: acctDest,
            amount: amount,
            transactionDate: today,
            transactionNote: `Transfer from acct ${acctSrc} to acct ${acctDest}`,
            transactionType: 'DEPOSIT'
        }])
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function moreDetails(accountID) {
        ReactDOM.render(<AccountByAcctID accountID={accountID} />, document.getElementById(accountID));
    }

    function withDep(accountID, acctBalance) {
        ReactDOM.render(<CreateSingleTransaction accountID={accountID} accountBalance={acctBalance} />, document.getElementById(accountID));
    }

    return (
        <>
            <div className="footer-header">
                <h2>Account {acctSrc}</h2>
                <h3>Balance: ${acctBalance}</h3>
            </div>

            <button className="gray-btn" onClick={(e) => moreDetails(acctSrc)}>Go back</button>
            <button className="gray-btn" onClick={(e) => withDep(props.accountID, props.accountBalance)}>Withdraw/Deposit</button>
            <h3>Transfer</h3>
            Transfer From:<br />
            Acct #{props.accountID}<br /><br />

            Transfer To:<br />
            <input type="number" value={acctDest} onChange={(e) => setAcctDest(e.target.value)} /><br /><br />

            Amount:<br />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />
            {renderModal ? <TransferModal close={setRenderModal} /> : ""}
            Note:<br />
            <p>Transfer from acct {acctSrc} to acct {acctDest}</p><br />

            <button className="complete-btn" onClick={() => { createNewTransaction(); setRenderModal(!renderModal) }}>Complete Transfer</button>
        </>
    )
}

