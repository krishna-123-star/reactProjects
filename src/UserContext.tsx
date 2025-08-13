import React, { createContext, useContext } from "react";

type UserContextType = {
  username: string;
};

const UserContext = createContext<UserContextType>({ username: "" });

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const currentUser = { username: "KP" }; 
  return (
    <UserContext.Provider value={currentUser}>
      {children}
    </UserContext.Provider>
  );
};
