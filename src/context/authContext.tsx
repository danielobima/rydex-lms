import { createContext, FC, ReactNode, useEffect, useState } from "react";
import checkAuth, { UserDetails } from "../api/auth/checkAuth";

type AuthContext = {
  loggedIn: boolean;
  user?: UserDetails;
  setUser: (user: UserDetails) => void;
  setLoggedIn: (loggedIn: boolean) => void;
};

type Props = {
  children: ReactNode | ReactNode[];
};
export const AuthContext = createContext<AuthContext>({
  loggedIn: false,
  setUser: () => {},
  setLoggedIn: () => {},
});

const AuthProvider: FC<Props> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<UserDetails>();

  useEffect(() => {
    checkAuth().then((response) => {
      setLoggedIn(response.loggedIn);
      if (response.loggedIn) {
        setUser(response.user);
      }
    });
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, user, setUser, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
