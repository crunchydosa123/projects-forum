import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

export const UserContext = createContext();

export const UserProvider = ({ children }) =>{
    const [user, setUser] = useState(null);
    //const navigate = useNavigate();

    onAuthStateChanged(auth, (authUser)=>{
        setUser(authUser);
        console.log(user);
    });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};