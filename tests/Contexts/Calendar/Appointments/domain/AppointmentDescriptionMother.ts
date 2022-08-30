import { AppointmentDescription } from '../../../../../src/Contexts/Calendar/Appointments/domain/AppointmentDescription';
import { WordMother } from '../../../Shared/domain/WordMother';

export class AppointmentDescriptionMother {
  static create(value: string): AppointmentDescription {
    return new AppointmentDescription(value);
  }

  static random(): AppointmentDescription {
    return this.create(WordMother.random());
  }
}
