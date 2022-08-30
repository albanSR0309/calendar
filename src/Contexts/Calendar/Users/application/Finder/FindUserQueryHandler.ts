import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { FindUserQuery } from './FindUserQuery';
import { FindUserResponse } from './FindUserResponse';
import { Query } from '../../../../Shared/domain/Query';
import { UserFinder } from './UserFinder';

export class FindUserQueryHandler
  implements QueryHandler<FindUserQuery, FindUserResponse> {
  constructor(private finder: UserFinder) {}

  subscribedTo(): Query {
    return FindUserQuery;
  }
  handle(_query: FindUserQuery): Promise<FindUserResponse> {
    return this.finder.run(_query.id);
  }
}
