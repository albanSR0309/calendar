import {DateMother} from '../../../Shared/domain/DateMother';
import {AppointmentEndAt} from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentEndAt';

export class AppointmentEndAtMother {
  static create(value: Date): AppointmentEndAt {
    return new AppointmentEndAt(value);
  }

  static random(): AppointmentEndAt {
    return this.create(DateMother.random());
  }
}
