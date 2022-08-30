import { AppointmentCreatedDomainEvent } from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentCreatedDomainEvent';
import { Appointment } from '../../../../../src/Contexts/Calendar/Appointments/domain/Appointment';

export class AppointmentCreatedDomainEventMother {
  static create({
    id,
    eventId,
    userId,
    name,
    occurredOn
  }: {
    id: string;
    eventId?: string;
    userId: string;
    name: string;
    occurredOn?: Date;
  }): AppointmentCreatedDomainEvent {
    return new AppointmentCreatedDomainEvent({
      id,
      eventId,
      userId,
      name,
      occurredOn
    });
  }

  static fromEvent(event: Appointment): AppointmentCreatedDomainEvent {
    return new AppointmentCreatedDomainEvent({
      id: event.id.value,
      userId: event.userId.value,
      name: event.name.value
    });
  }

}
