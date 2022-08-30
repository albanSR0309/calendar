import {CreateAppointmentCommand} from '../../../../../src/Contexts/Calendar/Appointments/application/Creator/CreateAppointmentCommand';
import {Appointment} from '../../../../../src/Contexts/Calendar/Appointments/domain/Appointment';
import {AppointmentDescription} from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentDescription';
import {AppointmentName} from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentName';
import {AppointmentId} from '../../../../../src/Contexts/Calendar/Shared/domain/Appointments/AppointmentId';
import {AppointmentIdMother} from '../../Shared/domain/Appointments/AppointmentIdMother';
import {AppointmentDescriptionMother} from './AppointmentDescriptionMother';
import {AppointmentNameMother} from './AppointmentNameMother';
import {UserId} from '../../../../../src/Contexts/Calendar/Shared/domain/Users/UserId';
import {AppointmentStartAt} from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentStartAt';
import {AppointmentEndAt} from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentEndAt';
import {AppointmentStartAtMother} from './AppointmentStartAtMother';
import {AppointmentEndAtMother} from './AppointmentEndAtMother';
import {UserIdMother} from '../../Shared/domain/Users/UserIdMother';
import {WorkspaceIdMother} from '../../Shared/domain/Workspaces/WorkspaceIdMother';
import {WorkspaceId} from '../../../../../src/Contexts/Calendar/Shared/domain/Workspaces/WorkspaceId';

export class AppointmentMother {
  static create(
    id: AppointmentId,
    userId: UserId,
    workspaceId: WorkspaceId,
    name: AppointmentName,
    description: AppointmentDescription,
    startAt: AppointmentStartAt,
    endAt: AppointmentEndAt,
  ): Appointment {
    return new Appointment(id, userId, workspaceId, name, description, startAt, endAt);
  }

  static fromCommand(command: CreateAppointmentCommand): Appointment {
    return this.create(
      AppointmentIdMother.create(command.id),
      UserIdMother.create(command.userId),
      WorkspaceIdMother.create(command.workspaceId),
      AppointmentNameMother.create(command.name),
      AppointmentDescriptionMother.create(command.description),
      AppointmentStartAtMother.create(command.startAt),
      AppointmentEndAtMother.create(command.endAt)
    );
  }

  static random(): Appointment {
    return this.create(
      AppointmentIdMother.random(),
      UserIdMother.random(),
      WorkspaceIdMother.random(),
      AppointmentNameMother.random(),
      AppointmentDescriptionMother.random(),
      AppointmentStartAtMother.random(),
      AppointmentEndAtMother.random()
    );
  }
}
