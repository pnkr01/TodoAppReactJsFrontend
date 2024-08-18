import { createContext,useState } from "react";

export const AuthContext = AuthContext();

function AuthProvider({ children }) {
    
    const [number, setNumber] = useState(0);
    
    return (
        <AuthContext.Provider value={{number}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;