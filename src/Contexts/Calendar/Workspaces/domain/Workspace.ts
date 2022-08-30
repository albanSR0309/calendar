import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {WorkspaceName} from './WorkspaceName';
import {WorkspaceId} from '../../Shared/domain/Workspaces/WorkspaceId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class Workspace extends AggregateRoot {
  readonly id: WorkspaceId;
  readonly name: WorkspaceName;
  readonly userId: UserId;

  constructor(
    id: WorkspaceId,
    name: WorkspaceName,
    userId: UserId,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.userId = userId;
  }

  static create(
    id: WorkspaceId,
    name: WorkspaceName,
    userId: UserId
  ): Workspace {

    const workspace = new Workspace(id, name, userId);
    return workspace;
  }

  static fromPrimitives(plainData: {
    id: string,
    name: string,
    userId: string,
  }): Workspace {
    return new Workspace(
      new WorkspaceId(plainData.id),
      new WorkspaceName(plainData.name),
      new UserId(plainData.userId)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      userId: this.userId.value
    };
  }
}
