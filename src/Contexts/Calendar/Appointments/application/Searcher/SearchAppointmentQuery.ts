import { Query } from '../../../../Shared/domain/Query';

type Params = {
  filters: any;
  userId: string;
};

export class SearchAppointmentQuery implements Query {
  filters: any;
  userId: string;

  constructor({filters, userId}: Params) {
    this.filters = filters;
    this.userId = userId;
  }
}
