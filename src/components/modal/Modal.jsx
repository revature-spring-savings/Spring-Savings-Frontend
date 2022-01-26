import React from "react";

export default function Modal(props) {
    const currType = props.accountType; // CHECKINGS & SAVINGS
    console.log(props.modalState)
    console.log(currType)
    const close = props.modalState;
    return (
         <div className="m-background">
             <div className="m-container">
                    <button onClick={() => close(false)}>X</button>
               {currType === "CHECKING" ? <div className="body">Checking requires $100 minimum to open</div> : <div className="body">Saving requires $50 minimum to open</div> }
             </div>

         </div>
    )
}