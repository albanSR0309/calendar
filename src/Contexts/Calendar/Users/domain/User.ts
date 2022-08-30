import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {UserId} from '../../Shared/domain/Users/UserId';
import {UserName} from './UserName';
import {UserEmail} from './UserEmail';
import {UserPassword} from './UserPassword';
import {UserCreatedDomainEvent} from './UserCreatedDomainEvent';

export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: UserEmail;
  password: UserPassword;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    password: UserPassword,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create(
    id: UserId,
    name: UserName,
    email: UserEmail,
    password: UserPassword,
  ): User {

    const user = new User(id, name, email, password);

    user.record(
      new UserCreatedDomainEvent({
        id: user.id.value,
        email: user.email.value,
        name: user.name.value,
      })
    );

    return user;
  }

  public passwordMatches(password: UserPassword) {
    return this.password.isEquals(password);
  }

  static fromPrimitives(plainData: {
    id: string,
    name: string,
    email: string,
    password: string
  }): User {
    return new User(
      new UserId(plainData.id),
      new UserName(plainData.name),
      new UserEmail(plainData.email),
      new UserPassword(plainData.password),
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    };
  }
}
