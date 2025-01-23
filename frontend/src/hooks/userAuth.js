// frontend/src/hooks/useAuth.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const storedToken = localStorage.getItem('admirable_jwt') || '';
  const [token, setToken] = useState(storedToken);

  useEffect(() => {
    // Whenever token changes, sync to localStorage
    if (token) {
      localStorage.setItem('admirable_jwt', token);
    } else {
      localStorage.removeItem('admirable_jwt');
    }
  }, [token]);

  function login(newToken) {
    setToken(newToken);
  }

  function logout() {
    setToken('');
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}