"use client";
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [role, setRole] = useState('Viewer');

  return (
    <AppContext.Provider value={{ role, setRole }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
