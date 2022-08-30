export class AppointmentNotExist extends Error {
  constructor() {
    super('The event does not exists');
  }
}
