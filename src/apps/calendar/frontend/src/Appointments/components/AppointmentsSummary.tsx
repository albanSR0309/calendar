import React, {useState, useEffect} from 'react';
import {AppointmentsList} from "./AppointmentsList";
import {useUser} from "../../Users/useUser";
import {useAppointments} from "../useAppointments";
import {AppointmentCreatorModal} from "./AppointmentCreatorModal";
import {useCalendar} from "../../Calendar/useCalendar";
import {useNavigate} from "react-router-dom";

export const AppointmentsSummary = (): JSX.Element => {
  const {user}: any = useUser()
  const {todayAppointments}: any = useAppointments()
  const [createAppointmentModal, setCreateAppointmentModal] = useState(false)
  const {
    selectedDay,
    setSelectedDay,
    selectedEvent,
    setSelectedEvent,
  } = useCalendar()
  const {setAppointment, removeAppointment}: any = useAppointments()
  const {isLogged}: any = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) navigate('/login')
  }, [isLogged, navigate]);

  const handlerCreate = (e: any) => {
    console.log(e)
    setSelectedDay(e.startAt)
    setSelectedEvent(e)
    setCreateAppointmentModal(true)
  }

  return (
    <section className="container">
      <h3>¡Hello {user?.name}! 👋</h3>
      <div>These are <strong>today's events</strong> on your calendar.</div>
      <AppointmentsList
        appointments={todayAppointments}
        emptyDataMessage="There are no events for today."
        onClick={handlerCreate}
      />
      {createAppointmentModal &&
        <AppointmentCreatorModal
          viewModal={setCreateAppointmentModal}
          selectedDay={selectedDay}
          selectedEvent={selectedEvent}
          setAppointments={setAppointment}
          removeAppointment={removeAppointment}
        />}
    </section>
  );
};
