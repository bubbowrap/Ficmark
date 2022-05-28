import React, { createContext, useState, useEffect } from 'react';

const StateContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export const StateContextProvider = (props: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginToken = localStorage.getItem('loggedIn');
    if (loginToken === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <StateContext.Provider
      value={{
        loggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
