import { createContext, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  const login = async (email, password) => {
    const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('authToken', token);
      setIsLoggedIn(true);
    } else {
      console.log('Login failed');
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, role, setRole, login }}>
      {children}
    </AuthContext.Provider>
  );
};
