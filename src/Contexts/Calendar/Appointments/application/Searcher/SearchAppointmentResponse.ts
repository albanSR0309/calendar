import {Appointment} from '../../domain/Appointment';

export class SearchAppointmentResponse {
  readonly value: Array<object>;

  constructor(events: Array<Appointment> | null) {
    this.value = events ? events.map((event: Appointment) => event.toPrimitives()) : [];
  }
}
