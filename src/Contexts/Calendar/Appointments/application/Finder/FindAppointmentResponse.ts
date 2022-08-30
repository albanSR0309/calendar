import {Appointment} from '../../domain/Appointment';

export class FindAppointmentResponse {
  readonly value: object;

  constructor(event: Appointment) {
    this.value = event.toPrimitives();
  }
}
