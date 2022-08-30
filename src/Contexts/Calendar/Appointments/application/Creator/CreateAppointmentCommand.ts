import {Command} from '../../../../Shared/domain/Command';

type Params = {
  id: string;
  userId: string;
  workspaceId: string;
  name: string;
  description: string;
  startAt: Date;
  endAt: Date;
};

export class CreateAppointmentCommand extends Command {
  id: string;
  userId: string;
  workspaceId: string;
  name: string;
  description: string;
  startAt: Date;
  endAt: Date;

  constructor({id, userId, workspaceId, name, description, startAt, endAt}: Params) {
    super();
    this.id = id;
    this.userId = userId;
    this.workspaceId = workspaceId;
    this.name = name;
    this.description = description;
    this.startAt = startAt;
    this.endAt = endAt;
  }
}
