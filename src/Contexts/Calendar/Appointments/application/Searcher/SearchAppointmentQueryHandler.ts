import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { SearchAppointmentQuery } from './SearchAppointmentQuery';
import { SearchAppointmentResponse } from './SearchAppointmentResponse';
import { Query } from '../../../../Shared/domain/Query';
import { AppointmentsSearcher } from './AppointmentsSearcher';

export class SearchAppointmentQueryHandler
  implements QueryHandler<SearchAppointmentQuery, SearchAppointmentResponse> {
  constructor(private Searcher: AppointmentsSearcher) {}

  subscribedTo(): Query {
    return SearchAppointmentQuery;
  }
  handle(_query: SearchAppointmentQuery): Promise<SearchAppointmentResponse> {
    return this.Searcher.run(_query.filters, _query.userId);
  }
}
