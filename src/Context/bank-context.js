import React, { useState } from "react";

export const BankContext = React.createContext();

const BankContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState()

  return (
    <BankContext.Provider
      value={{

        onIsLoggedIn: isLoggedIn,
        onSetIsLoggedIn: setIsLoggedIn,
        onUserData: userData,
        onSetUserData: setUserData
        
      }}
    >
      {props.children}
    </BankContext.Provider>
  );
};

export default BankContextProvider;