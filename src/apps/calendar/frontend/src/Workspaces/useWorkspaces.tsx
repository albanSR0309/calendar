import React, {useEffect} from 'react';
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {WorkspacesSearcher} from './repositories/WorkspaceRepository';
import {useWorkspaceContext} from '../Contexts/workspaceContext';
import {useUser} from '../Users/useUser';

export const useWorkspaces = () => {
  const {user}: any = useUser()

  const {
    workspaces,
    setWorkspaces,
    selectedWorkspace,
    setSelectedWorkspace
  }: any = useWorkspaceContext()

  const queryClient = useQueryClient()

  const {data} = useQuery(['workspaces', user?.token], WorkspacesSearcher, )

  useEffect(() => {
    setWorkspaces(data)
  }, [data])

  useEffect(() => {
    if (workspaces && !selectedWorkspace) {
      setSelectedWorkspace(workspaces[0].id)
    }
  }, [workspaces, selectedWorkspace, setSelectedWorkspace]);



  return {
    workspaces,
    selectedWorkspace,
    setSelectedWorkspace
  }
}
