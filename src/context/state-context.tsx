import React, { createContext, useState, useEffect } from 'react';

const StateContext = createContext({
  loggedIn: false,
  login: () => {},
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

  return (
    <StateContext.Provider
      value={{ loggedIn: isLoggedIn, login: loginHandler }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
