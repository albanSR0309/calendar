import React, {Fragment} from "react";
import Day from "./Day";

export default function Month({monthId, month, handlerAppointmentCreator, appointments}: any) {

  return (
    <Fragment>
      <div className="month-calendar-header">
        {month[0].map((day: any, idx: number) => (
          <div key={idx}>
            {day.format("dddd")}
          </div>
        ))}
      </div>
      <div className="month-calendar">
        {month.map((week: any, i: number) => (
          <Fragment key={i}>
            {week.map((day: any, idx: number) => (
              <Day monthId={monthId} day={day} key={idx} handlerAppointmentCreator={handlerAppointmentCreator} appointments={appointments}/>
            ))}
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
}
