import React from 'react';
import {Navbar} from './shared/components/Navbar';
import {routes} from './routes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContextProviders} from './Contexts/ContextProviders';

const App = (): JSX.Element => {

  return (
    <ContextProviders>
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
    </ContextProviders>
  );
}

export default App;
