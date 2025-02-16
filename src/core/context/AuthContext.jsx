import { createContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children}) => {
    const [info,setInfo]=useState({"username":"test","role":"admin"});
    return (
        <>
        <AuthContext.Provider value={{info,setInfo}}>
            {children}
        </AuthContext.Provider>
        </>
    );
}