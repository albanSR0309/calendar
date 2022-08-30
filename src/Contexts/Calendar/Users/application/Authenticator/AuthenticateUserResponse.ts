import {User} from '../../domain/User';
import {UserToken} from '../../../Shared/domain/Users/UserToken';

export class AuthenticateUserResponse {
  readonly name: string;
  readonly email: string;
  readonly token: string;

  constructor(user: User) {
    this.name = user.name.value;
    this.email = user.email.value;
    this.token = AuthenticateUserResponse.generateAccessToken(user);
  }

  private static generateAccessToken(user: User) {
    return UserToken.generate(user.id.value).toPrimitives();
  }
}
