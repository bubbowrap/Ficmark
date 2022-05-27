import React, { useContext } from 'react';
import StateContext from 'context/state-context';
import { Routes, Route } from 'react-router-dom';
import AppLogin from 'pages/AppLogin';

function App() {
  const stateCtx = useContext(StateContext);
  return (
    <>
      {!stateCtx.loggedIn ? (
        <AppLogin />
      ) : (
        <div style={{ display: 'block', background: 'red' }}>LoggedIn</div>
      )}
    </>
  );
}

export default App;
