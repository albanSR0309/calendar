import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useAuthentication} from '../../Users/useAuthentication';
import {Brand} from './Brand';
import {useUser} from '../../Users/useUser';
import {Workspaces} from '../../Workspaces/components/Workspaces';
import {Avatar} from './Avatar';

export const Navbar = (): JSX.Element => {
  const {user, isLogged}: any = useUser();
  const {userLogout} = useAuthentication();
  const navigate = useNavigate();

  const handlerLogout = () => {
    userLogout();
    navigate('/');
  };

  return (
    <header>
      <div className="container-xl navbar-container">
        <div className="navbar">
          <Brand/>
          <NavLink to="./summary" className="navbar-link">Summary</NavLink>
          <NavLink to="./calendar" className="navbar-link">Calendar</NavLink>
          {isLogged && <Workspaces/>}
        </div>
        <nav className="navbar">
          {/* isLogged && <button className="button button-primary navbar-link">Add New Appointment</button> */}
          {user && <Avatar handlerLogout={handlerLogout}/>}
          {!isLogged && (
            <Link to="./login" className="navbar-link">
              <button className="button button-inverted">Log In</button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
