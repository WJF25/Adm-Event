import { createContext, useState, useContext } from "react";

const ConfraContext = createContext();

export const ConfraProvider = ({ children }) => {
  const [confraDrinks, setConfraDrinks] = useState([]);

  const addConfraDrinks = (escolhaConfra) => {
    setConfraDrinks([confraDrinks, escolhaConfra]);
  };

  return (
    <ConfraContext.Provider
      value={(confraDrinks, setConfraDrinks, addConfraDrinks)}
    >
      {children}
    </ConfraContext.Provider>
  );
};

export const useConfra = () => useContext(ConfraContext);
