import {DomainEvent} from '../../../Shared/domain/DomainEvent';

type CreateAppointmentDomainEventBody = {
  readonly userId: string;
  readonly name: string;
  readonly eventName: string;
  readonly id: string;
};

export class AppointmentCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'appointment.created';

  readonly userId: string;
  readonly name: string;

  constructor({
                id,
                userId,
                name,
                eventId,
                occurredOn
              }: {
    id: string;
    eventId?: string;
    userId: string;
    name: string;
    occurredOn?: Date;
  }) {
    super(AppointmentCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);
    this.userId = userId;
    this.name = name;
  }

  toPrimitive(): CreateAppointmentDomainEventBody {
    const {userId, name, aggregateId} = this;
    return {
      userId,
      name,
      eventName: AppointmentCreatedDomainEvent.EVENT_NAME,
      id: aggregateId
    };
  }

  static fromPrimitives(
    aggregateId: string,
    body: CreateAppointmentDomainEventBody,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new AppointmentCreatedDomainEvent({
      id: aggregateId,
      userId: body.userId,
      name: body.name,
      eventId,
      occurredOn
    });
  }
}
