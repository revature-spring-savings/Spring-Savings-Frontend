import React from "react";
import "./transactionModal.scss";

export default function TransactionModal(props) {
    const currType = props.transactionType; // CHECKINGS & SAVINGS 
    const close = props.setRenderModal
    console.log(currType);

    const modalDisplay = (currType) => {
        switch (currType || currType.toUpperCase()) {
            case 'WITHDRAW':
                return (
                    <div className="body">
                         <p>Withdrawal Successful</p>
                    </div> 
                )
            case 'DEPOSIT':
                return (
                    <div className="body">
                        <p>Deposit Successful</p>
                   </div>
                )
                default:
                    return null;
            }
            

    }
    
    return (
         <div className="t-background">
             <div className="t-container">
                 <div className="t-close-button">
                    <button onClick={()  => close(false)}>X</button>
                 </div>
                 {modalDisplay(currType)}
             </div>

         </div>
    )
}
