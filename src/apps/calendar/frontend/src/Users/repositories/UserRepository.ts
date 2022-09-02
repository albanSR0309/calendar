import axios from 'axios';

export const UserAuthenticator = async (inputs: object) => {
  return await axios.post(
    `${process.env.REACT_APP_CALENDAR_BACKEND}/auth`,
    inputs
  );
}

export const UserCreator = async (id: string, inputs: object) => {
  return await axios.put(
    `${process.env.REACT_APP_CALENDAR_BACKEND}/users/${id}`,
    inputs
  );
}
