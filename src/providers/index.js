import { UserProvider } from "./user/user";
import { CatalogoProvider } from "../providers/catalogo/";
import { FormaProvider } from "../providers/formatura/";
import { ConfraProvider } from "../providers/confraternização/";
import { CasorioProvider } from "../providers/casamento/index";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CasorioProvider>
        <FormaProvider>
          <ConfraProvider>
            <CatalogoProvider>{children}</CatalogoProvider>
          </ConfraProvider>
        </FormaProvider>
      </CasorioProvider>
    </UserProvider>
  );
};
