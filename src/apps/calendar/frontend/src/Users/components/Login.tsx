import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "../../shared/hooks/UserForm";
import {useUserContext} from "../../userContetxt";
import {useAuthentication} from "../useAuthentication";
import {Section} from "../../shared/components/Section";
import {Form} from "../../shared/components/Form";

const INITIAL_INPUTS = {email: '', password: ''}

const LOGIN_FORM_INPUTS = [
  {type: 'email', label: 'email', placeholder: 'Email'},
  {type: 'password', label: 'password', placeholder: 'Password'},
]

export const Login = (): JSX.Element => {
  const {inputs, setInputs, handleInputChange} = useForm(INITIAL_INPUTS)
  const {isLogged}: any = useUserContext()
  const {userAuthentication} = useAuthentication()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) navigate('../summary')
  }, [isLogged, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInputs(INITIAL_INPUTS)
    userAuthentication(inputs)
  }

  return (
    <Section
      sectionStyles="authentication"
      containerStyles="container-xs"
    >
      <Form
        title="Login"
        caption="Please enter your personal data"
        inputs={LOGIN_FORM_INPUTS}
        inputsData={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        buttonAriaLabel="Log In"
        small={<small>You don't have an account yet? <Link to="/sign-up"><strong>Sign Up</strong></Link></small>}
      />
    </Section>
  );
};
