import { useState } from "react";
import { generators } from "../../lib/generators";
import { useCatalogue } from "../../providers/catalogo";
import { useCasorio } from "../../providers/casamento";
import { useForma } from "../../providers/formatura";
import { useConfra } from "../../providers/confraternização";

export const CardShow = () => {
  const [show, setShow] = useState(false);
  const { catalogue } = useCatalogue();
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

  return (
    <div className="ExbitionCard">
      <ul>
        {catalogue.map((item) => (
          <li key={idGenerator(99999)}>
            {" "}
            <img src={item.image_url} alt={item.name} />
            <p>Nome: {item.name}</p>
            <p>Envasada em: {item.first_brewed}</p>
            <p>Descrição: {item.description}</p>
            <p>Volume em lts:{item.volume.value}</p>
            {show && (
              <div>
                {" "}
                <p>Cominações Gastrônomicas</p>
                <ul>
                  {item.food_pairing.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>{" "}
                <button onClick={() => handleClick(false)}>Fechar</button>
              </div>
            )}
            <button onClick={() => handleClick(true)}>
              Com o quê essa bebida combina?{" "}
            </button>
            <button onClick={() => handleClickCas(item.id)}>
              Escolher para Casamento
            </button>
            <button onClick={() => handleClickConfra(item.id)}>
              Escolher para Confraternização{" "}
            </button>
            <button onClick={() => handleClickForma(item.id)}>
              Escolher para Formatura{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
