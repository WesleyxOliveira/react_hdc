// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { useAuthentication } from "../hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";

// cria o contexto
const AuthContext = createContext();

// provider que encapsula tudo
export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // boa prática: limpa o listener ao desmontar
    return () => unsubscribe();
  }, [auth]);

  const loadingUser = user === undefined;

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook para acessar o contexto
export function useAuthValue() {
  return useContext(AuthContext);
}
