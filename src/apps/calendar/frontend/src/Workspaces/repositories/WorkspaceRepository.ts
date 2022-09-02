import axios from 'axios';

export const WorkspacesSearcher = async ({queryKey}: any) => {
  const [, token] = queryKey;
  const {data} = await axios.get(`${process.env.REACT_APP_CALENDAR_BACKEND}/workspaces`, {
    headers: {
      'Authorization': token
    }
  });
  return data;
};
