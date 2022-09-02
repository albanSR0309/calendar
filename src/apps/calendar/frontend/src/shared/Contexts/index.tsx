import React from 'react';
import {UserProvider} from './userContetxt';
import {AppointmentsProvider} from './AppointmentsContext';
import {WorkspaceProvider} from './workspaceContext';
import {NotificationsProvider} from './notificationsContext';

type Props = {
  children: React.ReactNode
};

export const Index = ({children}: Props): JSX.Element =>
  (
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
