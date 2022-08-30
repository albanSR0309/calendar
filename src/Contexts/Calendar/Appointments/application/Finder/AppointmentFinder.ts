import { AppointmentRepository } from '../../domain/AppointmentRepository';
import { AppointmentNotExist } from '../../domain/AppointmentNotExist';
import { FindAppointmentResponse } from './FindAppointmentResponse';
import {AppointmentId} from '../../../Shared/domain/Appointments/AppointmentId';

export class AppointmentFinder {
  constructor(private repository: AppointmentRepository) {}

  async run(id: string) {
    const appointmentId = new AppointmentId(id);
    const appointment = await this.repository.search(appointmentId);

    if (!appointment) {
      throw new AppointmentNotExist();
    }

    return new FindAppointmentResponse(appointment);
  }
}
