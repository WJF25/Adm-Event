import { useState } from "react";
import { useForma } from "../../providers/formatura";
import { generators } from "../../lib/generators";
import { Link, Redirect } from "react-router-dom";
import { Img } from "../../styles/img.style";
import { Button, ButtonRemove } from "../../styles/button.style";
import { Card } from "../../styles/card.style";
import { Sublista } from "../../styles/sublista.style";
import { Header, TitleForma } from "../../styles/titulo.style";
import headerformatura from "../../assets/headerformatura.png";
import { useUser } from "../../providers/user/user";

export const Formatura = () => {
  const [show, setShow] = useState(false);
  const { formaDrinks, setFormaDrinks } = useForma();
  const { idGenerator } = generators;
  const { auth } = useUser();

  const handleClick = (param) => {
    setShow(param);
  };

  const handleClickRemove = (id) => {
    const filtrado = formaDrinks.filter((item) => item.id !== id);

    setFormaDrinks(filtrado);
  };

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header>
        <img src={headerformatura} alt="header" />
        <TitleForma>Bebidas Escolhidas para sua Formatura</TitleForma>
        <p>
          <Link to="/home">voltar para Home</Link>
        </p>
      </Header>
      <Card className="Confraternização">
        <ul>
          {formaDrinks.length > 0 ? (
            formaDrinks.map((item) => (
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
                  <p>
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
            <TitleForma>Escolha uma beer em Home</TitleForma>
          )}
        </ul>
      </Card>
    </>
  );
};
