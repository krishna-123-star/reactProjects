import React, { createContext, useContext, useState, type ReactNode } from "react";

type AuthContextType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0MTkyNzNlNi1kOTQzLTQzMzAtODgxNy0yNmMzNDU1NjMwZGUiLCJpYXQiOjE3NTU1MDY1OTEsImV4cCI6MTc1ODA5ODU5MX0.PrsLtSRWVizwwTejhL0zX1KjuRANg63D5FguQ65Z9NdrYgj9As-sI07ZCcynv3m8w49o4HMYDjrp37oFC_3TjA" 
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
