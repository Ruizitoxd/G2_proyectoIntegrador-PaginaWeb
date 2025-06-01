import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import appFirebase from './credenciales';

export const AuthContext = createContext();

const auth = getAuth(appFirebase);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={usuario}>
      {children}
    </AuthContext.Provider>
  );
};
