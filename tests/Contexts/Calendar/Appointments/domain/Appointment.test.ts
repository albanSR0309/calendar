import { CreateAppointmentCommandMother } from '../application/CreateAppointmentCommandMother';
import { AppointmentMother } from './AppointmentMother';
import { Appointment } from '../../../../../src/Contexts/Calendar/Appointments/domain/Appointment';
import { AppointmentIdMother } from '../../Shared/domain/Appointments/AppointmentIdMother';
import { AppointmentDescriptionMother } from './AppointmentDescriptionMother';
import {UserIdMother} from '../../Shared/domain/Users/UserIdMother';
import {AppointmentNameMother} from './AppointmentNameMother';
import {AppointmentStartAtMother} from './AppointmentStartAtMother';
import {AppointmentEndAtMother} from './AppointmentEndAtMother';
import {WorkspaceIdMother} from '../../Shared/domain/Workspaces/WorkspaceIdMother';

describe('Appointment', () => {

  it('should return a new appointment instance', () => {
    const command = CreateAppointmentCommandMother.random();

    const event = AppointmentMother.fromCommand(command);

    expect(event.id.value).toBe(command.id);
    expect(event.userId.value).toBe(command.userId);
    expect(event.workspaceId.value).toBe(command.workspaceId);
    expect(event.name.value).toBe(command.name);
    expect(event.description.value).toBe(command.description);
    expect(event.startAt.value).toBe(command.startAt);
    expect(event.endAt.value).toBe(command.endAt);
  });

  it('should record a AppointmentCreatedDomainEvent after its creation', () => {
    const event = Appointment.create(
      AppointmentIdMother.random(),
      UserIdMother.random(),
      WorkspaceIdMother.random(),
      AppointmentNameMother.random(),
      AppointmentDescriptionMother.random(),
      AppointmentStartAtMother.random(),
      AppointmentEndAtMother.random(),
    );

    const events = event.pullDomainEvents();

    expect(events).toHaveLength(1);
    expect(events[0].eventName).toBe('appointment.created');
  });
});
