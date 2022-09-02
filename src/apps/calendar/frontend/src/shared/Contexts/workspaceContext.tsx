import {useState, createContext, useContext} from 'react';

type Props = {
  children: React.ReactNode;
};

const WorkspaceProvider = ({children}: Props) => {
  const [workspaces, setWorkspaces] = useState();
  const [selectedWorkspace, setSelectedWorkspace] = useState();

  return (
    <WorkspaceContext.Provider value={{
      workspaces,
      setWorkspaces,
      selectedWorkspace,
      setSelectedWorkspace
    }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

const WorkspaceContext = createContext({});

const useWorkspaceContext = () => {
  return useContext(WorkspaceContext);
};

export {WorkspaceProvider, useWorkspaceContext};
