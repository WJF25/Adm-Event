import { CardShow } from "../../components/ExibitionCard";
import { useCatalogue } from "../../providers/catalogo";
import { Redirect } from "react-router-dom";
import { useUser } from "../../providers/user/user";
import { Link } from "react-router-dom";
import { Button, Section } from "../../styles/button.style";
import { Sublista } from "../../styles/sublista.style";
import { WraperHome } from "../../styles/titulo.style";
import trem1 from "../../assets/trem1.png";

export const Home = () => {
  const { catalogue, nextPage, prevPage, page } = useCatalogue();
  console.log(catalogue);

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

  // const { token } = useUser();
  // if (!token) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="HomeCaontainer">
      <WraperHome>
        <header>
          <img src={trem1} alt="header" />
          <h1>Lista de bebidas disponíveis para Seu Evento</h1>
          <h3>
            É só clicar no evento escolhido e depois conferir sua escolha.
          </h3>
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
        <Button onClick={handleClickPrev}>Voltar Pag</Button>
        <Button onClick={handleClickNext}>Avança Pag</Button>
      </Section>
    </div>
  );
};

//tela home precisa ter o link para as pages formatura-confraternização-casamento
//essas páginas terão seu próprios states que receberão a escolha das pessoas
//juntamente com o botão de remover
//verificar se tem o email no local Storage - se não tiver redirecionar pra login
