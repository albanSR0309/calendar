import {EventBus} from '../../../../Shared/domain/EventBus';
import {WorkspaceId} from '../../../Shared/domain/Workspaces/WorkspaceId';
import {Workspace} from '../../domain/Workspace';
import {WorkspaceRepository} from '../../domain/WorkspaceRepository';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {WorkspaceName} from '../../domain/WorkspaceName';

type Params = {
  workspaceId: WorkspaceId;
  workspaceName: WorkspaceName;
  workspaceUserId: UserId;
};

export class WorkspaceCreator {
  private repository: WorkspaceRepository;
  private eventBus: EventBus;

  constructor(repository: WorkspaceRepository, eventBus: EventBus) {
    this.repository = repository;
    this.eventBus = eventBus;
  }

  async run({
              workspaceId,
              workspaceName,
              workspaceUserId
            }: Params): Promise<void> {

    const workspace = Workspace.create(
      workspaceId,
      workspaceName,
      workspaceUserId,
    );

    await this.repository.save(workspace);
    await this.eventBus.publish(workspace.pullDomainEvents());
  }
}
