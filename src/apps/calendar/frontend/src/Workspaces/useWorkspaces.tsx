import React, {useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {WorkspacesSearcher} from "./repositories/WorkspaceRepository";
import {useWorkspaceContext} from "../workspaceContext";
import {useUserContext} from "../userContetxt";

export const useWorkspaces = () => {
  const {user}: any = useUserContext()

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
