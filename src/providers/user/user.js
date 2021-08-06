import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@Event:nome") || "";

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  const addUser = (data) => {
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ addUser, setUser, user, auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
