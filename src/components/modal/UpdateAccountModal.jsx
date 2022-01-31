import React from "react";
import "./updateAccountModal.scss";

export default function UpdateAccountModal(props) {
    const close = props.close;

    return (
         <div className="m-user-background">
             <div className="m-container">
                 <div className="m-close-button">
                    <button onClick={() => close(false)}>X</button>
                 </div>
                 <div className="body">
                         <p>Profile has been updated!</p>
                 </div> 
             </div>

         </div>
    )

}