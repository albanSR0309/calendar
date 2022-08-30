import {EventBus} from '../../../../Shared/domain/EventBus';
import {AppointmentId} from '../../../Shared/domain/Appointments/AppointmentId';
import {Appointment} from '../../domain/Appointment';

import {AppointmentRepository} from '../../domain/AppointmentRepository';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {AppointmentName} from '../../domain/AppointmentName';
import {AppointmentDescription} from '../../domain/AppointmentDescription';
import {AppointmentStartAt} from '../../domain/AppointmentStartAt';
import {AppointmentEndAt} from '../../domain/AppointmentEndAt';
import {WorkspaceId} from '../../../Shared/domain/Workspaces/WorkspaceId';

type Params = {
  eventId: AppointmentId;
  eventUserId: UserId;
  eventWorkspaceId: WorkspaceId;
  eventName: AppointmentName;
  eventDescription: AppointmentDescription;
  eventStartAt: AppointmentStartAt;
  eventEndAt: AppointmentEndAt;
};

export class AppointmentCreator {
  private repository: AppointmentRepository;
  private eventBus: EventBus;

  constructor(repository: AppointmentRepository, eventBus: EventBus) {
    this.repository = repository;
    this.eventBus = eventBus;
  }

  async run({
              eventId,
              eventUserId,
              eventWorkspaceId,
              eventName,
              eventDescription,
              eventStartAt,
              eventEndAt
            }: Params): Promise<void> {

    const appointment = Appointment.create(
      eventId,
      eventUserId,
      eventWorkspaceId,
      eventName,
      eventDescription,
      eventStartAt,
      eventEndAt
    );

    await this.repository.save(appointment);
    await this.eventBus.publish(appointment.pullDomainEvents());
  }
}
