import { Query } from '../../../../Shared/domain/Query';

type Params = {
  userId: string;
};

export class SearchWorkspaceQuery implements Query {
  userId: string;

  constructor({userId}: Params) {
    this.userId = userId;
  }
}
