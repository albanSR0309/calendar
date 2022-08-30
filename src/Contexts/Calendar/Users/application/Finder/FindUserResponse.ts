import {User} from '../../domain/User';

export class FindUserResponse {
  readonly value: object;

  constructor(user: User) {
    this.value = FindUserResponse.deletePassoword(user);
  }

  private static deletePassoword(user: User) {
    const value = user.toPrimitives();
    //@ts-ignore
     delete value.password;
     return value;
  }
}
