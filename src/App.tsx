import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLogin from 'pages/AppLogin';

function App() {
  const isLoggedIn = false;

  return (
    <>
      {!isLoggedIn ? (
        <AppLogin />
      ) : (
        <div style={{ display: 'block', background: 'red' }}>LoggedIn</div>
      )}
    </>
  );
}

export default App;
