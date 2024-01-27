// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      console.log('Fetching token...');
      
      const email = 'user@example.com';
      const password = 'password';

      const response = await fetch('https://your-api-endpoint.com/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('authToken', token);
        setIsLoggedIn(true);
      } else {
        console.error('Login failed.');
      }
    };

    fetchToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};
