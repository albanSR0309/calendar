import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { AuthenticateUserQuery } from './AuthenticateUserQuery';
import { AuthenticateUserResponse } from './AuthenticateUserResponse';
import { Query } from '../../../../Shared/domain/Query';
import { UserAuthenticator } from './UserAuthenticator';

export class AuthenticateUserQueryHandler
  implements QueryHandler<AuthenticateUserQuery, AuthenticateUserResponse> {
  constructor(private authenticator: UserAuthenticator) {}

  subscribedTo(): Query {
    return AuthenticateUserQuery;
  }
  handle(_query: AuthenticateUserQuery): Promise<AuthenticateUserResponse> {
    return this.authenticator.run(_query.email, _query.password);
  }
}
