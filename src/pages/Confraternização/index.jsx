import { useState } from "react";
import { useConfra } from "../../providers/confraternização/index";
import { generators } from "../../lib/generators";
import { Link } from "react-router-dom";
import { Card } from "../../styles/card.style";
import { Img } from "../../styles/img.style";
import { Button, ButtonRemove } from "../../styles/button.style";
import { Sublista } from "../../styles/sublista.style";
import { Header, TitleConfra } from "../../styles/titulo.style";
import confra from "../../assets/confra.png";

export const Confraternização = () => {
  const [show, setShow] = useState(false);
  const { confraDrinks, setConfraDrinks } = useConfra();
  const { idGenerator } = generators;

  const handleClick = (param) => {
    setShow(param);
  };

  const handleClickRemove = (id) => {
    const filtrado = confraDrinks.filter((item) => item.id !== id);

    setConfraDrinks(filtrado);
  };

  return (
    <>
      <Header>
        <img src={confra} alt="header" />
        <TitleConfra>Bebidas Escolhidas para sua Confraternização</TitleConfra>
        <p>
          <Link to="/home">voltar para Home</Link>
        </p>
      </Header>
      <Card className="Confraternização">
        <ul>
          {confraDrinks.length > 0 ? (
            confraDrinks.map((item) => (
              <li key={idGenerator(99999)}>
                {" "}
                <Img src={item.image_url} alt={item.name} />
                <p>
                  <span>Nome: </span> {item.name}
                </p>
                <p>
                  <span>Envasada em: </span> {item.first_brewed}
                </p>
                <p>
                  <span> Descrição: </span>
                  {item.description}
                </p>
                <p>
                  <span>Volume em lts: </span>
                  {item.volume.value}
                </p>
                {show && (
                  <div>
                    {" "}
                    <p>Combinações Gastrônomicas</p>
                    <Sublista>
                      {item.food_pairing.map((item) => (
                        <li key={idGenerator(99999)}>
                          <p>{item}</p>
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
            <TitleConfra>Escolha Algo em Home</TitleConfra>
          )}
        </ul>
      </Card>
    </>
  );
};
