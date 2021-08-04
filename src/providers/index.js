import { UserProvider } from "./user/user";

export const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
