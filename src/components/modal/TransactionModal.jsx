import React from "react";
import "./Modal.scss";

export default function TransactionModal(props) {
    const currType = props.transactionType; // CHECKINGS & SAVINGS 
    const close = props.modalState;
    console.log(props);

    // const modalDisplay = (currType) => {
    //     switch (currType) {
    //         case 'WITHDRAW':
    //             return (
    //                 <div className="body">
    //                      <p>Checking requires $100 minimum to open</p>
    //                 </div> 
    //             )
    //         case 'DEPOSIT':
    //             return (
    //                 <div className="body">
    //                     <p>Saving requires $50 minimum to open</p>
    //                </div>
    //             )
    //         case 'SUCCESS':
    //             return (
    //                 <div className="body">
    //                     <p>Account created!</p>
    //                </div>
                   
    //             )    
    //             default:
    //                 return null;
    //         }
            

    // }

    // const pageReload  = () => {
        
    //     window.location.reload(true);
    // }
    
    return (
         <div className="m-background">
             <div className="m-container">
                 <div className="m-close-button">
                    <button onClick={()  => close(false)}>X</button>
                 </div>
                 {/* {modalDisplay(currType)} */}
             </div>

         </div>
    )
}
