import { Query } from '../../../../Shared/domain/Query';

type Params = {
  email: string;
  password: string;
};

export class AuthenticateUserQuery implements Query {
  email: string;
  password: string;

  constructor({email, password}: Params) {
    this.email = email;
    this.password = password;
  }
}
