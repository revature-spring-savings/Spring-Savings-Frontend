import React from "react";
import "./Modal.scss";

export default function Modal(props) {
    const currType = props.accountType; // CHECKINGS & SAVINGS
    console.log(props.modalState)
    console.log(currType)
    const close = props.modalState;
    return (
         <div className="m-background">
             <div className="m-container">
                 <div className="m-close-button">
                    <button onClick={() => close(false)}>X</button>
                 </div>
               {currType === "CHECKING" ? 
               <div className="body">
                   <p>Checking requires $100 minimum to open</p>
               </div> 
               : 
               <div className="body">
                   <p>Saving requires $50 minimum to open</p>
               </div> }
             </div>

         </div>
    )
}