import React, {useEffect} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAuthentication} from "../../Users/useAuthentication";
import {Brand} from "./Brand";
import {useUser} from "../../Users/useUser";
import {useWorkspaces} from "../../Workspaces/useWorkspaces";

export const Navbar = (): JSX.Element => {
  const {user, isLogged}: any = useUser()
  const {userLogout} = useAuthentication()
  const navigate = useNavigate()

  const handlerLogout = () => {
    userLogout()
    navigate('/')
  }


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

const Avatar = ({handlerLogout}: any) => {
  return (
    <div className="navbar-link" onClick={() => handlerLogout()}>
      <img
        src="https://eu.ui-avatars.com/api/?&amp;background=E6F4F1&amp;color=548687&amp;name=Alban Rodriguez"
        alt="avatar"
        className="navbar-avatar"
      />
    </div>
  )
}

const Workspaces = (): any => {
  const {workspaces, selectedWorkspace, setSelectedWorkspace}: any = useWorkspaces()
  const handlerWorkspaceChange = (e: any) => {
    setSelectedWorkspace(e.target.value)
  }
  return (
    <div className="navbar-link">Workspace: &nbsp;
      <select className="input-inv" name="workspace" id="workspace" onChange={(e) => handlerWorkspaceChange(e)}>
        {selectedWorkspace && workspaces?.map((workspace: any, idx: any) => (
          <option key={idx} value={workspace.id} selected={selectedWorkspace.id === workspace.id}>{workspace.name}</option>
        ))}
      </select>
      <span>{selectedWorkspace?.name}</span></div>
  )
}
