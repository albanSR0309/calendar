import { AppointmentName } from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class AppointmentNameMother {
  static create(value: string): AppointmentName {
    return new AppointmentName(value);
  }

  static random(): AppointmentName {
    return this.create(WordMother.random());
  }
}
