import React, { useState, createContext, useContext } from "react"; 

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginUserID, setLoginUserID] = useState(0);
    const [loginUsername, setLoginUsername] = useState("")
    
    return (
        <LoginContext.Provider value={{
            isLoggedIn, setIsLoggedIn, 
            loginUserID, setLoginUserID, 
            loginUsername, setLoginUsername 
            }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;