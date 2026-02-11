import React, { createContext, ReactNode, useContext, useState } from 'react';

interface IUserContext {
  nome: string;
  setNome: (nome: string) => void;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [nome, setNome] = useState('');

  return (
    <UserContext.Provider value={{ nome, setNome }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};