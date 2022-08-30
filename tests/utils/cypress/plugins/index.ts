import backendBackofficecontainer from '../../../../src/apps/backoffice/backend/dependency-injection';
import { seed } from '../../../../src/apps/backoffice/frontend/seed';
import calendarContainer from '../../../../src/apps/calendar/backend/dependency-injection';
import { EnvironmentArranger } from '../../../Contexts/Shared/infrastructure/arranger/EnvironmentArranger';

const calendarEnvironmentArranger: Promise<EnvironmentArranger> = calendarContainer.get('Calendar.EnvironmentArranger');
const BackofficeBackendEnvironmentArranger: Promise<EnvironmentArranger> = backendBackofficecontainer.get(
  'Backoffice.Backend.EnvironmentArranger'
);

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfig) => {
  on('task', {
    async 'reset:calendar:db'() {
      await (await calendarEnvironmentArranger).arrange();
      await seed();
      return null;
    },

    async 'reset:backoffice:db'() {
      await (await BackofficeBackendEnvironmentArranger).arrange();
      return null;
    }
  });
};
