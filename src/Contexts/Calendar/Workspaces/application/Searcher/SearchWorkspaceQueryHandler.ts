import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { SearchWorkspaceQuery } from './SearchWorkspaceQuery';
import { SearchWorkspaceResponse } from './SearchWorkspaceResponse';
import { Query } from '../../../../Shared/domain/Query';
import { WorkspacesSearcher } from './WorkspacesSearcher';

export class SearchWorkspaceQueryHandler
  implements QueryHandler<SearchWorkspaceQuery, SearchWorkspaceResponse> {
  constructor(private Searcher: WorkspacesSearcher) {}

  subscribedTo(): Query {
    return SearchWorkspaceQuery;
  }
  handle(_query: SearchWorkspaceQuery): Promise<SearchWorkspaceResponse> {
    return this.Searcher.run(_query.userId);
  }
}
