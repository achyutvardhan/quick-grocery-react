import React, {  createContext  , useState} from 'react';

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const [loggedIn ,  setLoggedIn] = useState(false);

    const login = ()=> setLoggedIn(true);
    const logout = ()=> setLoggedIn(false);

    return (
        <AuthContext.Provider value={{login , logout , loggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext , AuthProvider};