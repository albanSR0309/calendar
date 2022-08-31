import {useState, createContext, useContext} from 'react'

const WorkspaceProvider = ({children}: any) => {
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
  )
}

const WorkspaceContext = createContext({})

const useWorkspaceContext = () => {
  return useContext(WorkspaceContext);
}

export {WorkspaceProvider, useWorkspaceContext};
