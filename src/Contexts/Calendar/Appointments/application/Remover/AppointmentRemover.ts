import { AppointmentRepository } from '../../domain/AppointmentRepository';
import { RemoveAppointmentResponse } from './RemoveAppointmentResponse';
import {AppointmentId} from '../../../Shared/domain/Appointments/AppointmentId';

export class AppointmentRemover {
  constructor(private repository: AppointmentRepository) {}

  async run(id: string) {
    const appointmentId = new AppointmentId(id);
    await this.repository.remove(appointmentId);

    return new RemoveAppointmentResponse({});
  }
}
