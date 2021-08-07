import { useState } from "react";
import { useCasorio } from "../../providers/casamento/index";
import { generators } from "../../lib/generators";
import { Link, Redirect } from "react-router-dom";
import { Card } from "../../styles/card.style";
import { Img } from "../../styles/img.style";
import { Sublista } from "../../styles/sublista.style";
import { Button, ButtonRemove } from "../../styles/button.style";
import { Header, TitleWedding } from "../../styles/titulo.style";
import noivos from "../../assets/noivos.png";
import rings from "../../assets/rings.png";
import { useUser } from "../../providers/user/user";

export const Casamento = () => {
  const [show, setShow] = useState(false);
  const { casaDrinks, setCasaDrinks } = useCasorio();
  const { idGenerator } = generators;
  const { auth } = useUser();

  const handleClick = (param) => {
    setShow(param);
  };

  const handleClickRemove = (id) => {
    const filtrado = casaDrinks.filter((item) => item.id !== id);

    setCasaDrinks(filtrado);
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header>
        <img src={rings} alt="header" />
        <TitleWedding>Bebidas Escolhidas para o seu Casamento</TitleWedding>
        <p>
          <Link to="/home">voltar para Home</Link>
        </p>
      </Header>
      <Card className="Casamento">
        <ul>
          {casaDrinks.length > 0 ? (
            casaDrinks.map((item) => (
              <li key={idGenerator(99999)}>
                {" "}
                <Img src={item.image_url} alt={item.name} />
                <section>
                  <p>
                    <span>Nome: </span> {item.name}
                  </p>
                  <p>
                    <span>Envasada em: </span> {item.first_brewed}
                  </p>
                  <p className="scrolParagra">
                    <span> Descrição: </span>
                    {item.description}
                  </p>
                  <p>
                    <span>Volume em lts: </span>
                    {item.volume.value}
                  </p>
                </section>
                {show && (
                  <div>
                    {" "}
                    <p>Combinações Gastrônomicas</p>
                    <Sublista>
                      {item.food_pairing.map((item) => (
                        <li style={{ height: "10%" }} key={idGenerator(99999)}>
                          {item}
                        </li>
                      ))}
                    </Sublista>{" "}
                    <Button onClick={() => handleClick(false)}>Fechar</Button>
                  </div>
                )}
                <Button onClick={() => handleClick(true)}>
                  Com o quê essa bebida combina?{" "}
                </Button>
                <ButtonRemove onClick={() => handleClickRemove(item.id)}>
                  Remover
                </ButtonRemove>
              </li>
            ))
          ) : (
            <TitleWedding>Escolha em Algo em Home</TitleWedding>
          )}
        </ul>
        <img src={noivos} alt="noifus" />
      </Card>
    </>
  );
};
