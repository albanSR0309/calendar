import {DateMother} from '../../../Shared/domain/DateMother';
import {AppointmentStartAt} from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentStartAt';

export class AppointmentStartAtMother {
  static create(value: Date): AppointmentStartAt {
    return new AppointmentStartAt(value);
  }

  static random(): AppointmentStartAt {
    return this.create(DateMother.random());
  }
}
