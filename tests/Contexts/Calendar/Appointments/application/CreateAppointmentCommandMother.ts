import { AppointmentDescriptionMother } from '../domain/AppointmentDescriptionMother';
import { AppointmentIdMother } from '../../Shared/domain/Appointments/AppointmentIdMother';
import { AppointmentNameMother } from '../domain/AppointmentNameMother';
import { CreateAppointmentCommand } from '../../../../../src/Contexts/Calendar/Appointments/application/Creator/CreateAppointmentCommand';
import {UserIdMother} from '../../Shared/domain/Users/UserIdMother';
import {AppointmentStartAtMother} from '../domain/AppointmentStartAtMother';
import {AppointmentEndAtMother} from '../domain/AppointmentEndAtMother';
import {WorkspaceIdMother} from '../../Shared/domain/Workspaces/WorkspaceIdMother';

export class CreateAppointmentCommandMother {
  static create(
    id: string,
    userId: string,
    workspaceId: string,
    name: string,
    description: string,
    startAt: Date,
    endAt: Date
  ): CreateAppointmentCommand {
    return new CreateAppointmentCommand({
      id,
      userId,
      workspaceId,
      name,
      description,
      startAt,
      endAt});
  }

  static random(): CreateAppointmentCommand {
    return this.create(
      AppointmentIdMother.random().value,
      UserIdMother.random().value,
      WorkspaceIdMother.random().value,
      AppointmentNameMother.random().value,
      AppointmentDescriptionMother.random().value,
      AppointmentStartAtMother.random().value,
      AppointmentEndAtMother.random().value,
    );
  }
}
