import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const token = localStorage.getItem("token") || "";

  const [auth, setAuth] = useState(token);

  const addUser = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ addUser, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
