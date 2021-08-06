//gerar a consulta na api por aquui
import { createContext, useState, useContext } from "react";
import api from "../../services/api";

const CatalogoContext = createContext();

export const CatalogoProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([]);
  const [page, setPage] = useState(1);

  function apiGet() {
    api
      .get(`?page=${page}`)
      .then((response) => setCatalogue(response.data))
      .catch((err) => console.log(err));
  }

  function nextPage() {
    setPage(page + 1);
    apiGet();
  }
  function prevPage() {
    setPage(page - 1);
    apiGet();
  }

  return (
    <CatalogoContext.Provider
      value={{ catalogue, nextPage, prevPage, page, apiGet }}
    >
      {children}
    </CatalogoContext.Provider>
  );
};

export const useCatalogue = () => useContext(CatalogoContext);
