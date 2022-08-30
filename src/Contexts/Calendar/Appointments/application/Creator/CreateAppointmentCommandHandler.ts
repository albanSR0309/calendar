import {CreateAppointmentCommand} from './CreateAppointmentCommand';
import {CommandHandler} from '../../../../Shared/domain/CommandHandler';
import {AppointmentCreator} from './AppointmentCreator';
import {Command} from '../../../../Shared/domain/Command';
import {AppointmentId} from '../../../Shared/domain/Appointments/AppointmentId';
import {AppointmentName} from '../../domain/AppointmentName';
import {AppointmentDescription} from '../../domain/AppointmentDescription';
import {AppointmentStartAt} from '../../domain/AppointmentStartAt';
import {AppointmentEndAt} from '../../domain/AppointmentEndAt';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {WorkspaceId} from '../../../Shared/domain/Workspaces/WorkspaceId';

export class CreateAppointmentCommandHandler implements CommandHandler<CreateAppointmentCommand> {
  constructor(private appointmentCreator: AppointmentCreator) {
  }

  subscribedTo(): Command {
    return CreateAppointmentCommand;
  }

  async handle(command: CreateAppointmentCommand): Promise<void> {
    const eventId = new AppointmentId(command.id);
    const eventUserId = new UserId(command.userId);
    const eventWorkspaceId = new WorkspaceId(command.workspaceId);
    const eventName = new AppointmentName(command.name);
    const eventDescription = new AppointmentDescription(command.description);
    const eventStartAt = new AppointmentStartAt(command.startAt);
    const eventEndAt = new AppointmentEndAt(command.endAt);

    await this.appointmentCreator.run({
      eventId,
      eventUserId,
      eventWorkspaceId,
      eventName,
      eventDescription,
      eventStartAt,
      eventEndAt
    });
  }
}
