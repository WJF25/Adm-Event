import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {useUser} from '../../providers/user/user'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const schema = yup.object().shape({
  nome: yup.string().required("Nome obrigatório").,
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
  const { addUser } = useUser();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    const { email, nome } = data;    
    localStorage.setItem("@Event:e-mail", JSON.stringify(email));
    localStorage.setItem("@Event:e-mail", JSON.stringify(nome));
    addUser(nome);
    return history.push("/home");
  };

  return (
    <div>
      <h1 className="tituloLogin">Faça seu Login </h1>
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
        <TextField label="Password" name="Password" {...register("password")} />
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </form>
    </div>
  );
};
