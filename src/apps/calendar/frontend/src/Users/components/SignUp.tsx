import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "../../shared/hooks/UserForm";
import {useUserContext} from "../../userContetxt";
import {useAuthentication} from "../useAuthentication";
import {v4 as uuidv4} from 'uuid';
import {Section} from "../../shared/components/Section";
import {Form} from "../../shared/components/Form";

const INITIAL_INPUTS = {id: uuidv4(), name: '', email: '', password: ''}

const SIGNUP_FORM_INPUTS = [
  {type: 'text', label: 'name', placeholder: 'Name'},
  {type: 'email', label: 'email', placeholder: 'Email'},
  {type: 'password', label: 'password', placeholder: 'Password'},
]

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate()
  const {inputs, handleInputChange} = useForm(INITIAL_INPUTS)
  const {isLogged}: any = useUserContext()
  const {userCreator} = useAuthentication()

  useEffect(() => {
    if (isLogged) navigate('../calendar')
  }, [isLogged, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    userCreator(inputs.id, inputs)
  }

  return (
    <Section
      sectionStyles="authentication"
      containerStyles="container-xs"
    >
      <Form
        title="Sign Up"
        caption="Please enter your personal data"
        inputs={SIGNUP_FORM_INPUTS}
        inputsData={inputs}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        buttonAriaLabel="Sign Up"
        small={<small>Do you already have an account? <Link to="/login"><strong>Log in</strong></Link></small>}
      />
    </Section>
  );
};
