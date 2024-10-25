// VisibContext.js
import React, { createContext, useState } from 'react';
import { Link } from 'react-router-dom';

export const VisibContext = createContext();

export const VisibProvider = ({ children }) => {
  const [loginV, setLoginV] = useState(false); // or true, depending on your needs
  const goToDash = () => {
    
  }
  return (
    <VisibContext.Provider value={[loginV, setLoginV]}>
      {children}
    </VisibContext.Provider>
  );
};

