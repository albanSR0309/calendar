import {useUser} from "./useUser";
import {useNotifications} from '../Notifications/useNotifications';
import {UserAuthenticator, UserCreator} from './repositories/UserRepository';

export const useAuthentication = () => {
  const {setUser}: any = useUser()
  const {setErrorMessage} = useNotifications()

  const userAuthentication = async (inputs: object): Promise<void> => {
    try {
      const response = await UserAuthenticator(inputs)
      setUser(response.data)
      window.sessionStorage.setItem('auth', JSON.stringify(response.data))
    } catch (e) {
      setErrorMessage('Wrong password or email')
    }
  }

  const userCreator = async (id: string, inputs: object) => {
    try {
      await UserCreator(id, inputs)
      await userAuthentication(inputs)
    } catch (e) {
      setErrorMessage('This email is already registered')
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
