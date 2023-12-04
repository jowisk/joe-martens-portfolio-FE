import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../API/firebase";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect (()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            if (user) {
                setCurrentUser(user)
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }   
    
        })

        return () => {
            unsub()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}