import React from 'react';
import {AppointmentsList} from "./AppointmentsList";
import {useUserContext} from "../../userContetxt";
import {useAppointments} from "../useAppointments";

export const AppointmentsSummary = (): JSX.Element => {
  const {user}: any = useUserContext()
  const {todayAppointments}: any = useAppointments()

  return (
    <section className="container">
      <h3>¡Hello {user?.name}! 👋</h3>
      <div>These are <strong>today's events</strong> on your calendar.</div>
      <br/> <br/>
      <AppointmentsList appointments={todayAppointments}/>
    </section>
  );
};
