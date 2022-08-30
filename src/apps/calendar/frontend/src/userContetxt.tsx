import {useState, createContext, useContext, useEffect} from 'react'

type userType = {
  name: string;
  email: string;
  token: string;
}

const UserProvider = ({children}: any) => {
  const getSession = () => JSON.parse(window.sessionStorage.getItem('auth') as string)

  const [user, setUser] = useState<null | userType>(() => getSession())
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    setIsLogged(Boolean(user?.token))
  }, [user])

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      isLogged,
      setIsLogged
    }}>
      {children}
    </UserContext.Provider>
  )
}

const UserContext = createContext({})

const useUserContext = () => {
  return useContext(UserContext);
}

export {UserProvider, useUserContext};
