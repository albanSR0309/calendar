import { AppointmentId } from '../../../../../../src/Contexts/Calendar/Shared/domain/Appointments/AppointmentId';
import { UuidMother } from '../../../../Shared/domain/UuidMother';

export class AppointmentIdMother {
  static create(value: string): AppointmentId {
    return new AppointmentId(value);
  }

  static creator() {
    return () => AppointmentIdMother.random();
  }

  static random(): AppointmentId {
    return this.create(UuidMother.random());
  }
}
