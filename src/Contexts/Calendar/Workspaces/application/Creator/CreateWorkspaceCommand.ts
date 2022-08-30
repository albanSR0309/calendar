import {Command} from '../../../../Shared/domain/Command';

type Params = {
  id: string;
  name: string;
  userId: string;
};

export class CreateWorkspaceCommand extends Command {
  id: string;
  name: string;
  userId: string;

  constructor({id, name, userId}: Params) {
    super();
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}
