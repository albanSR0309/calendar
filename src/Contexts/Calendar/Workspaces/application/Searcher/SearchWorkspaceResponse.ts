import {Workspace} from '../../domain/Workspace';

export class SearchWorkspaceResponse {
  readonly value: Array<object>;

  constructor(workspaces: Array<Workspace> | null) {
    this.value = workspaces ? workspaces.map((workspace: Workspace) => workspace.toPrimitives()) : [];
  }
}
