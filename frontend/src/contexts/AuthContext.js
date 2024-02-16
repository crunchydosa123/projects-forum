import { createContext, useEffect, useState, useContext } from "react";
import { firebase } from 'firebase/app'


const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user =>{
            setCurrentUser(user);
        });
    }, []);

    const authContextValue = {
        currentUser,
      };

    return(
        <AuthContext.Provider value ={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);