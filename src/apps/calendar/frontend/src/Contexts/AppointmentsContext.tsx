import React, {useState, createContext, useContext} from 'react'

const AppointmentsProvider = ({children}: any) => {
  const [appointments, setAppointments] = useState([]);
  const [todayAppointments, setTodayAppointments] = useState([]);

  return (
    <AppointmentContext.Provider value={{
      appointments,
      setAppointments,
      todayAppointments,
      setTodayAppointments
    }}>
      {children}
    </AppointmentContext.Provider>
  )
}

const AppointmentContext = createContext({})

const useAppointmentContext = () => {
  return useContext(AppointmentContext);
}

export {AppointmentsProvider, useAppointmentContext};
