import React from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {AppointmentCreator, AppointmentRemover, AppointmentsSearcher} from "../Appointments/repositories/AppointmentsRepository";
import {useUserContext} from "../Contexts/userContetxt";

export const useUser = () => {
  const {user, isLogged}: any = useUserContext();

  return {
    user,
    isLogged
  }
}
