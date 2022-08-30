import React from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {AppointmentCreator, AppointmentRemover, AppointmentsSearcher} from "../Appointments/repositories/AppointmentsRepository";
import {useUserContext} from "../userContetxt";

export const useUser = () => {
  const {user, isLogged}: any = useUserContext();
  const queryClient = useQueryClient();

  const {  data  } = useQuery(['appointments', user?.token], AppointmentsSearcher, {
    onError: (error) => console.log('Error')
  })

  const mutate = useMutation(AppointmentCreator, {
    onSettled: () => {
      queryClient.invalidateQueries('appointments');
    }
  });

  const removeAppointment = (id: string) => {
    AppointmentRemover(id)
    console.log('ddd')
    queryClient.invalidateQueries('appointments')
    queryClient.removeQueries('appointments')
  }

  return {
    user,
    isLogged,
    appointments: data,
    setAppointments: mutate,
    removeAppointment
  }
}
