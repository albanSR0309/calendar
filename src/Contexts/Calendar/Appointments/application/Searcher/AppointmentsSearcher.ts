import { AppointmentRepository } from '../../domain/AppointmentRepository';
import { SearchAppointmentResponse } from './SearchAppointmentResponse';
import {UserId} from '../../../Shared/domain/Users/UserId';

export class AppointmentsSearcher {
  constructor(private repository: AppointmentRepository) {}

  async run(filters: any, id: string) {
    const userId = new UserId(id);
    const appointments = await this.repository.findSatisfying({...filters, userId});

    return new SearchAppointmentResponse(appointments);
  }
}
