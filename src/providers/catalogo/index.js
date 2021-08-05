//gerar a consulta na api por aquui
import { createContext, useState, useContext } from "react";
import api from "../../services/api";
import { useEffect } from "react";

const CatalogoContext = createContext();

export const CatalogoProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`?page=${page}`)
      .then((response) => setCatalogue(response.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(catalogue);
  function nextPage() {
    setPage(page + 1);
  }
  function prevPage() {
    setPage(page - 1);
  }

  return (
    <CatalogoContext.Provider value={{ catalogue, nextPage, prevPage }}>
      {children}
    </CatalogoContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogoContext);
