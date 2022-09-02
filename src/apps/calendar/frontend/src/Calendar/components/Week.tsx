import React, {Fragment} from 'react';
import Day from './Day';

type Props = {
  monthId: string;
  week: Array<any>;
  handlerAppointmentCreator: Function;
  appointments: any;
};

export const Week = ({monthId, week, handlerAppointmentCreator, appointments}: Props): JSX.Element => {
  return (
    <Fragment>
      {week.map((day: any, idx: number) => (
        <Day
          monthId={monthId}
          day={day}
          key={idx}
          handlerAppointmentCreator={handlerAppointmentCreator}
          appointments={appointments}
        />
      ))}
    </Fragment>
  );
};
