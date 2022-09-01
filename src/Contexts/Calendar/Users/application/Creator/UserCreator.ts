import {EventBus} from '../../../../Shared/domain/EventBus';
import {UserRepository} from '../../domain/UserRepository';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {UserName} from '../../domain/UserName';
import {UserEmail} from '../../domain/UserEmail';
import {UserPassword} from '../../domain/UserPassword';
import {User} from '../../domain/User';

type Params = {
  userId: UserId;
  userName: UserName;
  userEmail: UserEmail;
  userPassword: UserPassword;
};

export class UserCreator {
  private repository: UserRepository;
  private eventBus: EventBus;

  constructor(repository: UserRepository, eventBus: EventBus) {
    this.repository = repository;
    this.eventBus = eventBus;
  }

  async run({userId, userName, userEmail, userPassword}: Params): Promise<void> {

    const existUser = await this.repository.findSatisfying(userEmail);

    if (existUser) {
      throw new Error();
    }

    const user = User.create(userId, userName, userEmail, userPassword);

    await this.repository.save(user);
    await this.eventBus.publish(user.pullDomainEvents());
  }
}
