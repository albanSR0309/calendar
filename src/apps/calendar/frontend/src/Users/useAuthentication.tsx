import UserRepository from './repositories/UserRepository';
import {useUserContext} from "../userContetxt";

export const useAuthentication = () => {
  const {setUser}: any = useUserContext()

  const userAuthentication = async (inputs: object): Promise<void> => {
    try {
      const response = await UserRepository.Authenticator(inputs)
      setUser(response.data)
      window.sessionStorage.setItem('auth', JSON.stringify(response.data))
    } catch (e) {

    }
  }

  const userCreator = async (id: string, inputs: object) => {
    try {
      await UserRepository.Creator(id, inputs)
      await userAuthentication(inputs)
    } catch (e) {

    }
  }

  const userLogout = (): void => {
    setUser(null)
    window.sessionStorage.removeItem('auth')
  }

  return {
    userAuthentication,
    userCreator,
    userLogout
  }
}
