import React, {Fragment} from 'react';
import {MonthHeader} from './MonthHeader';
import {Week} from './Week';

type Props = {
  monthId: string;
  month: Array<any>;
  handlerAppointmentCreator: Function,
  appointments: any
};

export default function Month({monthId, month, handlerAppointmentCreator, appointments}: Props) {

  return (
    <Fragment>
      <MonthHeader month={month[0]}/>
      <div className="month-calendar">
        {month.map((week: Array<any>, idx: number) => (
          <Week
            monthId={monthId}
            week={week}
            key={idx}
            handlerAppointmentCreator={handlerAppointmentCreator}
            appointments={appointments}/>
        ))}
      </div>
    </Fragment>
  );
}
