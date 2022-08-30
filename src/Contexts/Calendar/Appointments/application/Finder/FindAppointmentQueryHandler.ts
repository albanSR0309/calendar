import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { FindAppointmentQuery } from './FindAppointmentQuery';
import { FindAppointmentResponse } from './FindAppointmentResponse';
import { Query } from '../../../../Shared/domain/Query';
import { AppointmentFinder } from './AppointmentFinder';

export class FindAppointmentQueryHandler
  implements QueryHandler<FindAppointmentQuery, FindAppointmentResponse> {
  constructor(private finder: AppointmentFinder) {}

  subscribedTo(): Query {
    return FindAppointmentQuery;
  }
  handle(_query: FindAppointmentQuery): Promise<FindAppointmentResponse> {
    return this.finder.run(_query.id);
  }
}
