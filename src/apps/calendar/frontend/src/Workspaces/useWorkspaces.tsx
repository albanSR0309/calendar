import {useEffect} from 'react';
import {useQuery} from 'react-query';
import {WorkspacesSearcher} from './repositories/WorkspaceRepository';
import {useWorkspaceContext} from '../shared/Contexts/workspaceContext';
import {useUser} from '../Users/useUser';

export const useWorkspaces = () => {
  const {user}: any = useUser();

  const {
    workspaces,
    setWorkspaces,
    selectedWorkspace,
    setSelectedWorkspace
  }: any = useWorkspaceContext();

  const {data} = useQuery(['workspaces', user?.token], WorkspacesSearcher);

  useEffect(() => {
    setWorkspaces(data);
  }, [data, setWorkspaces]);

  useEffect(() => {
    if (workspaces && !selectedWorkspace) {
      setSelectedWorkspace(workspaces[0].id);
    }
  }, [workspaces, selectedWorkspace, setSelectedWorkspace]);

  return {
    workspaces,
    selectedWorkspace,
    setSelectedWorkspace
  };
};
