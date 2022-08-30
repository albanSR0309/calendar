import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {AppointmentCreatedDomainEvent} from './AppointmentCreatedDomainEvent';
import {AppointmentName} from './AppointmentName';
import {AppointmentDescription} from './AppointmentDescription';
import {AppointmentId} from '../../Shared/domain/Appointments/AppointmentId';
import {UserId} from '../../Shared/domain/Users/UserId';
import {AppointmentStartAt} from './AppointmentStartAt';
import {AppointmentEndAt} from './AppointmentEndAt';
import {WorkspaceId} from '../../Shared/domain/Workspaces/WorkspaceId';

export class Appointment extends AggregateRoot {
  readonly id: AppointmentId;
  readonly userId: UserId;
  readonly workspaceId: WorkspaceId;
  readonly name: AppointmentName;
  readonly description: AppointmentDescription;
  readonly startAt: AppointmentStartAt;
  readonly endAt: AppointmentEndAt;

  constructor(
    id: AppointmentId,
    userId: UserId,
    workspaceId: WorkspaceId,
    name: AppointmentName,
    description: AppointmentDescription,
    startAt: AppointmentStartAt,
    endAt: AppointmentEndAt
  ) {
    super();
    this.id = id;
    this.userId = userId;
    this.workspaceId = workspaceId;
    this.name = name;
    this.description = description;
    this.startAt = startAt;
    this.endAt = endAt;
  }

  static create(
    id: AppointmentId,
    userId: UserId,
    workspaceId: WorkspaceId,
    name: AppointmentName,
    description: AppointmentDescription,
    startAt: AppointmentStartAt,
    endAt: AppointmentEndAt
  ): Appointment {

    const event = new Appointment(id, userId, workspaceId, name, description, startAt, endAt);

    event.record(
      new AppointmentCreatedDomainEvent({
        id: event.id.value,
        userId: event.userId.value,
        name: event.name.value,
      })
    );

    return event;
  }

  static fromPrimitives(plainData: {
    id: string,
    userId: string,
    workspaceId: string,
    name: string,
    description: string,
    startAt: Date
    endAt: Date
  }): Appointment {
    return new Appointment(
      new AppointmentId(plainData.id),
      new UserId(plainData.userId),
      new WorkspaceId(plainData.workspaceId),
      new AppointmentName(plainData.name),
      new AppointmentDescription(plainData.description),
      new AppointmentStartAt(plainData.startAt),
      new AppointmentEndAt(plainData.endAt),
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      userId: this.userId.value,
      workspaceId: this.workspaceId.value,
      name: this.name.value,
      description: this.description.value,
      startAt: this.startAt.value,
      endAt: this.endAt.value
    };
  }
}
