//gerar a consulta na api por aquui
import { useCallback } from "react";
import { createContext, useState, useContext } from "react";
import api from "../../services/api";

const CatalogoContext = createContext();

export const CatalogoProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  const [page, setPage] = useState(1);

  const apiGet = useCallback(() => {
    api
      .get(`?page=${page}`)
      .then((response) => setCatalogue(response.data))
      .catch((err) => console.log(err));
  }, [page]);

  const nextPage = useCallback(() => {
    setPage(page + 1);
    apiGet();
  }, [apiGet, page]);

  const prevPage = useCallback(() => {
    setPage(page - 1);
    apiGet();
  }, [apiGet, page]);

  return (
    <CatalogoContext.Provider
      value={{ catalogue, nextPage, prevPage, page, apiGet }}
    >
      {children}
    </CatalogoContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogoContext);
