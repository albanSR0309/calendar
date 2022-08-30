import {DomainEventClass} from '../../../../Shared/domain/DomainEvent';
import {DomainEventSubscriber} from '../../../../Shared/domain/DomainEventSubscriber';
import {UserCreatedDomainEvent} from '../../../Users/domain/UserCreatedDomainEvent';
import {WorkspaceCreator} from './WorkspaceCreator';
import {WorkspaceId} from '../../../Shared/domain/Workspaces/WorkspaceId';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {WorkspaceName} from '../../domain/WorkspaceName';
import {Uuid} from '../../../../Shared/domain/value-object/Uuid';

export class CreateWorkspaceOnUserCreated implements DomainEventSubscriber<UserCreatedDomainEvent> {
  constructor(private workspaceCreator: WorkspaceCreator) {
  }

  subscribedTo(): DomainEventClass[] {
    return [UserCreatedDomainEvent];
  }

  async on(domainEvent: UserCreatedDomainEvent) {

    const workspaceId = new WorkspaceId(Uuid.random().value);
    const workspaceName = new WorkspaceName('Personal');
    const workspaceUserId = new UserId(domainEvent.aggregateId);

    await this.workspaceCreator.run({
      workspaceId,
      workspaceName,
      workspaceUserId
    });
  }
}
