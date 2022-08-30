import { BackofficeBackendApp } from '../../../src/apps/backoffice/backend/BackofficeBackendApp';
import { BackofficeFrontendApp } from '../../../src/apps/backoffice/frontend/BackofficeFrontendApp';
import { CalendarBackendApp } from '../../../src/apps/calendar/backend/CalendarBackendApp';

export class Applications {
  private static backofficeBackend: BackofficeBackendApp;
  private static backofficeFrontend: BackofficeFrontendApp;
  private static calendar: CalendarBackendApp;

  static async start() {
    this.backofficeBackend = new BackofficeBackendApp();
    this.backofficeFrontend = new BackofficeFrontendApp();
    this.calendar = new CalendarBackendApp();

    await this.calendar.start();
    await this.backofficeBackend.start();
    await this.backofficeFrontend.start();

    return this.backofficeFrontend.port;
  }

  static async stop() {
    await this.calendar.stop();
    await this.backofficeBackend.stop();
    await this.backofficeFrontend.stop();
  }
}
