export class AppointmentAlreadyExists extends Error {
  constructor(id: string) {
    super(`Appointment ${id} already exists`);
  }
}
