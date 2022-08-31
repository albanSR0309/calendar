import React, {Fragment, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Hero} from "../../shared/components/Hero";
import {useUser} from "../../Users/useUser";

export const Home = (): JSX.Element => {
  const {isLogged}: any = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) navigate('../calendar')
  }, [isLogged, navigate]);

  return (
    <Fragment>
      <Hero
        title="Take complete control of your personal time."
        caption="A simple calendar with workspaces to share appointments with other users"
        ariaLabel="Get started"
        href="/calendar"
      />
    </Fragment>
  );
};
