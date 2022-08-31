import React, {useEffect} from "react";
import {useNotificationsContext} from '../Contexts/notificationsContext'

export const useNotifications = () => {
  const {errorMessage, setErrorMessage}: any = useNotificationsContext()

  useEffect(() => {
    if (errorMessage){
      const timer = setTimeout(() => {
        setErrorMessage(false)
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return {
    errorMessage,
    setErrorMessage
  }
}
