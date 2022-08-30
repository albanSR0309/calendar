import { Nullable } from '../../../Shared/domain/Nullable';
import { Appointment } from './Appointment';
import { AppointmentId } from '../../Shared/domain/Appointments/AppointmentId';

export interface AppointmentRepository {
  save(event: Appointment): Promise<void>;
  search(id: AppointmentId): Promise<Nullable<Appointment>>;
  findSatisfying(filters: any): Promise<Nullable<Array<Appointment>>>;
  remove(id: AppointmentId): Promise<Nullable<void>>;
}
