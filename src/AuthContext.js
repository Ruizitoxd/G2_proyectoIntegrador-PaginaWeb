import { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from './credenciales';

export const AuthContext = createContext(null); // contexto vacío por defecto

const auth = getAuth(appFirebase);

export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
        });

        // limpieza al desmontar el componente
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={usuario}>
            {children}
        </AuthContext.Provider>
    );
}
