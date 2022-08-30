import React, {useState, useEffect} from "react";
import dayjs from "dayjs";

export default function Day({monthId, day, handlerAppointmentCreator, appointments}: any) {
  const [dayEvents, setDayEvents] = useState([]);

  useEffect(() => {
    const events = appointments?.filter(
      (evt: any) =>
        dayjs(evt.startAt).format("YYYY-MM-DD") === day.format("YYYY-MM-DD")
    );
    setDayEvents(events);

  }, [appointments, day]);

  const getDayOfMonthClass = () => {
    if (day.format("M") !== monthId) return 'day day-other-month'
    if (day.isToday()) return 'day day-today'
    if (day.isToday()) return 'day day-today'
    if (day.isBefore(dayjs())) return 'day day-passed'
    return 'day'
  }

  return (
    <div className={`${getDayOfMonthClass()}`}>
      <div className="day-number" onClick={() => handlerAppointmentCreator(day)}>
        <div>{day.format("DD")}</div>
      </div>
      <div>
        {dayEvents?.map((evt: any, idx) => (
          <div className="appointments" key={idx} onClick={() => handlerAppointmentCreator(day, evt)}>
            <div className="appointments-name">{evt.name}</div>
            <div className="appointments-date">
              {dayjs(evt.startAt).format("HH:mm")}
              -
              {dayjs(evt.endAt).format("HH:mm")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
