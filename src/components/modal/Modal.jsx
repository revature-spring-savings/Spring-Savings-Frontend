import React from "react";
import "./Modal.scss";
import { useAuth0 } from '@auth0/auth0-react';

export default function Modal(props) {
    const currType = props.accountType; // CHECKINGS & SAVINGS 
    const close = props.modalState;

    const modalDisplay = (currType) => {
        switch (currType) {
            case 'CHECKING':
                return (
                    <div className="body">
                         <p>Checking requires $100 minimum to open</p>
                    </div> 
                )
            case 'SAVINGS':
                return (
                    <div className="body">
                        <p>Saving requires $50 minimum to open</p>
                   </div>
                )
            case 'SUCCESS':
                return (
                    <div className="body">
                        <p>Account created!</p>
                   </div>
                   
                )    
                default:
                    return null;
            }
            

    }

    // const pageReload  = () => {
        
    //     window.location.reload(true);
    // }
    
    return (
         <div className="m-background">
             <div className="m-container">
                 <div className="m-close-button">
                    <button onClick={()  => close(false)}>X</button>
                 </div>
                 {modalDisplay(currType)}
             </div>

         </div>
    )
}
