import React from 'react';
import {Navbar} from './shared/components/Navbar';
import {routes} from './routes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Index} from './shared/Contexts';

const App = (): JSX.Element => {
  return (
    <Index>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {routes.map((view, idx: number) => (
            <Route
              path={view.path}
              element={<view.component/>}
              key={idx}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Index>
  );
};

export default App;
