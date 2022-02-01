import React from "react";
import "./transactionModal.scss";

export default function TransactionModal(props) {
    const close = props.close
    const renderModal = props.renderModal;
    console.log(props);

    const msg = () => {
        if (props.renderModal === 200) {
            return (
                <p>Transfer Successful</p>
            )
        }
        if (props.renderModal === 400) {
            return (
                <p>Transfer was not successful</p>
            )
        }
    } 
    
    
    return (
         <div className="t-background">
             <div className="t-container">
                 <div className="t-close-button">
                    <button onClick={()  => close(false)}>X</button>
                 </div>
                 <div className="body">
                         {msg()}
                 </div> 
             </div>

         </div>
    )
}
