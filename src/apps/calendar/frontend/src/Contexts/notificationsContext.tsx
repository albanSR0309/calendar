import {useState, createContext, useContext, useEffect} from 'react'

const NotificationsProvider = ({children}: any) => {
  const [errorMessage, setErrorMessage] = useState(false);

  return (
    <NotificationsContext.Provider value={{
      errorMessage,
      setErrorMessage
    }}>
      {children}
    </NotificationsContext.Provider>
  )
}

const NotificationsContext = createContext({})

const useNotificationsContext = () => {
  return useContext(NotificationsContext);
}

export {NotificationsProvider, useNotificationsContext};
