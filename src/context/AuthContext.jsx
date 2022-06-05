import {Navigate} from "react-router-dom";


import React, {createContext, useState} from "react";
export const AuthContext = createContext();

export const AuthProvider =({children}) => {
    const [isAuth, setIsAuth] =useState(false);

    const login =()=> {
        setIsAuth(true);
        Navigate("/feeds")
    };
    const logout =() =>{
        setIsAuth(false);
        Navigate("")
    };
    return (
        <AuthContext.Provider value  ={{isAuth, login, logout}}>
            {children}
            
        </AuthContext.Provider>
    );
};