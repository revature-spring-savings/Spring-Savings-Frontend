// import { tab } from "@testing-library/user-event/dist/tab";
import axios from "axios";
import { useState } from "react";
//import ViewAllAccounts from "./ViewAllAccounts";
import "./CreateAccount.scss"
// import ValidationPopUp from "./ValidationPopup";
import Modal from "../modal/Modal";

export default function CreateAccount() {
    const [accountType, setAccountType] = useState('');
    const [amount, setAmount] = useState(0);
    const [accountBtn, setAccountBtn] = useState(false);
    const [renderModal, setRenderModal] = useState(false);
    const [currType, setCurrType] = useState("");
    
    let isValid =false;
    
    var userID = 1;
    // let newDate = new Date();
    // let month = newDate.getMonth() + 1;
    // let today = `${month < 10 ? `0${month}` : `${month}`}/${newDate.getDate()}/${newDate.getFullYear()}`;

    // validation
    const submit = (e) => {
        e.preventDefault()
        document.getElementById("AJvalidation").innerHTML = "";
        if(accountType === "CHECKING") {
            
            if(amount < 100) {
                setCurrType("CHECKING");
                setRenderModal(true);
                // const popup = document.getElementById("AJvalidation");
                // console.log(<ValidationPopUp />);
                // document.getElementById("AJvalidation").append(<ValidationPopUp />); 
               // document.getElementById("AJvalidation").append("Checking requires $100 minimum to open");
                console.log("Checking requires $100 minimum to open");
            } else {
                isValid = true;
            }
            
        } else if(accountType ==="SAVINGS") {
            if(amount < 50) {
                setCurrType("SAVINGS");
                setRenderModal(true);
              //  document.getElementById("AJvalidation").append("Saving requires $50 minimum to open");
                console.log("Saving requires $50 minimum to open");
            } else {
                isValid = true;
            }
        }
        if (isValid) {
            setCurrType("SUCCESS"); // if account creation successful, render sucess page
            setRenderModal(true);
            axios.post(`http://localhost:8081/accounts/createAccount/${userID}`, {
                userID: 1,
                accountBalance: amount,
                accountType: accountType
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        // window.location.reload(true);
     
 }

//  const resetVal = (e) => {
//      e.preventDefault();
//      document.getElementById("AJvalidation").innerHTML = "";
//  }

   
    //get userID and accountID from useContext
    function changeTheValue(e) {
        setAccountType(e);
        setAccountBtn(!accountBtn);
    }


    return (
        <>
            <form className="create-account-form">
                Create a new Banking Account <br />
                <input name="type" type="radio" id="checking" value="CHECKING" onClick={(e) => changeTheValue(e.target.value)} />
                <label htmlFor="checking" defaultChecked>Checking</label>

                <input className="savings-button" name="type" type="radio" id="savings" value="SAVINGS" onClick={(e) => changeTheValue(e.target.value)} />
                <label htmlFor="savings">Savings</label>
                <br /><br />
                Initial Balance<br />
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /><br /><br />

                <div id="AJvalidation"></div>
                <button className="create-button" onClick={submit}>Create a new {accountType.toLowerCase()} account</button>
                <br/>
                {/* <button className="viewall-button" onClick={ViewAllAccounts}>View All Accounts</button> */}

        
                {/* <button onClick={createNewAccount}>Create a new {accountType.toLowerCase()} Account</button> */}
                {/* <button onClick={createNewAccount}>{accountBtn ? "Create a Savings Accounts" : "Create a Checking Account"}</button> */}

            </form>   
                {renderModal ? <Modal modalState={setRenderModal} accountType={currType}/> : ""}
        </>
    )
}