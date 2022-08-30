import axios from 'axios';

async function Authenticator(inputs: object) {
  return await axios.post(
    `${process.env.REACT_APP_CALENDAR_BACKEND}/auth`,
    inputs
  );
}

async function Creator(id: string, inputs: object) {
  return await axios.put(
    `${process.env.REACT_APP_CALENDAR_BACKEND}/users/${id}`,
    inputs
  );
}

export default {
  Authenticator,
  Creator
}
