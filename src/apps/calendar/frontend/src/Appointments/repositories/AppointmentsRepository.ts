import axios from "axios";

export async function AppointmentsSearcher({queryKey}: any) {
  const [, token, workspace] = queryKey
  const {data} = await axios.get(`${process.env.REACT_APP_CALENDAR_BACKEND}/appointments?workspaceId=${workspace}`, {
    headers: {
      'Authorization': token
    }
  });
  return data
}

export async function AppointmentCreator(request: any) {
  const id = request.id
  const {data} = await axios.put(`${process.env.REACT_APP_CALENDAR_BACKEND}/appointments/${id}`, request, {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMmM0NWE2Ni0wN2IyLTRlMzgtYTNhMC0xZjcyODJhMDIwMzAiLCJpYXQiOjE2NjExOTk0NDd9.s2M1qYlXI0x-moKfssCevscSrl3tv8vFRov4LtXTp-0'
    },
  });
  return data
}

export async function AppointmentRemover(id: any) {
  const {data} = await axios.delete(`${process.env.REACT_APP_CALENDAR_BACKEND}/appointments/${id}`, {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMmM0NWE2Ni0wN2IyLTRlMzgtYTNhMC0xZjcyODJhMDIwMzAiLCJpYXQiOjE2NjExOTk0NDd9.s2M1qYlXI0x-moKfssCevscSrl3tv8vFRov4LtXTp-0'
    },
  });
  return data
}

