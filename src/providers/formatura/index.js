import { createContext, useState, useContext } from "react";

const FormaContext = createContext();

export const FormaProvider = ({ children }) => {
  const [formaDrinks, setFormaDrinks] = useState([]);

  const addFormaDrinks = (escolhaForma) => {
    setFormaDrinks([...formaDrinks, escolhaForma]);
  };

  return (
    <FormaContext.Provider
      value={{ formaDrinks, setFormaDrinks, addFormaDrinks }}
    >
      {children}
    </FormaContext.Provider>
  );
};

export const useForma = () => useContext(FormaContext);
