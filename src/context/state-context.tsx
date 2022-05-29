import React, { createContext, useState, useEffect } from 'react';

const StateContext = createContext({
  loggedIn: false,
  drawerOpen: true,
  login: () => {},
  logout: () => {},
  openDrawer: () => {},
  closeDrawer: () => {},
});

export const StateContextProvider = (props: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

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

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
    localStorage.setItem('drawerOpen', 'true');
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
    localStorage.removeItem('drawerOpen');
  };

  return (
    <StateContext.Provider
      value={{
        loggedIn: isLoggedIn,
        drawerOpen: isDrawerOpen,
        login: loginHandler,
        logout: logoutHandler,
        openDrawer: openDrawerHandler,
        closeDrawer: closeDrawerHandler,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
