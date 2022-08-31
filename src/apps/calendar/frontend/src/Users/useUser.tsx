import {useUserContext} from "../Contexts/userContetxt";

export const useUser = () => {
  const {user, setUser, isLogged, setIsLogged}: any = useUserContext();

  return {
    user,
    setUser,
    isLogged,
    setIsLogged
  }
}
