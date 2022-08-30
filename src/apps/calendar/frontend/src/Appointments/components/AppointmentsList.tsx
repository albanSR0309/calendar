import React, {Fragment} from 'react';
import {Card} from "../../shared/components/Card";

type Props = {
  appointments: Array<object>;
};

export const AppointmentsList = ({appointments}: Props): JSX.Element => {

  return (
    <Fragment>
      {appointments && appointments.map((event: any) => (
        <Card
          name={event.name}
          description={event.description}
          startAt={event.startAt}
          endAt={event.endAt}
        />
      ))}
    </Fragment>
  );
};
