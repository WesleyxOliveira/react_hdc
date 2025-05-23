import { createContext, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({children, value}) {
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export function useAuthValue() {
    return useContext(AuthContext);
}