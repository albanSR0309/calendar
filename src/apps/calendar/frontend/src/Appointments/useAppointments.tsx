import {useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {AppointmentCreator, AppointmentRemover, AppointmentsSearcher} from "./repositories/AppointmentsRepository";
import {useUser} from "../Users/useUser";
import {useAppointmentContext} from "../Contexts/AppointmentsContext";
import {useWorkspaces} from "../Workspaces/useWorkspaces";
import dayjs from "dayjs";

export const useAppointments = () => {
  const {user}: any = useUser()
  const {appointments, setAppointments, todayAppointments, setTodayAppointments}: any = useAppointmentContext()
  const queryClient = useQueryClient();
  const {selectedWorkspace} = useWorkspaces()

  const {data} = useQuery(['appointments', user?.token, selectedWorkspace], AppointmentsSearcher)

  useEffect(() => {
    setAppointments(data)
    setTodayAppointments(data?.filter(
      (evt: any) =>
        dayjs(evt.startAt).format("YYYY-MM-DD") === dayjs().format("YYYY-MM-DD")
    ))
  }, [data, setAppointments, setTodayAppointments])

  const putAppointment = useMutation((appointment) => AppointmentCreator(appointment, user?.token), {
    onSettled: () => {
      queryClient.invalidateQueries('appointments');
    }
  });

  const removeAppointment = useMutation((id: string) => AppointmentRemover(id, user?.token), {
    onSettled: () => {
      queryClient.invalidateQueries('appointments');
    }
  });

  return {
    appointments,
    todayAppointments,
    setAppointment: putAppointment.mutate,
    removeAppointment: removeAppointment.mutate
  }
}
