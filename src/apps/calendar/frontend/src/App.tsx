import React from 'react';
import {Navbar} from './shared/components/Navbar';
import {routes} from './routes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {UserProvider} from './userContetxt';
import {AppointmentsProvider} from "./AppointmentsContext";
import {WorkspaceProvider} from "./workspaceContext";

const App = (): JSX.Element => {

  return (
    <UserProvider>
      <WorkspaceProvider>
        <AppointmentsProvider>
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
        </AppointmentsProvider>
      </WorkspaceProvider>

    </UserProvider>
  );
}

export default App;
