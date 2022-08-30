import { WorkspaceRepository } from '../../domain/WorkspaceRepository';
import { SearchWorkspaceResponse } from './SearchWorkspaceResponse';
import {UserId} from '../../../Shared/domain/Users/UserId';

export class WorkspacesSearcher {
  constructor(private repository: WorkspaceRepository) {}

  async run(id: string) {
    const userId = new UserId(id);
    const workspaces = await this.repository.search(userId);

    return new SearchWorkspaceResponse(workspaces);
  }
}
