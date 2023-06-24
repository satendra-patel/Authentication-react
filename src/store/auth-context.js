import React, { useState } from 'react';

const AuthContext=React.createContext({
    token:'',
    isLoggenIn:false,
    login:(token)=>{},
    logout:()=>{},
});

export const AuthContextProvider=(props)=>{
    const [token,settoken]=useState(null);
    const userisloggedIn=!!token;
    const loginhandler=(token)=>{
        settoken(token);
    }
    const logouthandler=(token)=>{
        settoken(null);
    }
    const contextValue={
        token:token,
        isLoggenIn: userisloggedIn,
        login: loginhandler,
        logout: logouthandler
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext;
