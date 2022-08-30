import {CreateUserCommand} from './CreateUserCommand';
import {CommandHandler} from '../../../../Shared/domain/CommandHandler';
import {UserCreator} from './UserCreator';
import {Command} from '../../../../Shared/domain/Command';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {UserName} from '../../domain/UserName';
import {UserPassword} from '../../domain/UserPassword';

export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
  constructor(private userCreator: UserCreator) {
  }

  subscribedTo(): Command {
    return CreateUserCommand;
  }

  async handle(command: CreateUserCommand): Promise<void> {
    const userId = new UserId(command.id);
    const userName = new UserName(command.name);
    const userEmail = new UserName(command.email);
    const userPassword = new UserPassword(command.password);

    await this.userCreator.run({
      userId,
      userName,
      userEmail,
      userPassword
    });
  }
}
