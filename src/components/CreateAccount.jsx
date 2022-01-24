import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState, useEffect } from "react";



export default function CreateAccount(props) {
    var userID = 1;
    const accountsAPI = `http://localhost:8081/accounts/createAccount/${userID}`

    const [accountType, setAccountType] = useState('');
   
    const [amount, setAmount] = useState(0);
    const [accountBtn, setAccountBtn] = useState(false);

    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;
  
    //get userID and accountID from useContext
        function changeTheValue(e){
            setAccountType(e);
            setAccountBtn(!accountBtn);
        }


    function createNewAccount() {
        // console.log(props.amount);
        axios.post(accountsAPI, {
            userID: 1,
            accountBalance: amount,
            // accountDate: today,
            // accountNote: transactionNote,
            accountType: accountType
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return (
        <>
            {/* <form> */}
                Create a new Banking Account <br />
                <input name="type" type="radio" id="checking" value="CHECKING" onClick={(e) => changeTheValue(e.target.value)} />
                <label htmlFor="checking" checked="checked">Checking</label>

                <input name="type" type="radio" id="savings" value="SAVINGS" onClick={(e) => changeTheValue(e.target.value)} />
                <label htmlFor="savings">Savings</label>


                <br /><br />
                Initial Balance<br/>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} /><br /><br />


                <button onClick={createNewAccount}>Create a new {accountType.toLowerCase()} Account</button>


        
                {/* <button onClick={createNewAccount}>{accountBtn ? "Create a Savings Accounts" : "Create a Checking Account"}</button> */}

            {/* </form> */}
        </>
    )
}

