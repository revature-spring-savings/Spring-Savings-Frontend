import React from "react";
import "./Modal.scss";

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

    const pageReload  = () => {
        
        window.location.reload(true);
    }
    
    return (
         <div className="m-background">
             <div className="m-container">
                 <div className="m-close-button">
                    <button onClick={()  => close(false)} onClick={pageReload}>X</button>
                 </div>
                 {modalDisplay(currType)}
             </div>

         </div>
    )
}


// import React from "react";
// import "./Modal.scss";

// export default function Modal(props) {
//     const currType = props.accountType; // CHECKINGS & SAVINGS
//     console.log(props.modalState)
//     console.log(currType)
//     const close = props.modalState;
//     return (
//          <div className="m-background">
//              <div className="m-container">
//                  <div className="m-close-button">
//                     <button onClick={() => close(false)}>X</button>
//                  </div>
//                {currType === "CHECKING" ? 
//                <div className="body">
//                    <p>Checking requires $100 minimum to open</p>
//                </div> 
//                : 
//                <div className="body">
//                    <p>Saving requires $50 minimum to open</p>
//                </div> }
//              </div>

//          </div>
//     )
// }