import {CreateWorkspaceCommand} from './CreateWorkspaceCommand';
import {CommandHandler} from '../../../../Shared/domain/CommandHandler';
import {WorkspaceCreator} from './WorkspaceCreator';
import {Command} from '../../../../Shared/domain/Command';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {WorkspaceId} from '../../../Shared/domain/Workspaces/WorkspaceId';
import {WorkspaceName} from '../../domain/WorkspaceName';

export class CreateWorkspaceCommandHandler implements CommandHandler<CreateWorkspaceCommand> {
  constructor(private appointmentCreator: WorkspaceCreator) {
  }

  subscribedTo(): Command {
    return CreateWorkspaceCommand;
  }

  async handle(command: CreateWorkspaceCommand): Promise<void> {
    const workspaceId = new WorkspaceId(command.id);
    const workspaceName = new WorkspaceName(command.name);
    const workspaceUserId = new UserId(command.userId);


    await this.appointmentCreator.run({
      workspaceId,
      workspaceName,
      workspaceUserId
    });
  }
}
