import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useUser } from "../../providers/user/user";
import { Redirect } from "react-router-dom";
import { WrapperLogin } from "../../styles/login.style";
import Brewdig from "../../assets/Brewdig.jpg";
import { TitleLogin } from "../../styles/titulo.style";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Senha precisa ter ao menos 8 caracteres, 1 letra maiuscula, 1 número e um caracter especial ex: %"
    ),
});

export const Login = () => {
  const classes = useStyles();
  const { addUser, auth, setAuth } = useUser();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, nome } = data;
    localStorage.setItem("@Event:e-mail", JSON.stringify(email));
    localStorage.setItem("@Event:nome", JSON.stringify(nome));
    addUser(nome);
    setAuth(true);
    return history.push("/home");
  };

  if (auth) {
    return <Redirect to="/home" />;
  }

  return (
    <WrapperLogin>
      <TitleLogin className="tituloLogin">
        Temos a bebida certa para o seu Evento{" "}
      </TitleLogin>
      <h2>
        Enquanto você escolhe tranquilamente pela nossa lista pode ir separando
        por evento suas bebidas escolhidas, com a possibilidade de as remover
        posteriormente caso mude de idéia.{" "}
        <span>Faça login para poder começar.</span>
      </h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p style={{ color: "red" }}>{errors.nome?.message}</p>
        <TextField label="nome" name="nome" {...register("nome")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <TextField label="E-mail" name="E-mail" {...register("email")} />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <TextField
          type="password"
          label="Password"
          name="Password"
          {...register("password")}
        />
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </form>
      <img src={Brewdig} alt="Brews" />
    </WrapperLogin>
  );
};
