import {UserRepository} from '../../domain/UserRepository';
import {UserNotExist} from '../../domain/UserNotExist';
import {AuthenticateUserResponse} from './AuthenticateUserResponse';
import {UserEmail} from '../../domain/UserEmail';
import {User} from '../../domain/User';
import {UserPassword} from '../../domain/UserPassword';

export class UserAuthenticator {
  constructor(private repository: UserRepository) {
  }

  async run(email: string, password: string) {
    const userEmail = new UserEmail(email);
    const userPassword = new UserPassword(password);

    const user = await this.repository.findSatisfying(userEmail);

    if (!user) {
      throw new UserNotExist();
    }

    UserAuthenticator.ensureCredentialsAreValid(userPassword, user);

    return new AuthenticateUserResponse(user);
  }

  private static ensureCredentialsAreValid(userPassword: UserPassword, user: User) {
    if (!user.passwordMatches(userPassword)) {
      throw new UserNotExist();
    }
  }
}
