import {useState} from 'react';

export const useForm = (initialInputs: object) => {
  const [inputs, setInputs] = useState<any>(initialInputs);

  const handleInputChange = (e: any) => {
    setInputs((inputs: any) => ({...inputs, [e.target.name]: e.target.value}))
  }

  return {
    inputs,
    setInputs,
    handleInputChange,
  }
}

