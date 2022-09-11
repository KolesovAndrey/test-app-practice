import React, { useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // TODO сделать регистрацию и логин
  const loginHandler = () => {
    console.log('login handler from context');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    console.log('logout handler from context');
    setIsLoggedIn(false);
  };

  const authContextValue = {
    isLoggedIn,
    loginHandler,
    logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
