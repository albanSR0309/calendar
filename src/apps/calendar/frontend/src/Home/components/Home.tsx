import React, {Fragment, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Hero} from "../../shared/components/Hero";
import {useUserContext} from "../../userContetxt";

export const Home = (): JSX.Element => {
  const {isLogged}: any = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) navigate('../calendar')
  }, [isLogged, navigate]);

  return (
    <Fragment>
      <Hero
        title="Take complete control of your personal time."
        caption="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, velit!"
        ariaLabel="Get started"
        href="/calendar"
      />
    </Fragment>
  );
};
