import React, { useContext } from 'react';
import StateContext from 'context/state-context';
import { Routes, Route } from 'react-router-dom';

import AppLayout from 'components/Layout';
import AppLogin from 'pages/AppLogin';
import Homepage from 'pages/Homepage';
import About from 'pages/About';

function App() {
  const stateCtx = useContext(StateContext);
  return (
    <>
      {!stateCtx.loggedIn ? (
        <AppLogin />
      ) : (
        <AppLayout>
          <Routes>
            <Route>
              <Route index element={<Homepage />}></Route>
              <Route path='about' element={<About />}></Route>
            </Route>
          </Routes>
        </AppLayout>
      )}
    </>
  );
}

export default App;
