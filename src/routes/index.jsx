import { Route, Switch } from "react-router-dom";
import { Casamento } from "../pages/Casamento/index";
import { Confraternização } from "../pages/Confraternização";
import { Formatura } from "../pages/Formatura";
import { Home } from "../pages/home";
import { Login } from "../pages/login";

export const Routes = () => {
  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/Formatura">
          <Formatura />
        </Route>
        <Route path="/Confraternização">
          <Confraternização />
        </Route>
        <Route path="/Casamento">
          <Casamento />
        </Route>
      </Switch>
    </div>
  );
};
