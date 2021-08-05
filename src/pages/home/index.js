import { CardShow } from "../../components/ExibitionCard";
import { useCatalogue } from "../../providers/catalogo";

export const Home = () => {
  const { catalogue } = useCatalogue();
  console.log(catalogue);

  return <CardShow />;
};

//tela home precisa ter o link para as pages formatura-confraternização-casamento
//essas páginas terão seu próprios states que receberão a escolha das pessoas
//juntamente com o botão de remover
//verificar se tem o email no local Storage - se não tiver redirecionar pra login
