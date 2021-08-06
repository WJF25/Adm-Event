import { useState } from "react";
import { useForma } from "../../providers/formatura";
import { generators } from "../../lib/generators";
import { Link } from "react-router-dom";
import { Img } from "../../styles/img.style";
import { Button } from "../../styles/button.style";
import { Card } from "../../styles/card.style";
import { Sublista } from "../../styles/sublista.style";
import { TitleForma } from "../../styles/titulo.style";

export const Formatura = () => {
  const [show, setShow] = useState(false);
  const { formaDrinks } = useForma();
  const { idGenerator } = generators;

  const handleClick = (param) => {
    setShow(param);
  };
  console.log(formaDrinks);
  return (
    <Card className="Confraternização">
      <TitleForma>Bebidas Escolhidas para sua Formatura</TitleForma>
      <p>
        <Link to="/home">voltar para Home</Link>
      </p>
      <ul>
        {formaDrinks.map((item) => (
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
                    <li>
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
          </li>
        ))}
      </ul>
    </Card>
  );
};
