import { QueryHandler } from '../../../../Shared/domain/QueryHandler';
import { AppointmentEventQuery } from './AppointmentEventQuery';
import { RemoveAppointmentResponse } from './RemoveAppointmentResponse';
import { Query } from '../../../../Shared/domain/Query';
import { AppointmentRemover } from './AppointmentRemover';

export class RemoveAppointmentQueryHandler
  implements QueryHandler<AppointmentEventQuery, RemoveAppointmentResponse> {
  constructor(private finder: AppointmentRemover) {}

  subscribedTo(): Query {
    return AppointmentEventQuery;
  }
  handle(_query: AppointmentEventQuery): Promise<RemoveAppointmentResponse> {
    return this.finder.run(_query.id);
  }
}
