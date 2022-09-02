import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useUser} from '../../Users/useUser';

export const Hero = (): JSX.Element => {
  const {isLogged}: any = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('../calendar');
    }
  }, [isLogged, navigate]);

  return (
    <div className="hero">
      <div className="container hero-container">
        <h1>Take complete control of your personal time.</h1>
        <p>A simple calendar with workspaces to share appointments with other users</p>
        <Link to="/calendar">
          <button className="button button-primary">Get started</button>
        </Link>
      </div>
    </div>
  );
};

