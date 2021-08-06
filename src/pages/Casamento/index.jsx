import { useState } from "react";
import { useCasorio } from "../../providers/casamento/index";
import { generators } from "../../lib/generators";
import { Link } from "react-router-dom";
import { Card } from "../../styles/card.style";
import { Img } from "../../styles/img.style";
import { Sublista } from "../../styles/sublista.style";
import { Button } from "../../styles/button.style";
import { TitleWedding } from "../../styles/titulo.style";

export const Casamento = () => {
  const [show, setShow] = useState(false);
  const { casaDrinks } = useCasorio();
  const { idGenerator } = generators;

  const handleClick = (param) => {
    setShow(param);
  };
  console.log(casaDrinks);
  return (
    <Card className="Casamento">
      <TitleWedding>Bebidas Escolhidas para o seu Casamento</TitleWedding>
      <p>
        <Link to="/home">voltar para Home</Link>
      </p>
      <ul>
        {casaDrinks.map((item) => (
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
                    <li key={idGenerator(99999)}>{item}</li>
                  ))}
                </Sublista>{" "}
                <Button onClick={() => handleClick(false)}>Fechar</Button>
              </div>
            )}
            <Button onClick={() => handleClick(true)}>
              Com o quê essa bebida combina?{" "}
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};
