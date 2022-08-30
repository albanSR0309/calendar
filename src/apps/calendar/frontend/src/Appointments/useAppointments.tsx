import React, {useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {AppointmentCreator, AppointmentRemover, AppointmentsSearcher} from "./repositories/AppointmentsRepository";
import {useUserContext} from "../userContetxt";
import {useAppointmentContext} from "../AppointmentsContext";
import {useWorkspaces} from "../Workspaces/useWorkspaces";
import dayjs from "dayjs";

export const useAppointments = () => {
  const {user}: any = useUserContext()
  const {appointments, setAppointments, todayAppointments, setTodayAppointments}: any = useAppointmentContext()
  const queryClient = useQueryClient();
  const {selectedWorkspace} = useWorkspaces()

  const {data} = useQuery(['appointments', user?.token, selectedWorkspace], AppointmentsSearcher,)

  useEffect(() => {
    setAppointments(data)
    setTodayAppointments(data?.filter(
      (evt: any) =>
        dayjs(evt.startAt).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")
    ))
  }, [data])

  const {mutate} = useMutation(AppointmentCreator, {
    onSettled: () => {
      queryClient.invalidateQueries('appointments');
    }
  });

  const removeAppointment = (id: string) => {
    queryClient.invalidateQueries('appointments')
    AppointmentRemover(id)
  }

  return {
    appointments,
    todayAppointments,
    setAppointment: mutate,
    removeAppointment
  }
}
