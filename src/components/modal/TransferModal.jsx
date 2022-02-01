import React from "react";
import "./transactionModal.scss";

export default function TransactionModal(props) {
    const close = props.close
    console.log(props);
    
    return (
         <div className="t-background">
             <div className="t-container">
                 <div className="t-close-button">
                    <button onClick={()  => close(false)}>X</button>
                 </div>
                 <div className="body">
                         <p>Transfer Successful</p>
                 </div> 
             </div>

         </div>
    )
}
