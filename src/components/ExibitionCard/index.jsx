import "./styles.css";
import { useState } from "react";
import { generators } from "../../lib/generators";
import { useCatalogue } from "../../providers/catalogo";
import { useCasorio } from "../../providers/casamento";
import { useForma } from "../../providers/formatura";
import { useConfra } from "../../providers/confraternização";
import {
  Button,
  ButtonCasa,
  ButtonConfra,
  SectionCard,
} from "../../styles/button.style";
import { Img } from "../../styles/img.style";
import { Card } from "../../styles/card.style";
import { Sublista } from "../../styles/sublista.style";

export const CardShow = () => {
  const [show, setShow] = useState(false);
  const { catalogue, apiGet } = useCatalogue();
  const { idGenerator } = generators;
  const { addCasoDrinks } = useCasorio();
  const { addConfraDrinks } = useConfra();
  const { addFormaDrinks } = useForma();

  const handleClick = (param) => {
    setShow(param);
  };

  const handleClickCas = (idCas) => {
    const chosen = catalogue.find((item) => item.id === idCas);
    addCasoDrinks(chosen);
  };

  const handleClickConfra = (idCas) => {
    const chosen = catalogue.find((item) => item.id === idCas);
    addConfraDrinks(chosen);
  };
  const handleClickForma = (idCas) => {
    const chosen = catalogue.find((item) => item.id === idCas);
    addFormaDrinks(chosen);
  };

  const handleClikList = () => {
    apiGet();
  };

  return (
    <Card className="ExbitionCard">
      <Button onClick={handleClikList}>GERAR LISTA </Button>
      <ul id="point">
        {catalogue.map((item) => (
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
                <p>Cominações Gastrônomicas</p>
                <Sublista>
                  {item.food_pairing.map((item) => (
                    <li key={idGenerator(99999)}>{item}</li>
                  ))}
                </Sublista>{" "}
                <Button onClick={() => handleClick(false)}>Fechar</Button>
              </div>
            )}
            <SectionCard>
              <ButtonCasa onClick={() => handleClickCas(item.id)}>
                Escolher para Casamento
              </ButtonCasa>
              <ButtonConfra onClick={() => handleClickConfra(item.id)}>
                Escolher para Confraternização{" "}
              </ButtonConfra>
              <Button onClick={() => handleClickForma(item.id)}>
                Escolher para Formatura{" "}
              </Button>
              <a href="#point">voltar ao topo</a>
            </SectionCard>
          </li>
        ))}
      </ul>
    </Card>
  );
};
