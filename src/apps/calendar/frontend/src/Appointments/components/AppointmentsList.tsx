import React from 'react';
import {Card} from '../../shared/components/Card';

type Props = {
  appointments: Array<object>;
  emptyDataMessage: string;
  onClick: any;
};

export const AppointmentsList = ({appointments, emptyDataMessage, onClick}: Props): JSX.Element =>

  (
    <div className="cards-list">
      {!appointments?.length && emptyDataMessage && <p>{emptyDataMessage}</p>}
      {appointments && appointments.map((appointment: any) => (
        <Card
          name={appointment.name}
          description={appointment.description}
          startAt={appointment.startAt}
          endAt={appointment.endAt}
          onClick={() => onClick(appointment)}
        />
      ))}
    </div>
  );
