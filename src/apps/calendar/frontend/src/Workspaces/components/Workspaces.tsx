import React from 'react';
import {useWorkspaces} from '../useWorkspaces';

export const Workspaces = (): JSX.Element => {
  const {workspaces, selectedWorkspace, setSelectedWorkspace}: any = useWorkspaces();
  const handlerWorkspaceChange = (e: any) => {
    setSelectedWorkspace(e.target.value);
  };
  return (
    <div className="navbar-link">
      Workspace: &nbsp;
      <select
        className="input-inv"
        name="workspace"
        id="workspace"
        onChange={(e) => handlerWorkspaceChange(e)}
      >
        {selectedWorkspace && workspaces?.map((workspace: any, idx: any) => (
          <option
            key={idx}
            value={workspace.id}
            selected={selectedWorkspace.id === workspace.id}>
            {workspace.name}
          </option>
        ))}
      </select>
      <span>{selectedWorkspace?.name}</span></div>
  );
};
