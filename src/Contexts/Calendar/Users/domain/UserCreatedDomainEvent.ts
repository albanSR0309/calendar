import {DomainEvent} from '../../../Shared/domain/DomainEvent';

type CreateUserDomainEventBody = {
  readonly email: string;
  readonly name: string;
  readonly eventName: string;
  readonly id: string;
};

export class UserCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'user.created';

  readonly email: string;
  readonly name: string;

  constructor({
                id,
                email,
                name,
                eventId,
                occurredOn
              }: {
    id: string;
    eventId?: string;
    email: string;
    name: string;
    occurredOn?: Date;
  }) {
    super(UserCreatedDomainEvent.EVENT_NAME, id, eventId, occurredOn);
    this.email = email;
    this.name = name;
  }

  toPrimitive(): CreateUserDomainEventBody {
    const {email, name, aggregateId} = this;
    return {
      email,
      name,
      eventName: UserCreatedDomainEvent.EVENT_NAME,
      id: aggregateId
    };
  }

  static fromPrimitives(
    aggregateId: string,
    body: CreateUserDomainEventBody,
    eventId: string,
    occurredOn: Date
  ): DomainEvent {
    return new UserCreatedDomainEvent({
      id: aggregateId,
      email: body.email,
      name: body.name,
      eventId,
      occurredOn
    });
  }
}
