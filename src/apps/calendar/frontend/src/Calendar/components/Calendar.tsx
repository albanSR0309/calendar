import React, {useState, Fragment, useEffect} from 'react';
import Month from './Month';
import {AppointmentCreatorModal} from '../../Appointments/components/AppointmentCreatorModal';
import {useCalendar} from '../useCalendar';
import {useNavigate} from 'react-router-dom';
import {useAppointments} from '../../Appointments/useAppointments';
import {useUser} from '../../Users/useUser';

export const Calendar = (): JSX.Element => {
  const {isLogged}: any = useUser();
  const navigate = useNavigate();

  const [createAppointmentModal, setCreateAppointmentModal] = useState(false);
  const {
    currenMonth,
    selectedDay,
    selectedEvent,
    handleNextMonth,
    handlePrevMonth,
    setSelectedEvent,
    setSelectedDay
  } = useCalendar();

  const {appointments, setAppointment, removeAppointment}: any = useAppointments();

  useEffect(() => {
    if (!isLogged) { navigate('/login'); }
  }, [isLogged, navigate]);

  const handlerAppointmentCreator = (day: any, event: any) => {
    setSelectedDay(day);
    setSelectedEvent(event);
    setCreateAppointmentModal(true);
  };

  return (
    <Fragment>
      <section className="container-xl">
        <div className="calendar-header">
          <div className="calendar-controls">
            <div className="button button-inverted button-xs" onClick={() => handlePrevMonth()}>Prev</div>
            <div className="button button-inverted button-xs" onClick={() => handleNextMonth()}>Next</div>
          </div>
          <h1 className="calendar-month">{currenMonth[1][0].format('MMMM')} {currenMonth[1][0].format('YYYY')}</h1>
        </div>
        <Month
          monthId={currenMonth[1][0].format('M')}
          month={currenMonth}
          handlerAppointmentCreator={handlerAppointmentCreator}
          appointments={appointments}
        />
      </section>
      {createAppointmentModal &&
        <AppointmentCreatorModal
          viewModal={setCreateAppointmentModal}
          selectedDay={selectedDay}
          selectedEvent={selectedEvent}
          setAppointments={setAppointment}
          removeAppointment={removeAppointment}
        />}
    </Fragment>
  );
};
