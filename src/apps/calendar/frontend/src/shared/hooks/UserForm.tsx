import React, {useState} from 'react';

export const useForm = (initialInputs: object) => {
  const [inputs, setInputs] = useState<any>(initialInputs);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((oldInputs: any) => ({...oldInputs, [e.target.name]: e.target.value}));
  };

  return {
    inputs,
    setInputs,
    handleInputChange,
  };
};
