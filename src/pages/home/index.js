import { CardShow } from "../../components/ExibitionCard";
import { useCatalogue } from "../../providers/catalogo";
import { Redirect } from "react-router-dom";
import { useUser } from "../../providers/user/user";
import { Link } from "react-router-dom";
import { Button, ButtonLogOut, Section } from "../../styles/button.style";
import { Sublista } from "../../styles/sublista.style";
import { WraperHome } from "../../styles/titulo.style";
import trem1 from "../../assets/trem1.png";

export const Home = () => {
  const { nextPage, prevPage, page } = useCatalogue();
  const { auth, setAuth } = useUser();

  const handleClickPrev = () => {
    if (page === 1) {
      return null;
    } else {
      return prevPage();
    }
  };

  const handleClickNext = () => {
    if (page === 13) {
      return null;
    } else {
      nextPage();
    }
  };

  const LogOut = () => {
    localStorage.clear();
    setAuth(false);
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="HomeCaontainer">
      <WraperHome>
        <header>
          <img src={trem1} alt="header" />
          <h1>Lista de bebidas disponíveis para Seu Evento</h1>
          <h3>
            É só clicar no evento escolhido e depois conferir sua escolha.
          </h3>
          <ButtonLogOut id="#point" onClick={LogOut}>
            Sair
          </ButtonLogOut>
        </header>
      </WraperHome>

      <Sublista>
        <li>
          <Link to="/Casamento">Ir Para Casamento</Link>
        </li>
        <li>
          <Link to="/Formatura">Ir Para Formatura</Link>
        </li>
        <li>
          <Link to="/Confraternização">Ir Para Confraternização</Link>
        </li>
      </Sublista>
      <CardShow />
      <Section style={{ width: "30%", margin: "10px auto" }}>
        <Button onClick={handleClickPrev}>Pag Ante</Button>
        <Button onClick={handleClickNext}>Pag Prox</Button>
        <a href="#point">voltar ao topo</a>
      </Section>
    </div>
  );
};
