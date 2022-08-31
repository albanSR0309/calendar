import React from 'react';
import {UserProvider} from './userContetxt';
import {AppointmentsProvider} from "./AppointmentsContext";
import {WorkspaceProvider} from "./workspaceContext";
import {NotificationsProvider} from "./notificationsContext";

type Props = {
  children: any
};

export const ContextProviders = ({children}: Props): JSX.Element => {
  return (
    <UserProvider>
      <NotificationsProvider>
        <WorkspaceProvider>
          <AppointmentsProvider>
            {children}
          </AppointmentsProvider>
        </WorkspaceProvider>
      </NotificationsProvider>
    </UserProvider>
  );
};
