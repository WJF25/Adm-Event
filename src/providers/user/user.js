import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState();

  const Authenty = () => {
    const token = localStorage.getItem("@Event:nome") || "";
    setAuth(token);
  };

  const addUser = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ addUser, setUser, user, Authenty, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
