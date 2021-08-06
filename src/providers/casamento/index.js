import { createContext, useState, useContext } from "react";

const CasorioContext = createContext();

export const CasorioProvider = ({ children }) => {
  const [casaDrinks, setCasaDrinks] = useState([]);

  const addCasoDrinks = (escolhaCas) => {
    setCasaDrinks([...casaDrinks, escolhaCas]);
  };
  console.log(casaDrinks);

  return (
    <CasorioContext.Provider
      value={{ casaDrinks, setCasaDrinks, addCasoDrinks }}
    >
      {children}
    </CasorioContext.Provider>
  );
};

export const useCasorio = () => useContext(CasorioContext);
