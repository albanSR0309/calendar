import axios from 'axios';

export async function AppointmentsSearcher({queryKey}: any) {
  const [, token, workspace] = queryKey;
  const {data} = await axios.get(`${process.env.REACT_APP_CALENDAR_BACKEND}/appointments?workspaceId=${workspace}`, {
    headers: {
      'Authorization': token
    }
  });
  return data;
}

export async function AppointmentCreator(appointment: any, token: string) {
  const id = appointment.id;
  const {data} = await axios.put(`${process.env.REACT_APP_CALENDAR_BACKEND}/appointments/${id}`, appointment, {
    headers: {
      'Authorization': token
    },
  });
  return data;
}

export async function AppointmentRemover(id: string, token: string) {
  const {data} = await axios.delete(`${process.env.REACT_APP_CALENDAR_BACKEND}/appointments/${id}`, {
    headers: {
      'Authorization': token
    },
  });
  return data;
}
